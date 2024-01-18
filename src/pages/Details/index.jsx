import React, { useState } from "react";
import colors from "../../misc/colors";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import BorderlessButton from "../../components/BorderlessButton";
import InfoText from "../../components/InfoText";
import { useNavigation } from "@react-navigation/native";
import GeneratorModal from "../../components/GeneratorModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAdventures } from "../../contexts/adventureProvider";

export default function Details(props) {
  const [adventure, setAdventure] = useState(props.route.params.adventure);
  const [isEdit, setIsEdit] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { setAdventures } = useAdventures();

  const navigation = useNavigation();

  const deleteAventura = async () => {
    const result = await AsyncStorage.getItem("adventures");
    let adventures = [];
    if (result !== null) adventures = JSON.parse(result);

    const thisAdventure = adventures.filter((a) => a.id !== adventure.id);
    setAdventures(thisAdventure);
    await AsyncStorage.setItem("adventures", JSON.stringify(thisAdventure));
    props.navigation.goBack();
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      "Você tem certeza?",
      "Isso irá apagar essa Aventura permanentemente",
      [
        {
          text: "Sim",
          onPress: deleteAventura,
        },
        {
          text: "Não",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const openEditModal = () => {
    setIsEdit(true);
    setModalVisible(true);
  };

  const handleUpdate = async (
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
    const result = await AsyncStorage.getItem("adventures");
    let adventures = [];
    if (result !== null) adventures = JSON.parse(result);

    const editAdventure = adventures.filter((a) => {
      if (a.id === adventure.id) {
        a.nomeAventura = nomeAventura;
        a.descricao = descricao;
        a.objetivo = objetivo;
        a.gancho = gancho;
        a.npc = npc;
        a.cenario = cenario;
        a.desafio = desafio;
        a.reviravolta = reviravolta;
        a.tema = tema;
        a.atmosfera = atmosfera;
        a.recompensa = recompensa;
        a.local = local;

        setAdventure(a);
      }

      return a;
    });

    setAdventures(editAdventure);
    await AsyncStorage.setItem("adventures", JSON.stringify(editAdventure));
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <BorderlessButton
            btnName="chevron-thin-left"
            size={28}
            color={colors.PRIMARY}
            onPress={navigation.goBack}
          />
          <Text style={styles.headerText}>{adventure.nomeAventura}</Text>
          <View style={{ width: 28 }}></View>
        </View>

        <ScrollView>
          <InfoText
            title={"Descrição da Aventura"}
            desc={adventure.descricao}
          />

          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={openEditModal}>
              <Text style={[styles.btnAction, { color: colors.GREEN }]}>
                Editar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={displayDeleteAlert}>
              <Text style={[styles.btnAction, { color: colors.RED }]}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.generatorContainer}>
            <Text style={styles.legend}>Detalher:</Text>
            <InfoText title={"Objetivo"} desc={adventure.objetivo} />
            <InfoText title={"Gancho da Aventura"} desc={adventure.gancho} />
            <InfoText title={"NPC Importante"} desc={adventure.npc} />
            <InfoText title={"Cenário"} desc={adventure.cenario} />
            <InfoText title={"Desafio"} desc={adventure.desafio} />
            <InfoText
              title={"Reviravolta - (plot twist)"}
              desc={adventure.reviravolta}
            />
            <InfoText title={"Tema da Aventura"} desc={adventure.tema} />
            <InfoText
              title={"Atmosfera da Aventura"}
              desc={adventure.atmosfera}
            />
            <InfoText
              title={"Possível Recompensa"}
              desc={adventure.recompensa}
            />
            <InfoText
              title={"Possível Local de Interesse"}
              desc={adventure.local}
            />
          </View>
        </ScrollView>
      </View>

      <GeneratorModal
        aventura={adventure}
        isEdit={isEdit}
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onSubmit={handleUpdate}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.LIGHT,
  },
  date: {
    position: "absolute",
    right: 10,
    fontSize: 12,
    color: colors.DARK,
    fontWeight: "300",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.PRIMARY,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 24,
  },
  btnAction: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  generatorContainer: {
    marginTop: 8,
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.SECONDARY,
    gap: 4,
  },
  legend: {
    position: "absolute",
    top: -11,
    left: 10,
    backgroundColor: colors.LIGHT,
    borderRadius: 100,
    color: colors.PRIMARY,
  },
});
