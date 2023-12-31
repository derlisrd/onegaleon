import {
    InputModeOptions,
  StyleSheet,
  Text,
/*   TextInputProps, */
  View,
} from "react-native";
import { widthScreen } from "../../utils/dimensions";
import { MaskedTextInput, MaskedTextInputProps } from "react-native-mask-text";
import { colors } from "../../utils/colors";

interface Props extends MaskedTextInputProps {
  error?: boolean
  label?: string,
  inputMode?: InputModeOptions,
  onChangeText:(text: string,rawText:string)=>void
}

function InputMaskLg({
  onChangeText,
  value,
  inputMode,
  secureTextEntry,
  error, label
}: Props) {
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <MaskedTextInput
          type="currency"
          placeholder=""
          mask="999.999.999"
          options={{
              decimalSeparator: ',',
              groupSeparator: '.'
            }}
          style={[
            style.font,
            style.input,
            error ? style.novalid : style.normal,
          ]}
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
  container: {
    flexDirection: "column",
    width: widthScreen * 0.9,
    paddingHorizontal: 2,
    marginVertical:12
  },
  inputContainer: {
    flexDirection: "row",
    borderColor:colors.black72,
    borderBottomWidth:1,
  },
  input: {
    width: widthScreen * 0.8,
  },
  font: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 32,
    fontWeight: "bold",
  },
  novalid: {
    borderColor: colors.error ,
  },
  normal: {
    borderColor:  colors.black72 ,
  },
  error: {
    color: colors.error,
    fontSize: 12,
  },
});

export default InputMaskLg;
