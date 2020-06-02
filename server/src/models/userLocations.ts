import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IUserLocationModel {
    userName: string;
    locations: string;
}

export interface IUserLocation extends IUserLocationModel, Document {

}

const userLocationSchema: Schema = new Schema({
    userName: { type: String, required: true, unique: true },
    locations: { type: String, required: true }
});

export default mongoose.model<IUserLocation>('UserLocation', userLocationSchema);