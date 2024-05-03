import { useEffect, useState } from "react";
import { storage } from "@store";
import traslate from '@traslate'

type Language = 'es' | 'en';


function useLang() {
    const [language, setLanguage] = useState<Language>('es');
    const translate = traslate;
    useEffect(()=>{
        const getLanguage = async () => {
            try {
              const savedLanguage = await storage.get('language');
              if (savedLanguage) {
                setLanguage(savedLanguage as Language);
              } else {
                  setLanguage('es' as Language);
              }
            } catch (error) {
              console.error('Failed to load language', error);
            }
          };
          getLanguage();
    },[])

    return {language,setLanguage,translate}
}

export default useLang;