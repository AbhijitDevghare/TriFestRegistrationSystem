const mongoose=require("mongoose");

const Photos=new mongoose.Schema({
    imageUrl:{
        type:String,
        unique:[true,"Image URL is not available"],
        trim:true,
        required:true
    }
})


module.exports=mongoose.model("Photos",Photos);