import Plant from './plant.model';
import PlantType from './type.enum';
import PlantState from './state.enum'
import EmptyPlantNameError from './errors/EmptyPlantNameError';


describe('Plant', () => {
    test('create', () => {
        const plant = new Plant('Banana',PlantType.FRUIT,'blabla');

        expect(plant).toBeDefined();
        expect(plant._name).toEqual('Banana');
        expect(plant._state).toEqual(PlantState.PLANTED);
        expect(plant._description).toEqual('blabla')
    });
    test('create plant with a empty name', () => {
        expect(() => new Plant('',PlantType.FRUIT,'blabla')).toThrowError(EmptyPlantNameError)
    })
});