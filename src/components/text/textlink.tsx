import { ReactNode } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
  onPress: () => void | undefined;
};

function TextLink({ children, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={style.container}>
      <Text style={style.text}>{children}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    padding:8,
    marginVertical:12,
  },
  text: {
    color: '#000',
    fontFamily:'Montserrat_400Regular',
    fontSize:18
  },
});

export default TextLink;
