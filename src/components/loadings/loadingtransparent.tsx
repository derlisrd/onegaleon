import { semiTransparent } from "../../utils/colors";
import { StyleSheet, Text, View,ActivityIndicator } from "react-native";

interface Props {
    message?: string
}

function LoadingTransparent({ message }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.texto}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: semiTransparent,
    zIndex: 2,
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  texto: {
    color: "#fff",
    marginTop:8
  },
});

export default LoadingTransparent;