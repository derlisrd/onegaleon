import { create } from 'zustand'

type langType = {
    lang: string
    setLang: (newstate: string) => void
  }
  
  export const useThemeStore = create<langType>()((set) => ({
    lang: 'es',
    setLang: (nuevo) => set(
          (state) => ({ lang : nuevo })
      ),
  }))