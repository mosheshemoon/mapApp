import { IUserLocation, IUserLocationModel } from "../models/userLocations";

import UserLocationModel from "../models/userLocations";

export class UserLocationsRepo {

    async Create(userLocation: IUserLocationModel): Promise<IUserLocation> {
        const userName = userLocation.userName;
        const locations = JSON.stringify(userLocation.locations);
        const user = await UserLocationModel.findOne({userName});
        userLocation.locations = locations;
        if (user) {
            user.locations = locations;
            return await user.save();
        }

        const userLocationDocument = new UserLocationModel(userLocation);
        return await userLocationDocument.save();
    }

    async GetLocations(userName: string): Promise<IUserLocation> {
        const query = [
            { $match: { userName } }
        ];
      
        return await UserLocationModel.aggregate(query).exec();
    }
}
