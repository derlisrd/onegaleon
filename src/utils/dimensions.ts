import { Dimensions } from "react-native";
import { StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;
const screen = Dimensions.get('screen');

const widthScreen = screen.width
const heightScreen = screen.height 

export { widthScreen, heightScreen, statusBarHeight }