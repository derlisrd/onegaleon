import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
    set: async (key:string, value : string) => {
        try {
            await AsyncStorage.setItem(key, (value));
            
        } catch (error) {
            console.log("Storage.set", error)
        }
    },
  
  
    get: async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return (value);
        } catch (error) {
            console.log("Storage.get", error)
            return null
        }
    },
  
    remove: async(key: string) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch(error) {
            return false;
        }
    },
}

export default Storage