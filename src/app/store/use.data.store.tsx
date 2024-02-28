import { create } from "zustand";


import env from "../../../env";
import { userDataModel } from "../models/user.data.model";

const initialUser = {
  token: '',
  id: null,
  email: null,
  name: null,
};

type State = {
  isAuth: boolean;
  userData: userDataModel;
};

type Actions = {
  updateIsAuth: (isAuth: State["isAuth"]) => void;
  updateUserData: (isAuth: State["userData"]) => void;
  logOutUserData: (isAuth: State["isAuth"]) => void;
};



const getInitialLoggedIn =  false
const getInitialUserData = JSON.parse( JSON.stringify(initialUser) ) 

export const userDataStore = create<State & Actions>((set) => ({
  isAuth: getInitialLoggedIn,
  userData: getInitialUserData,

  updateIsAuth: (res: boolean) => set(() => {
    if(res){
        //sessionStorage.setItem(env.APP_KEY,'1')
    } else{
        //sessionStorage.removeItem(env.APP_KEY_USER)
    }
    return { isAuth: res, userData: initialUser }
  }
    ),
    
  updateUserData: (res: userDataModel) => set(() => {
    const valor = JSON.stringify(res);
    //sessionStorage.setItem(env.APP_KEY_USER,valor);
    return { userData: res }
  }),
  logOutUserData: (res:boolean = false) => set(() => {
    //sessionStorage.removeItem(env.APP_KEY)
    //sessionStorage.removeItem(env.APP_KEY_USER);
    return { userData: initialUser, isAuth: res }
  }),

}));

function userDataHook() {
  const isAuth = userDataStore((state) => state.isAuth);
  const dataUser = userDataStore((state) => state.userData);

  const setIsAuth = userDataStore((state) => state.updateIsAuth);
  const setDataUser = userDataStore((state) => state.updateUserData);
  const logOutUserData = userDataStore((state) => state.logOutUserData);

  return { isAuth, dataUser, setIsAuth, setDataUser, logOutUserData};
}

export default userDataHook;
