import mongoose from "mongoose";

export interface Iuser{
    name: string;
    appat: string;
    apmat: string;   
}

export interface IuserModel extends mongoose.Model<any>{
    build(attr: Iuser): any
}