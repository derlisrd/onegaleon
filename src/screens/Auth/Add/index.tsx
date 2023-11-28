import {  StyleSheet, SafeAreaView, Alert, View} from 'react-native'
import { ButtonBack, ButtonPrimary, ButtonSecondary, Input, InputMaskLg, RadioGroup, Title2, Loading } from '../../../components';
import { CONSTANTES } from '../../../utils/constantes';
import { colors } from '../../../utils/colors';
import { widthScreen } from '../../../utils/dimensions';
import { useState } from 'react';
import { APICALLER } from '../../../services/api';
import { postresponse } from '../../../models/post';
import { useAuthProvider } from '../../../providers/authprovider';
import moment from 'moment';

function AddScreen() {
    const {userData,setearMovimientoStore} = useAuthProvider()
    const initialForm = {
      tipo:'1',
      detalles:'',
      modo:'0',
      valor:'',
      created_at:'',
      synch:false
  }
    const [loading,setLoading] = useState(false)
    const [form,setForm] = useState(initialForm)
    const handleChange = (val: string,name: string)=>{
      setForm({ ...form, [name]: (val) });
    }
    const agregar = async ()=>{
      setLoading(true)
      let f = {...form}
      const ahora = moment()
      f.created_at = ahora.format('YYYY-MM-DD HH:mm:ss');
      
      setearMovimientoStore(f)

      
      /* const res : postresponse = await APICALLER.post({url:'/movimientos',token:userData.token,data: form})
      if(res.success){
         //const respuestaModelada : objetosMovimientos = movimientosModelInsertResponse(res.results)
         Alert.alert('Ok','Movimiento agregado')
        setForm(initialForm)
      }else{
        Alert.alert("Error","Ha ocurrido un error de conexión.")
      } */
      setLoading(false)
      
    }
    const cancelar = ()=>{
      setForm(initialForm)
    }
    return (<SafeAreaView style={loading ? styles.center : styles.container }>
        {
          loading ? <Loading /> : 
          <View style={styles.container2}>
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
          label='Modo de movimiento:'
          radioButtons={CONSTANTES.modos}
          onPress={(val) => {
            handleChange(val,'modo')
          }}
          selectedId={(form.modo)}
          />
        <Input
          placeholder="Detalla los datos de tu movimiento"
          label="Detalles de movimiento" value={(form.detalles)} onChangeText={(val)=>{handleChange(val,'detalles')}}
          />
        <ButtonPrimary onPress={agregar}>Agregar</ButtonPrimary>
        <ButtonSecondary onPress={cancelar}>Cancelar</ButtonSecondary>
          </View>
        }
      </SafeAreaView>);
}


const styles = StyleSheet.create({
    center:{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      backgroundColor:colors.bgcolor
    },
    container2:{
      flexDirection:'column',
    },
    container:{
        flex:1,
        paddingTop:32,
        backgroundColor:colors.bgcolor,
        justifyContent:'flex-start',
        paddingHorizontal:16,
        alignItems:'center',
        flexDirection:'column',
        width:widthScreen
    }
})

export default AddScreen;