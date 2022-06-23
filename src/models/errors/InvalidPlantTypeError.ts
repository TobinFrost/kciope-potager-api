import PlantError from "./PlantError";

export default class InvalidPlantTypeError extends PlantError{
    constructor(message = "Plant type must be defined"){
        super(message)
    }
}