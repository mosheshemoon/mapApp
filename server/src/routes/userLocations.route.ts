import * as express from 'express';
import { UserLocationsRepo } from '../repos/userLocations';
import { authMiddleware } from '../middlewares/auth';
import { IUserLocations, IUserLocationsModel } from '../models/userLocations';

const userLocationsRouter = express.Router();
const userLocationsRepo = new UserLocationsRepo();

userLocationsRouter.post('/', authMiddleware, async (req, res) => {
    try {
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
    let response = await userLocationsRepo.GetLocations(userName);
    let userLocations: IUserLocations = response[0];
    if (userLocations) {
        userLocations.locations = userLocations ? JSON.parse(userLocations?.locations) : []
    }

    res.status(userLocations ? 200 : 404).send(userLocations);
});

export { userLocationsRouter };
