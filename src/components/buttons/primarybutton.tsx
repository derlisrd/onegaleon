import { Pressable, Text, View } from "react-native";
import { buttonsTypes } from "./types";
import { styles } from "./styles";

interface PrimaryButtonProps extends buttonsTypes {
  center?: boolean;
}

function PrimaryButton({ children, center }: PrimaryButtonProps) {
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
      <Pressable style={styles.containerPrimaryButton}>
        <Text style={styles.textPrimaryButton}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
