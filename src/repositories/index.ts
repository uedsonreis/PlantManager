import storage from '@react-native-async-storage/async-storage';

import { UserRepository } from './user.repository';

export const userRepository = new UserRepository(storage);