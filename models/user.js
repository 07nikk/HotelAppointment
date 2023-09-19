import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        required:false,
        default: false
    }
},
    {timestamps : true}
);

UserSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password'))
    {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

export default mongoose.model("User",UserSchema);