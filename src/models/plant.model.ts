import EmptyPlantNameError from "./errors/EmptyPlantNameError";
import InvalidPlantTypeError from "./errors/InvalidPlantTypeError";
import PlantState from "./state.enum";
import PlantType from "./type.enum";
import { v1 as timestamp_uuid } from 'uuid';


export default class Plant {
    private id : string;
    private state : PlantState;
    private updated : Date;
    constructor(private name: string,private type : PlantType,private description : string){
        this._name = name;
        // TODO : generate id
        this.id = timestamp_uuid();
        this.updated = new Date();
        this.state = PlantState.PLANTED;
        if (type.length == 0 || [PlantType.FRUIT, PlantType.VEGETABLE].indexOf(type) == -1){
            throw new InvalidPlantTypeError()
        }
    }

    // getters
    get _id ()  : string{ return this.id};
    get _name () : string { return this.name}
    get _state () : PlantState {return this.state}
    get _updated() : Date {return this.updated}
    get _description(): string { return this.description}
    get _type(): PlantType { return this.type}
    // setters
    set _state (s : PlantState) {
        this.state = s
    }
    set _updated(date : Date) {
        this.updated = date
    }
    set _description( desc : string) {
        this.description = desc;
    }
    set _name(n : string) {
        if (n.length == 0) {
            throw new EmptyPlantNameError()
        }
        this.name = n;
    }
}