import AsyncStorage from "@react-native-async-storage/async-storage";

import { PlAYER_COLLECTION } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playersGetByGroup(group);

    const filtered = storage.filter((player) => player.name !== playerName);

    const players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PlAYER_COLLECTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
}
