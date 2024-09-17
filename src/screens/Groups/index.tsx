import { Header } from "@/components/Header";
import * as S from "./styles";
import { HighLight } from "@/components/HighLight";
import { GroupCard } from "@/components/GroupCard";
import { useCallback, useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "@/storage/group/groupsGetAll";
import { useFocusEffect } from "expo-router";
import { Loading } from "@/components/Loading";

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Turmas", "Não foi possível carregar as turmas.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          }
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
