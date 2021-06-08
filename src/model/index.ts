import mongoose from "mongoose";
import Auth from './login'

export const connection = async function() {
    try {
        await mongoose.connect('mongodb://localhost:27017/training', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected database");
    } catch (error) {
        console.log(error);
    }
}

// export const ModelAuth = Auth;


