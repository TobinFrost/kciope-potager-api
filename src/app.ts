import express from 'express';
import { route } from './routes';
import morgan from 'morgan';
import cors from 'cors';

class App {
    app = express();
    constructor() {
        this.config();
        route(this.app)
    }

    config() {
        this.app.use(cors())
        // 
        this.app.use(express.json())
        // add morgan as logger 
            this.app.use(morgan('combined'))
        
        
    }
}
export default new App().app;
