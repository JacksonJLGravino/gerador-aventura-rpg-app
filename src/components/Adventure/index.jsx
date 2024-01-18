import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import colors from "../../misc/colors";
import { Entypo } from "@expo/vector-icons";

export default function Adventure({ onPress, item }) {
  const { nomeAventura, descricao } = item;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{nomeAventura}</Text>
      <ScrollView>
        <Text style={styles.desc}>{descricao}</Text>
      </ScrollView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 180,
    padding: 8,
    backgroundColor: colors.DARK,
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    gap: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.SECONDARY,
  },
  desc: {
    color: colors.LIGHT,
    fontFamily: "serif",
    paddingVertical: 8,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
});

// <Entypo name="edit" size={24} color="black" />
