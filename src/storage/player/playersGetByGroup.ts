import AsyncStorage from "@react-native-async-storage/async-storage";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PlAYER_COLLECTION } from "../storageConfig";

export async function playersGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PlAYER_COLLECTION}-${group}`);

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
