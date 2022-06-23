import { Express } from "express"
import PlantRouter from "../controllers/plant/plant.router";
export const route = (app : Express) => {
    app.use('/api/v1/plant', PlantRouter)
}