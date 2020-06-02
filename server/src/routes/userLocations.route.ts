import * as express from 'express';
import {UserLocationsRepo } from '../repos/userLocations';
import { authMiddleware } from '../middlewares/auth';
import { IUserLocation } from '../models/userLocations';

const userLocationsRouter = express.Router();
const userLocationsRepo = new UserLocationsRepo();

userLocationsRouter.post('/', authMiddleware, async (req, res) => {
    try{
        const { userName, locations } = req.body;
        const user = await userLocationsRepo.Create({ locations, userName });
        user.save();
        res.status(201).send("created successfully");
    } catch (err) {
        res.status(500).send("failed to create user");
    }
});

userLocationsRouter.get('/', authMiddleware, async (req, res) => {
    const userName: any = req.query.userName;
    let userLocation: IUserLocation = await userLocationsRepo.GetLocations(userName);
    console.log(userLocation);
    userLocation[0].locations = JSON.parse(userLocation[0]?.locations);

    res.status(userLocation[0] ? 200 : 404).send(userLocation[0]);
});

export { userLocationsRouter };
