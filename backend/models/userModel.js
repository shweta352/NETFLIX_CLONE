const mongoose =require ('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{tiestamp:true});

module.exports= User = mongoose.model("User", userSchema);