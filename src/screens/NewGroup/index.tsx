import React, { useState } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@/components/Header";
import { HighLight } from "@/components/HighLight";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { groupCreate } from "@/storage/group/groupCreate";
import { AppError } from "@/utils/AppError";
import { Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar um novo grupo.");
        console.log(error);
      }
    }
  }

  return (
    <S.Container>
      <Header showBackButton />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        extraHeight={100}
        enableOnAndroid={true}
      >
        <S.Content>
          <S.Icon />
          <HighLight
            title="Nova turma"
            subtitle="Crie a turma para adicionar pessoas"
          />
          <Input
            placeholder="Nome da turma"
            onChangeText={setGroup}
            value={group}
          />

          <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
        </S.Content>
      </KeyboardAwareScrollView>
    </S.Container>
  );
}
