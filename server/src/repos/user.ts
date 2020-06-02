
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { IUser, IUserModel } from "../models/user";
import UserModel from "../models/user";

export class UserRepo {

    async Create(user: IUserModel): Promise<IUser> {
        const userDocument = new UserModel(user);

        userDocument.password = await bcrypt.hash(user.password, 8);
        return await userDocument.save();
    }

    async FindByUserName(userName: string): Promise<IUser> {
        return await await UserModel.findOne({ userName });
    }

    async FindByCredentials(userName: string, password: string): Promise<IUser> {
        const user: IUser = await this.FindByUserName(userName);
        if (!user) {
            throw new Error('Invalid login credentials');
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            throw new Error('Invalid login credentials');
        }
        return user;
    }

    async GenerateAuthToken(user: IUser): Promise<string> {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);

        return token;
    }
}
