import PlantError from "./PlantError";

export default class EmptyPlantNameError extends PlantError {
    constructor(message = 'Empty plant name is not allowed') {
        super(message)
    }
}