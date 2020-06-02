import * as http from 'http';
import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import { getMainRouter } from '../routes/routing';

export function getServer() {

    const app = express();

    app.use(helmet());

    // configure handling body of requests
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json({ limit: '2mb' }));
    app.use("/", getMainRouter());

    const server = http.createServer(app);
    return server;
}
