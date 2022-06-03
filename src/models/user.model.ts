import mongoose from 'mongoose';
import { Iuser, IuserModel } from '../interfaces/user.interface';

const UsuarioSchema= new mongoose.Schema({
    name: String,
    appat: String,
    apmat: String,
})

UsuarioSchema.statics.build = (attr: Iuser)=>{
    return new User(attr);
}

const User = mongoose.model<any, IuserModel>('User', UsuarioSchema);

export { User }
