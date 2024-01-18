import { Modal, View, StyleSheet, ScrollView, Text } from "react-native";
import colors from "../../misc/colors";
import BorderlessButton from "../BorderlessButton";
import Input from "../Input";
import randomTable from "../../misc/randomTable";
import TextRandom from "../TextRandom";
import { useEffect, useState } from "react";

export default function GeneratorModal({
  visible,
  closeModal,
  onSubmit,
  aventura,
  isEdit,
}) {
  const [nomeAventura, setNomeAventura] = useState("");
  const [descricao, setDescricao] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [gancho, setGancho] = useState("");
  const [npc, setNPC] = useState("");
  const [cenario, setCenario] = useState("");
  const [desafio, setDesafio] = useState("");
  const [reviravolta, setReviravolta] = useState("");
  const [tema, setTema] = useState("");
  const [atmosfera, setAtmosfera] = useState("");
  const [recompensa, setRecompensa] = useState("");
  const [local, setLocal] = useState("");

  const handleCloseModal = () => {
    if (!isEdit) {
      setNomeAventura("");
      setDescricao("");
      setObjetivo("");
      setGancho("");
      setNPC("");
      setCenario("");
      setDesafio("");
      setReviravolta("");
      setTema("");
      setAtmosfera("");
      setRecompensa("");
      setLocal("");
    }
    closeModal();
  };

  const handleSubmit = () => {
    if (isEdit) {
      onSubmit(
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
      );
    } else {
      onSubmit(
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
      );
      setNomeAventura(""),
        setDescricao(""),
        setObjetivo(""),
        setGancho(""),
        setNPC(""),
        setCenario(""),
        setDesafio(""),
        setReviravolta(""),
        setTema(""),
        setAtmosfera(""),
        setRecompensa(""),
        setLocal("");
    }
    closeModal();
  };

  const handleRandom = () => {
    setObjetivo(
      randomTable.OBJETIVO[
        Math.floor(Math.random() * randomTable.OBJETIVO.length)
      ]
    );
    setGancho(
      randomTable.GANCHO[Math.floor(Math.random() * randomTable.GANCHO.length)]
    );
    setNPC(randomTable.NPC[Math.floor(Math.random() * randomTable.NPC.length)]);
    setCenario(
      randomTable.CENARIO[
        Math.floor(Math.random() * randomTable.CENARIO.length)
      ]
    );
    setDesafio(
      randomTable.DESAFIO[
        Math.floor(Math.random() * randomTable.DESAFIO.length)
      ]
    );
    setReviravolta(
      randomTable.REVIRAVOLTA[
        Math.floor(Math.random() * randomTable.REVIRAVOLTA.length)
      ]
    );
    setTema(
      randomTable.TEMA[Math.floor(Math.random() * randomTable.TEMA.length)]
    );
    setAtmosfera(
      randomTable.ATMOSFERA[
        Math.floor(Math.random() * randomTable.ATMOSFERA.length)
      ]
    );
    setRecompensa(
      randomTable.RECOMPENSA[
        Math.floor(Math.random() * randomTable.OBJETIVO.length)
      ]
    );
    setLocal(
      randomTable.LOCAL[Math.floor(Math.random() * randomTable.LOCAL.length)]
    );
  };

  useEffect(() => {
    if (isEdit) {
      setNomeAventura(aventura.nomeAventura);
      setDescricao(aventura.descricao);
      setObjetivo(aventura.desafio);
      setGancho(aventura.gancho);
      setNPC(aventura.npc);
      setCenario(aventura.cenario);
      setDesafio(aventura.desafio);
      setReviravolta(aventura.reviravolta);
      setTema(aventura.tema);
      setAtmosfera(aventura.atmosfera);
      setRecompensa(aventura.recompensa);
      setLocal(aventura.local);
    }
  }, [isEdit]);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <BorderlessButton
            btnName="chevron-thin-left"
            size={28}
            color={colors.PRIMARY}
            onPress={handleCloseModal}
          />

          <View style={styles.btnsHeader}>
            {nomeAventura.trim() ? (
              <BorderlessButton
                btnName="save"
                size={28}
                color={colors.GREEN}
                onPress={handleSubmit}
              />
            ) : null}
            <BorderlessButton
              btnName="ccw"
              size={28}
              color={colors.PRIMARY}
              onPress={handleRandom}
            />
          </View>
        </View>
        <Input
          value={nomeAventura}
          placeholder="Digite o Titulo da Aventura...."
          onChangeText={(text) => setNomeAventura(text)}
        />

        <ScrollView>
          <View style={styles.generatorContainer}>
            <TextRandom
              title="Objetivo"
              text={objetivo}
              onPress={() =>
                setObjetivo(
                  randomTable.OBJETIVO[
                    Math.floor(Math.random() * randomTable.OBJETIVO.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <TextRandom
              title="Gancho da Aventura"
              text={gancho}
              onPress={() =>
                setGancho(
                  randomTable.GANCHO[
                    Math.floor(Math.random() * randomTable.GANCHO.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <TextRandom
              title="NPC Importante"
              text={npc}
              onPress={() =>
                setNPC(
                  randomTable.NPC[
                    Math.floor(Math.random() * randomTable.NPC.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <TextRandom
              title="Cenário"
              text={cenario}
              onPress={() =>
                setCenario(
                  randomTable.CENARIO[
                    Math.floor(Math.random() * randomTable.CENARIO.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <TextRandom
              title="Desafio"
              text={desafio}
              onPress={() =>
                setDesafio(
                  randomTable.DESAFIO[
                    Math.floor(Math.random() * randomTable.DESAFIO.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <TextRandom
              title="Reviravolta - (plot twist)"
              text={reviravolta}
              onPress={() =>
                setReviravolta(
                  randomTable.REVIRAVOLTA[
                    Math.floor(Math.random() * randomTable.REVIRAVOLTA.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <TextRandom
              title="Tema da Aventura"
              text={tema}
              onPress={() =>
                setTema(
                  randomTable.TEMA[
                    Math.floor(Math.random() * randomTable.TEMA.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <TextRandom
              title="Atmosfera da Aventura"
              text={atmosfera}
              onPress={() =>
                setAtmosfera(
                  randomTable.ATMOSFERA[
                    Math.floor(Math.random() * randomTable.ATMOSFERA.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <TextRandom
              title="Possível Recompensa"
              text={recompensa}
              onPress={() =>
                setRecompensa(
                  randomTable.RECOMPENSA[
                    Math.floor(Math.random() * randomTable.OBJETIVO.length)
                  ]
                )
              }
            />
          </View>

          <View style={styles.generatorContainer}>
            <TextRandom
              title="Possível Local de Interesse"
              text={local}
              onPress={() =>
                setLocal(
                  randomTable.LOCAL[
                    Math.floor(Math.random() * randomTable.LOCAL.length)
                  ]
                )
              }
            />
          </View>
        </ScrollView>

        <Input
          value={descricao}
          placeholder="Digite a descrição da aventura...."
          onChangeText={(text) => setDescricao(text)}
          numberOfLines={6}
          textAlignVertical="top"
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.LIGHT,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnsHeader: {
    flexDirection: "row",
    gap: 24,
  },
  generatorContainer: {
    marginTop: 8,
    marginBottom: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: colors.DARK,
    gap: 4,
  },
});

/*
          


*/
