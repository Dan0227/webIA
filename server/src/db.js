import mongoose from 'mongoose';

export const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb+srv://IAdb:022702012004@cluster0.zuvkm.mongodb.net/WebIA_register?retryWrites=true&w=majority&appName=Cluster0');
        console.log('>>>> DB is connected')
    } catch(error) {
        console.log(error);
    }
};