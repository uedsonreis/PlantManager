import storage from '@react-native-async-storage/async-storage';

import { UserRepository } from './user.repository';
import { PlantRepository } from './plant.repository';

export const userRepository = new UserRepository(storage);
export const plantRepository = new PlantRepository(storage);