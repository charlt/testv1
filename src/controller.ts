import { User } from './services';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { User as userModel } from "./models/user.model";
import { Tuser } from './typings/user.type';
const api = express.Router();
const jsonParser = bodyParser.json();

api.post('/user', jsonParser, async (req: Request, res: Response) => {
    try {
        const { name, appat, apmat } = req.body;
        if (name === undefined ||
            appat === undefined ||
            apmat === undefined) {
            return res.status(400).json({ message: 'Request is bad' })
        }
        const user: User = new User(userModel);
        const data: Tuser = await user.createUser(name, appat, apmat);
        res.status(201).send({data, message: "success"});
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});


api.get('/user', async (req: Request, res: Response) => {
    try {
        const user: User = new User(userModel);
        const data: Tuser[] = await user.getUsers();
        res.status(201).send({data, message: "success"});
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

export { api as controller };

