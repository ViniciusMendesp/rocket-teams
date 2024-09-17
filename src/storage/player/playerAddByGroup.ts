import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@/utils/AppError";

import { PlAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayes = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayes.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já esta adicionada em um time aqui.");
    }

    const storage = JSON.stringify([...storedPlayes, newPlayer]);

    await AsyncStorage.setItem(`${PlAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
