import PlantService from "../../services/plant.service"
import { Request, Response } from 'express';
import Plant from "../../models/plant.model";
import PlantError from "../../models/errors/PlantError";
import { Container, Service } from 'typedi';

@Service()
class Controller {
    
    private plantService: PlantService
    
    constructor(plantService : PlantService){
        this.plantService = plantService;
    }

    /**
     * return all plants
     */
    all(req: Request, res: Response ) {
        const {limit = 10, skip, type} = req.query;
        const plantType = type && `${type}`;
        const plants = this.plantService.all(plantType);
        const _skip = parseInt(`${skip}`);
        const _limit = parseInt(`${limit}`);
        
        const result  = this.plantService.paginator(plants, 
            _skip, _limit)
        // const last_page = Math.ceil(count / limit);
        res.status(200).json(
            result
        )

    }

    add(req: Request, res: Response) {
        const {name, type, description} = req.body;
        try {

            const newPlant = new  Plant(name,type,description);
            
            this.plantService.add(newPlant)
            return res.status(201).json({
                message : 'Plant added succesfully',
                data : newPlant
            })

        } catch (error) {
            console.error(error)
            if(error instanceof PlantError) {
                res.status(500).json({
                    message: error.message,
                    details : error.stack
                })
            } else {
                res.status(500).json({
                    message: 'Something went wrong',
                    
                })
            }
            
        }
        
        
    }

    /**
     * get Plant By Id
     */
     getById(req: Request, res: Response ){
        const id = req.params['id'];
        try {

            const plant = this.plantService.get(id);
            if(plant){
                return res.status(200).json({
                    data : plant
                })
            } else {
                return res.status(404).json({
                    message : "Plant not found"
                })
            }
            
            
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Something went wrong',
                
            })
        }
    }

    update(req: Request, res: Response ){
        const plant : Plant = req.body
        try {
            
            const updated_plant = this.plantService.update(plant);
            if(plant){
                return res.status(200).json({
                    data : updated_plant
                })
            } else {
                return res.status(404).json({
                    message : "Plant not found"
                })
            }
            
            
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Something went wrong',
                
            })
        }
    }

    delete(req: Request, res: Response ){
        const id = req.params['id'];
        try {

            const plant = this.plantService.delete(id);
            if(plant){
                return res.status(200).json({
                    data : plant
                })
            } else {
                return res.status(404).json({
                    message : "Plant not found"
                })
            }
            
            
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Something went wrong',
                
            })
        }
    }
    
}

const container = Container.get(Controller)

export default container;