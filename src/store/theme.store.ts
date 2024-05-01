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
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
}
const darkTheme = {
    dark: true,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(28, 28, 30)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(242, 242, 242)' ,
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
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