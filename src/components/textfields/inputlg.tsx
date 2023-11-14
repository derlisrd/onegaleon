import {
    InputModeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { widthScreen } from "../../utils/dimensions";
import { colors } from "../../utils/colors";

interface Props extends TextInputProps {
  error?: boolean
  label?: string,
  inputMode?: InputModeOptions,
}

function InputLg({
  onChangeText,
  placeholder,
  value,
  inputMode,
  secureTextEntry,
  error, label
}: Props) {
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={[
            style.font,
            style.input,
            error ? style.novalid : style.normal,
          ]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          inputMode={inputMode}
          secureTextEntry={secureTextEntry}
        />
        <Text style={[style.font]}>$</Text>
      </View>
      <View>
        <Text>{label}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  currency: {},
  container: {
    flexDirection: "column",
    width: widthScreen * 0.9,
    paddingHorizontal: 2,
  },
  inputContainer: {
    flexDirection: "row"
  },
  input: {
    width: widthScreen * 0.8,
  },
  font: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 48,
    fontWeight: "bold",
  },
  novalid: {
    borderColor: colors.error,
  },
  normal: {
    borderColor: colors.bgcolor,
  },
  error: {
    color: colors.error,
    fontSize: 12,
  },
});

export default InputLg;
