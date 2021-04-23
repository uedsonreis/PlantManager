import { AsyncStorageStatic } from "@react-native-async-storage/async-storage";

export class UserRepository {

    private readonly key = "@PlantManager:USER";

    constructor(private readonly storage: AsyncStorageStatic) {}

    public async save(user: any) {
        await this.storage.setItem(this.key, JSON.stringify(user));
    }

    public async getUser() {
        const userString = await this.storage.getItem(this.key);
        if (!userString) return null;
        return await JSON.parse(userString);
    }

}