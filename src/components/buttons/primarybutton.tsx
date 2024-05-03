import { DimensionValue, Pressable, Text, View } from "react-native";
import { buttonsTypes } from "./types";
import { styles } from "./styles";
import { colors } from "config/colors";
import { ReactNode } from "react";

interface PrimaryButtonProps extends buttonsTypes {
  center?: boolean;
  disabled?: boolean;
  variant?: "contained" | "outlined";
  onPress?: () => void;
  icon?: ReactNode
}

function PrimaryButton({
  disabled = false,
  children,
  onPress,
  center,
  mt, mx, my,mb,
  variant = "contained",
  icon : Icon
}: PrimaryButtonProps) {
  return (
    <View
      style={[center ? styles.center: {},]}
    >
      <Pressable
        onPress={disabled ? ()=>{} : onPress}
        style={[
            styles.button,
          variant == "outlined"
            ? styles.containerPrimaryButtonOutlined: styles.containerPrimaryButtonContained,
            disabled && { opacity: 0.3 },
            { marginTop: mt, marginHorizontal: mx, marginVertical: my,marginBottom:mb}
        ]}
        disabled={disabled}
      >
        <Text
          style={[
            styles.font,
            { color: variant == "contained" ? colors.white : colors.primary },
          ]}
        >
          {children}
        </Text>
        {Icon && <View>{Icon}</View>}
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
