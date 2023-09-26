import AsyncStorage from '@react-native-async-storage/async-storage';

type storageType = {
    key: string
    value?: {}
}


export const Storage = {

    set: async ({key, value} : storageType) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
            
        } catch (error) {
            console.log("Storage.set", error)
        }
    },
  
  
    get: async ({key} : storageType) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value && JSON.parse(value);
        } catch (error) {
            console.log("Storage.get", error)
            return null
        }
    },
  
    remove: async({key}: storageType) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch(error) {
            return false;
        }
    },

}