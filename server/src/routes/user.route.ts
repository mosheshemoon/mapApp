import * as express from 'express';
import { UserRepo } from '../repos/user';
import { authMiddleware } from '../middlewares/auth';

const userRouter = express.Router();
const userRepo = new UserRepo();

userRouter.post('/', async (req, res) => {
    try {
        const user = await userRepo.Create(req.body);
        const token = await userRepo.GenerateAuthToken(user);
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error)
    }
});

userRouter.post('/login', async(req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await userRepo.FindByCredentials(userName, password);
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'});
        }

        const token = await userRepo.GenerateAuthToken(user);
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error)
    }
});

export { userRouter };
