import { AsyncStorageStatic } from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

import { Plant } from "../models";

interface PlantList {
    [id: string]: Plant;
}

export class PlantRepository {

    private readonly key = "@PlantManager:PLANTS";

    constructor(private readonly storage: AsyncStorageStatic) {}

    public async save(plant: Plant) {
        const oldPlants = await this.getData();

        await this.storage.setItem(this.key, JSON.stringify({
            [plant.id]: plant, ...oldPlants
        } as PlantList));
    }

    public async getPlants() {
        const plantList = await this.getData();

        const plants = Object.keys(plantList).map(id => {
            const plant = plantList[id];
            return {
                ...plant,
                hour: format(new Date(plant.dateTimeNotification), 'HH:mm')
            }
        });
        
        return plants.sort((a, b) => (
            Math.floor(
                new Date(a.dateTimeNotification).getTime() / 1000 -
                Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
            )
        ));
    }

    private async getData() {
        const jsonString = await this.storage.getItem(this.key);
        const data = jsonString ? JSON.parse(jsonString) : {};
        return data as PlantList;
    }

}