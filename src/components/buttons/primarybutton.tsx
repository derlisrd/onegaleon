import { Pressable, Text } from "react-native";
import { buttonsTypes } from "./types";
import { styles } from "./styles";

interface PrimaryButtonProps extends buttonsTypes {

} 

function PrimaryButton({children}:PrimaryButtonProps) {
    return <Pressable style={styles.containerPrimaryButton}>
        <Text>{children}</Text>
    </Pressable>
}

export default PrimaryButton;