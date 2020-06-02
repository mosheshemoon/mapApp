
import * as jwt from 'jsonwebtoken';
import { UserRepo } from '../repos/user';
import { IUser } from '../models/user';

const userRepo = new UserRepo();

const auth = async (req, res, next) => {
    try {
        if (!req.header('Authorization')) {
            return res.status(401).send({ error: 'Not authorized to access this resource' });
        }

        const token = req.header('Authorization').replace('Bearer ', '');
        jwt.verify(token, process.env.JWT_KEY);
        const user: IUser = await userRepo.FindByUserName(req.query.userName);
        if (!user) {
            res.status(401).send({ error: 'Not authorized to access this resource' });
        }
        
        req.user = user;
        req.token = token;
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' });
    }
}

export { auth as authMiddleware };