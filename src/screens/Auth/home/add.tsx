import {  StyleSheet, SafeAreaView, View} from 'react-native'
import { ButtonPrimary, Input, InputMaskLg, RadioGroup, Title2 } from '../../../components';
import { CONSTANTES } from '../../../utils/constantes';
import { useState } from 'react';


function Add() {
    const [form,setForm] = useState({
        tipo:"0",
        detalles:'',
        modo:''
    })

    return (
      <SafeAreaView style={styles.container}>
        <Title2>Agregar un movimiento</Title2>
        <InputMaskLg
          onChangeText={(text, rawText) => {
            console.log(text, rawText);
          }}
          inputMode="numeric"
          label="Valor"
        />
        <RadioGroup
          layout="row"
          label='Tipo de movimiento:'
          radioButtons={CONSTANTES.tipos}
          onPress={(val) => {
            setForm({ ...form, tipo: val });
          }}
          selectedId={form.tipo}
        />
        <Input
          placeholder="Detalla los datos de tu movimiento"
          label="Detalles de movimiento"
        />
        <ButtonPrimary onPress={() => {}}>Agregar</ButtonPrimary>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:32,
        justifyContent:'center',
        paddingHorizontal:16,
        flexDirection:'column'
    }
})


export default Add;