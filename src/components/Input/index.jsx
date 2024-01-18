import { StyleSheet, TextInput, View } from "react-native";
import colors from "../../misc/colors";

export default function Input({
  placeholder,
  onChangeText,
  value,
  numberOfLines,
  textAlignVertical,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      multiline
      numberOfLines={numberOfLines}
      onChangeText={onChangeText}
      textAlignVertical={textAlignVertical}
      maxFontSizeMultiplier={8}
      placeholderTextColor={colors.PRIMARY}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    borderWidth: 1,
    minHeight: 40,
    maxHeight: 200,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.LIGHT,
    borderColor: colors.PRIMARY,
    color: colors.PRIMARY,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
