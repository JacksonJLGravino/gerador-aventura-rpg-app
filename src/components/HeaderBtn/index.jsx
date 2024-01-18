import { View, TouchableOpacity } from "react-native";
import colors from "../../misc/colors";
import { Entypo } from "@expo/vector-icons";

export default function HeaderBtn({ onPress }) {
  return (
    <View>
      <TouchableOpacity>
        <Entypo
          name="squared-plus"
          size={32}
          color={colors.PRIMARY}
          onPress={onPress}
        />
      </TouchableOpacity>
    </View>
  );
}
