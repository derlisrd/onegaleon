import { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./styles";

interface SafeAreaProps {
  children: ReactNode;
  bgColor?: string;
}

function SafeArea({ children }: SafeAreaProps) {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={[{ minHeight: "100%" }]}>{children}</View>
    </SafeAreaView>
  );
}

export default SafeArea;
