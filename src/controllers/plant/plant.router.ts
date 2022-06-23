import { Router } from "express"
import controller from './plant.controller';
const PlantRouter = Router();

PlantRouter.get('/:id', (req, res) => controller.getById(req, res))
            .get('/:type?/:offset?/:limit?/', (req, res) => controller.all(req, res))
            .post('/', (req, res) => controller.add(req, res))
            .put('/', (req, res) => controller.update(req, res))
            .delete('/:id', (req, res) => controller.delete(req, res))

export default PlantRouter;