import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeAreaStyle : {
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
    }
})