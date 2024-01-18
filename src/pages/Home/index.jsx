import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../misc/colors";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
} from "react-native";
import Input from "../../components/Input";
import Adventure from "../../components/Adventure";
import HeaderBtn from "../../components/HeaderBtn";
import GeneratorModal from "../../components/GeneratorModal";
import { useAdventures } from "../../contexts/adventureProvider";
import { useNavigation } from "@react-navigation/native";
import BackgroundView from "../../components/BackgroundView";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [resultNotFound, setResultNotFound] = useState(false);
  const [search, setSearch] = useState("");

  const { adventures, setAdventures, findAdventures } = useAdventures();

  const navigation = useNavigation();

  const handleOnSubmit = async (
    nomeAventura,
    descricao,
    objetivo,
    gancho,
    npc,
    cenario,
    desafio,
    reviravolta,
    tema,
    atmosfera,
    recompensa,
    local
  ) => {
    const time = new Date().getTime();
    const aventura = {
      id: time,
      nomeAventura,
      descricao,
      objetivo,
      gancho,
      npc,
      cenario,
      desafio,
      reviravolta,
      tema,
      atmosfera,
      recompensa,
      local,
    };
    const addAdventure = [...adventures, aventura];
    setAdventures(addAdventure);
    await AsyncStorage.setItem("adventures", JSON.stringify(addAdventure));
  };

  const openAdventure = (adventure) => {
    console.log(adventure);
    navigation.navigate("Details", { adventure });
  };

  const handleOnSearchInput = async (text) => {
    console.log(adventures.length);
    setSearch(text);
    if (!text.trim()) {
      setSearch("");
      setResultNotFound(false);
      return await findAdventures();
    }

    const filteredAdventure = adventures.filter((adventure) => {
      if (adventure.nomeAventura.toLowerCase().includes(text.toLowerCase())) {
        return adventure;
      }
    });

    if (filteredAdventure.length) {
      setAdventures([...filteredAdventure]);
    } else {
      setResultNotFound(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Minhas Aventuras</Text>
          <HeaderBtn onPress={() => setModalVisible(true)} />
        </View>
        <View>
          <Input
            value={search}
            placeholder="Procure suas aventuras..."
            onChangeText={handleOnSearchInput}
          />
        </View>

        {!adventures.length ? (
          <BackgroundView text="Sem aventura criada" />
        ) : null}

        {resultNotFound ? (
          <BackgroundView text="Nenhuma aventura encontrada" />
        ) : (
          <FlatList
            data={adventures}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Adventure onPress={() => openAdventure(item)} item={item} />
            )}
          />
        )}

        <GeneratorModal
          visible={modalVisible}
          closeModal={() => setModalVisible(false)}
          onSubmit={handleOnSubmit}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.PRIMARY,
  },
});
