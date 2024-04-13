require("dotenv").config();
const emailValidator=require("email-validator");
const User=require("../model/userSchema.js");
const compInfo = require("../model/compSchema.js");
const Photos=require("../model/photosSchema.js");
const bcrypt=require("bcrypt");

const home=async (req,resp,next)=>{
   resp.status(200).json({
    success:true,
    message:"Welcome to the home Page"
   })
}

// USER CONTROLLERS

//==========================Signup Function ===================================================//
const signup = async (req,resp,next)=>{

      try{

        const { name , username , email , password , confirmPassword  } = req.body;

        if(!name || !username  || !email || !password || !confirmPassword )
        {
            return resp.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        //validate email

        const validateEmail = await emailValidator.validate(email);
        if(!validateEmail)
        {
           throw new Error("Not a valid email")
        }

        //check password is equal to confirm password

        if( password != confirmPassword )
        {
            throw new Error("Password must be same")
        }


    //    Save The Data 
        const  userInstance = await User(req.body);
        await userInstance.save();

        resp.status(200).json({
            success:true,
            message:"User Created Successfully"
        })



      }catch(error){

        if(error.code === 11000 ) {

            return resp.json({
            message:"User already exists"
            })
        }
         return resp.status(400).json({ 
            success:false,
            message:error.message
        })
      }

}


//================================================Login====================================================

const login=async (req,resp,next)=>{

    try{
        // console.log("LOGIN CONTROLLER")
        const { username,password }=req.body;

        //return an error message if username or password is missing
    
        if(!username || !password)
        {
            return resp.status(400).json({
                success:false,
                message:"username and password are required"
            });
        }

        //check if user exists

        const user = await User.findOne({username})
        .select('+password');

        

        if(!user)
        {
            throw new Error("User doesnt exists")
        }

        const checkPassword = await bcrypt.compare(password,user.password);
        

        if(checkPassword)
        {
        const token = await user.jwtToken();
        user.password=undefined;

        const cookieOption =  {
            maxAge : 24*60*60*1000,
            httpOnly:true //It means it cant be accessed from client side
        };

        await resp.cookie("token",token,cookieOption);
            // console.log(user)
            return resp.status(200).json({
                success:true,
                message:"Login SuccessFul",
                data:user
            })
        }
        else{

            return resp.status(400).json({
                success:false,
                message:"Invalid Credentials",
                })
        }  


    }catch(error){


        return resp.status(400).json({
            success:false,
            message:error.message
        })
    }
}


//=======================================lOGOUT Controller================================================

const logout = async (req,resp,next)=>{
   console.log("REQUEST FOR LOGOUT")
    try{
        const cookieOption={
            expires:new Date(),
            httpOnly:true
        };

        resp.cookie("token",null,cookieOption);
        resp.status(200).json({
            success:true,
            message:"Logged Out"
        })
    } catch(error){
          resp.status(400).json({
            success:true,
            message:error.message
          })
    }

}

// getusercontroller

const getuser = async (req,resp)=>{
    
    try{
        const userId = req.user.id;
        const user = await User.findById(userId);
        user.password=undefined;

        return resp.status(200).json({
            success:true,
            data:user,
        })
    }catch(error){
        return resp.status(400).json({
            success:false,
            message:error.message
        })
    }
}



// ====================================getCompetition====================================================
const getCompetitions = async (req,resp)=>{
    try{
        const comptitions = await compInfo.find();
        const photos = await Photos.find();
        return resp.status(200).json({
            success:true,
            competitionData:comptitions,
            photos:photos

        })

    }catch(error)
    {
        return resp.status(400).json({
            success:false,
            message:error.message
        })
    }
}

//==================================getSpecificCompetitionDEtails======================================
const getCompDescription= async(req,resp)=>{
    try{
        console.log("getCompDEscription Requested on the server : ")
        const id = req.params.id;  
        console.log("Prinitng the received id "+id)
        const competitonDes = await compInfo.findById(id);

        return resp.status(200).json({
            success:true,
            message:competitonDes
        })   
    }catch(error)
    {
        return resp.status(400).json({
            success:false,
            message:error.message
        })
    }
}




//============================== Controller to add the competitions=======================================
const addCompetition= async (req,resp)=>{
    console.log("requested for adding competiton")
    try{
        // Authenticating the user before adding competition
        const userId = req.user.id;
        const user = await User.findById(userId);
        if(!(user.role=="admin"))
        {
            return resp.status(400).json({
                success:false,
                message:"Not authenticated"
            })
        }


        const {name,imageUrl,startDate,endDate,description,fees,coordinators} = req.body
        
        if(!name  || !imageUrl || !startDate || !endDate || !description || !fees || !coordinators )
            {
                return resp.status(400).json({
                    success:false,
                    message:"All fields are required"
                })
            }
        
            //Save the Competition Data
        const compInfoInstance=await compInfo(req.body);
        await compInfoInstance.save();


        return resp.status(200).json({
                success:true,
                message:"Successfully added the competition"
            })

    }catch(error)
    {
        return resp.status(400).json({
            success:false,
            message:error.message
        })
    }
}

//++++++++===============================DELETE THE COMPETITION=========================+++++++++++++++++++
const delCompetition = async (req, resp) => {
    try {
        // Authenticating the user before deleting competition
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!(user && user.role === "admin")) {
            return resp.status(400).json({
                success: false,
                message: "Not authenticated"
            })
        }
        console.log("REQUESTED FOR DELETING COMP    ")

        const id = req.params.id; // Assuming you pass competition ID in URL params

        // Find and delete the competition
        const deletedCompetition = await compInfo.findOneAndDelete({ _id: id });

        if (!deletedCompetition) {
            return resp.status(404).json({
                success: false,
                message: "Competition not found"
            });
        }

        return resp.status(200).json({
            success: true,
            message: "Successfully deleted the competition"
        });

    } catch (error) {
        return resp.status(400).json({
            success: false,
            message: error.message
        })
    }
}



//================================EDIT the competition data===============================================

const editCompetition = async (req, resp) => {
    try {
        const { id, ...updates } = req.body; // Assuming the request body contains the updated competition details with the competition ID

        // Find the competition document by ID and update it with the new details
        const updatedCompetition = await compInfo.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedCompetition) {
            return resp.status(404).json({
                success: false,
                message: "Competition not found"
            });
        }

        return resp.status(200).json({
            success: true,
            message: "Successfully edited the competition",
            competition: updatedCompetition // Optionally, return the updated competition document
        });
    } catch (error) {
        return resp.status(400).json({
            success: false,
            message: error.message
        });
    }
}

//Adding Photos
const addPhoto = async(req,resp)=>{
    try{
        console.log("ADD PHOTO CALLED")
        //Authenticating the user before adding competition
        const userId = req.user.id;
        const user = await User.findById(userId);
        if(!(user.role=="admin"))
        {
            return resp.status(400).json({
                success:false,
                message:"Not authenticated"
            })
        }

        const {imageUrl} = req.body
        console.log(imageUrl)
        
        if(!imageUrl )
            {
                return resp.status(400).json({
                    success:false,
                    message:"Image Url is required"
                })
            }
        
        //Save the Image Url 
        const photoInfoInstance=await Photos(req.body);
        await photoInfoInstance.save();


        return resp.status(200).json({
                success:true,
                message:"Successfully added the Photo"
            })

    }catch(error)
    {
        return resp.status(400).json({
            success:false,
            message:error.message
        })
    }
}

// delete photos 
const deleteImage= async (req, resp) => {
    try {
        // Authenticating the user before deleting competition
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!(user && user.role === "admin")) {
            return resp.status(400).json({
                success: false,
                message: "Not authenticated"
            })
        }
        console.log("REQUESTED FOR DELETING Image    ")

        const id = req.params.id; // Assuming you pass competition ID in URL params

        // Find and delete the competition
        const deleteImage = await Photos.findOneAndDelete({ _id: id });

        if (!deleteImage) {
            return resp.status(404).json({
                success: false,
                message: "Image not found"
            });
        }

        return resp.status(200).json({
            success: true,
            message: "Successfully deleted the Image"
        });

    } catch (error) {
        return resp.status(400).json({
            success: false,
            message: error.message
        })
    }
}




module.exports = {
    home,
    signup,
    login,
    logout,
    getuser,
    addCompetition,
    delCompetition,
    editCompetition,
    addPhoto,
    getCompetitions,
    getCompDescription,
    deleteImage
}


