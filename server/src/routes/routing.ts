import * as express from 'express';
import { userRouter } from './user.route';
import { userLocationsRouter } from './userLocations.route';

export function getMainRouter() {
    const mainRouter = express.Router();
    mainRouter.use('/user', userRouter);
    mainRouter.use('/userLocations', userLocationsRouter);
    return mainRouter;
}
