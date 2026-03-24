import mongoose from 'mongoose';
const connectDB = async (): Promise<void> =>{

    const MONGODB_URI : string | undefined = process.env.MONGODB_URI as string;
    if(!MONGODB_URI) throw new Error("MONGODB_URI is not defined");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
}

export default connectDB;