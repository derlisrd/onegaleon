import AsyncStorage from '@react-native-async-storage/async-storage';


export const storage = {



    store : async({key,value} : {key:string, value : string | object}) : Promise<boolean> =>{
        try {
            const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
            await AsyncStorage.setItem(key, serializedValue); 
            return true
        } catch (error) {
            return false
        }
    },

    get: async(key:string) : Promise<string | null> =>  {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value
            }
            return null
        } catch (error) {
            return null
        }
    },

}