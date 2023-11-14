import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
import { colors } from "../../utils/colors";


function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/iconsplash.png')} style={{width:200,height:200}} />
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
