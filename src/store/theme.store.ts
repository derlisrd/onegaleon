import { colors } from '@config';
import { create } from 'zustand'


type themeType = {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    };
}

const lightTheme = {
    dark: false,
    colors: {
      primary: colors.primary,
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: colors.gray[5],
      notification: 'rgb(255, 69, 58)'
    },
}
const darkTheme = {
    dark: true,
    colors: {
      primary: colors.primary,
      background: 'rgb(28, 28, 30)',
      card: 'transparent',
      text: 'rgb(242, 242, 242)' ,
      border: colors.gray[2],
      notification: 'rgb(255, 69, 58)'
    },
}


type StoreTheme = {
  theme: themeType
  setTheme: () => void
}

export const useThemeStore = create<StoreTheme>()((set) => ({
  theme: lightTheme,
  setTheme: () => set(
        (state) => ({ theme : state.theme.dark ? lightTheme : darkTheme})
    ),
}))