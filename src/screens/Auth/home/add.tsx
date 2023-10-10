import {  StyleSheet, SafeAreaView, Alert} from 'react-native'
import { ButtonPrimary, ButtonSecondary, Input, InputMaskLg, RadioGroup, Title2 } from '../../../components';
import { CONSTANTES } from '../../../utils/constantes';
import { useState } from 'react';
import { colors } from '../../../utils/colors';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '.';
import { APICALLER } from '../../../services/api';
import { useAuthProvider } from '../../../providers/authprovider';
import {  movimientoType, postresponse } from '../../../models/post';
import { useHome } from './provider';
import { widthScreen } from '../../../utils/dimensions';
import Loading from '../../../components/loadings/loading';

type Props = StackScreenProps<HomeStackParamList,'add'>


function Add({navigation}: Props) {
    
    const {userData} = useAuthProvider()
    const {pushMovimiento} = useHome()
    const initialForm = {
      tipo:'0',
      detalles:'',
      modo:'0',
      valor:''
  }
    const [loading,setLoading] = useState(false)
    const [form,setForm] = useState(initialForm)
    const handleChange = (val: string,name: string)=>{
      setForm({ ...form, [name]: (val) });
    }
    const agregar = async ()=>{
      setLoading(true)
      const res : postresponse = await APICALLER.post({url:'/movimientos',token:userData.token,data: form})
      if(res.success){
        const newmovimiento : movimientoType = res.results
        pushMovimiento(newmovimiento)
        setForm(initialForm)
        navigation.pop()
      }else{
        Alert.alert("Error","Ha ocurrido un error de conexión.")
      }
      setLoading(false)
      
    }
    const cancelar = ()=>{
      navigation.pop()
      setForm(initialForm)
    }

    return (
      <SafeAreaView style={styles.container}>
        {
          loading ? <Loading /> : <>
          <Title2>Agregar un movimiento</Title2>
        <InputMaskLg
          onChangeText={(text, rawText) => {
            handleChange(rawText,'valor')
          }}
          value={form.valor}
          inputMode="numeric"
          label="Valor"
          />
        <RadioGroup
          layout="row"
          label='Tipo de movimiento:'
          radioButtons={CONSTANTES.tipos}
          onPress={(val) => {
            handleChange(val,'tipo')
          }}
          selectedId={(form.tipo)}
          />
        <Input
          placeholder="Detalla los datos de tu movimiento"
          label="Detalles de movimiento" value={(form.detalles)} onChangeText={(val)=>{handleChange(val,'detalles')}}
          />
        <ButtonPrimary onPress={agregar}>Agregar</ButtonPrimary>
        <ButtonSecondary onPress={cancelar}>Cancelar</ButtonSecondary>
          </>
        }
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:32,
        backgroundColor:colors.bgcolor,
        justifyContent:'center',
        paddingHorizontal:16,
        flexDirection:'column',
        width:widthScreen
    }
})


export default Add;