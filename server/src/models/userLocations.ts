import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IUserLocationsModel {
    userName: string;
    locations: string;
}

export interface IUserLocations extends IUserLocationsModel, Document {

}

const userLocationSchema: Schema = new Schema({
    userName: { type: String, required: true, unique: true },
    locations: { type: String, required: true }
});

export default mongoose.model<IUserLocations>('UserLocations', userLocationSchema);