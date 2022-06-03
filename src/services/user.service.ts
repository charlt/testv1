
import { Iuser } from "../interfaces/user.interface";
import { Tuser } from "../typings/user.type";
import { User as userModel } from "../models/user.model";
export default class User {
    userModel: typeof userModel;

    constructor(model: typeof userModel) {
        this.userModel = model;
    }

    async createUser(name: string, appat: string, apmat: string): Promise<Tuser> {
        const dataUser: Iuser = {
            apmat,
            appat,
            name
        }
        const userToSave = this.userModel.build(dataUser);
        return userToSave.save();
        
    }

    async getUsers(): Promise<Tuser[]>{
        return this.userModel.find();
    }
}