const mongoose=require("mongoose");

const compInfo=new mongoose.Schema({
    // id:{
    //     type:Number,
    //     unique:true,
    //     primaryKey:true
    // },
    name:{
        type:String,
        required:[true,"Competition name is required"],
        unique:[true,"Competition name is not available"],
        maxLength:[20,"Competition name should not exceed  30 characters"],
        trim:true
    },
    imageUrl:{
        type:String,
        trim:true,
        required:[true,"Image url or address required"],
        // unique:[true,"Image URL is not available"],

    },

    startDate:{
        type:String,
        required:[true,"Start date is required"],
        

    },
    endDate:{
        type:String,
        required:[true,"End Date is required"],

    },
    time:{
        type:String,
        maxLength:10,
        default : ""
    },
    description:{
        type:String,
        required:[true,"Description is Required"],
    },
    fees:{
        type:String,
        required:[true,"Fees field required"],
    },
    coordinators:{
        coordinator1:{
            required:[true,"Please enter atleast one coordinator name"],
            type:String,
        },
        coordinator2:{
            type:String,
            default:""
        },
        coordinator3:{
            type:String,
            default:""

        },
        contactNum:{
            type:Number,
            maxLength:10,
            required:[true,"Contact Number is required"],
            
        }
    },
    prize:{
        firstPlace:{
            type:String,
            required:[true,"Please Enter the prize field"]
        },
        secondPlace:{
            type:String

        },thirdPlace:{
            type:String
        }
    }
        
    

}, {
    timestamps : true
})


// Middleware to automatically generate id

// compInfo.pre('save', async function(next) {
//     const doc = this;
//     if (!doc.id) {
//         // Generate id if not provided
//         const count = await mongoose.model('compInfo').countDocuments();
//         doc.id = count + 1;
//     }
//     next();
// });




module.exports=mongoose.model("compInfo",compInfo);