export default class PlantError extends Error {
    constructor(message = 'Plant Error Occurs'){
        super(message)
    }
}