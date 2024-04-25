import { Pressable, Text, View } from "react-native";
import { buttonsTypes } from "./types";
import { styles } from "./styles";
import { colors } from "config/colors";

interface PrimaryButtonProps extends buttonsTypes {
  center?: boolean;
  variant?: 'contained' | 'outlined'
}

function PrimaryButton({ children, center, variant = 'contained' }: PrimaryButtonProps) {
  return (
    <View
      style={[
        center
          ? {
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }
          : {},

      ]}
    >
      <Pressable style={[variant == 'contained' ? styles.containerPrimaryButtonContained : styles.containerPrimaryButtonOutlined]}>
        <Text style={[styles.textPrimaryButton, {color: variant == 'contained' ? colors.white : colors.primary}]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
