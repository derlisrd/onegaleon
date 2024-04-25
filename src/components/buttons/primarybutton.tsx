import { Pressable, Text, View } from "react-native";
import { buttonsTypes } from "./types";
import { styles } from "./styles";
import { colors } from "config/colors";

interface PrimaryButtonProps extends buttonsTypes {
  center?: boolean;
  disabled?: boolean;
  variant?: "contained" | "outlined";
  onPress?: () => void;
}

function PrimaryButton({
  disabled = false,
  children,
  onPress,
  center,
  variant = "contained",
}: PrimaryButtonProps) {
  return (
    <View
      style={[center ? styles.center: {},]}
    >
      <Pressable
        onPress={disabled ? ()=>{} : onPress}
        style={[
          variant == "outlined"
            ? styles.containerPrimaryButtonOutlined: styles.containerPrimaryButtonContained,
            disabled && { opacity: 0.3 },
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
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
