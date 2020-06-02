import * as bcrypt from 'bcryptjs';
import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IUserModel {
    userName: string;
    password: string;
}

export interface IUser extends IUserModel, Document {
    tokens: { token: string }[];
}

const userSchema: Schema = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 7 }
});

export default mongoose.model<IUser>('User', userSchema);