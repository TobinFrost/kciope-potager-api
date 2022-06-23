import PlantType from "../models/type.enum";
import { Service } from "typedi";
import Plant from "../models/plant.model";
import mockup from '../models/plant.mock';
@Service()
 class PlantService {
    private _plants : Plant[] = [];

    all(type?: string){
        if(type && type.length > 0){
            return this._plants.filter(plant => plant._type === type)
        }
        return this._plants;
    }
    add(plant : Plant){
        this._plants.push(plant);
    }
    get(id: string){
        return this._plants.find(plant  => plant._id === id);
    }
    update(plant : Plant){
        
        const _index = this._plants.findIndex(_plant => {
            return _plant._id === plant['id'];
        });

        if (_index !== -1) {
            
            const plant_to_update = this._plants[_index];
            plant_to_update._name = plant['name'];
            plant_to_update._state = plant['state'];
            plant_to_update._description = plant['description'];
            plant_to_update._updated = new Date();
            return plant_to_update;
          }
          return null
    }
    delete(id: string){
        
        const _index = this._plants.findIndex(plant => {
            return plant._id === id;
          });
              
          if (_index !== -1) {
            const plant = this._plants[_index];
            this._plants.splice(_index, 1);
            return plant;
          }
          return null
    }

    paginator(items : Plant[], current_page? : number, per_page_items?: number) {
        let page = current_page || 1,
        per_page = per_page_items || 10,
        offset = (page - 1) * per_page,
    
        paginatedItems = items.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items.length / per_page);
    
        return {
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
        };
    }
}

export default PlantService;
