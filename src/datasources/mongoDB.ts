import mongoose from 'mongoose';
import mongodbUri from 'mongodb-uri';

export default class MongoDB  {
    mongooseUri: string;

    constructor(){
         this.mongooseUri = mongodbUri.
        formatMongoose("mongodb+srv://root:mipass12#@cluster0.uxjy1.mongodb.net/?retryWrites=true&w=majority")
    }

    async connect(){
        return mongoose.connect(this.mongooseUri, {} ,(err) => {
            if (err) {
                throw err;
            } else {
                console.log("The app is connected to MongoDB");
            }
        });
    }

}