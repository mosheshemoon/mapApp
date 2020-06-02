import { IUserLocations, IUserLocationsModel } from "../models/userLocations";

import UserLocationsModel from "../models/userLocations";

export class UserLocationsRepo {

    async Create(userLocations: IUserLocationsModel): Promise<IUserLocations> {
        const userName = userLocations.userName;
        const locations = JSON.stringify(userLocations.locations);
        const user = await UserLocationsModel.findOne({userName});
        userLocations.locations = locations;
        if (user) {
            user.locations = locations;
            return await user.save();
        }

        const userLocationDocument = new UserLocationsModel(userLocations);
        return await userLocationDocument.save();
    }

    async GetLocations(userName: string): Promise<IUserLocations> {
        const query = [
            { $match: { userName } }
        ];
      
        return await UserLocationsModel.aggregate(query).exec();
    }
}
