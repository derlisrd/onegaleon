
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { ButtonPrimary, Title } from "../../../components";
import { StackMovimientos } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import moment from "moment";
import { useMovimientos } from "./provider";

type Props = StackScreenProps<StackMovimientos,'modalfecha'>

function ModalFecha({navigation}:Props) {

    const {getMovimientos,setFecha} = useMovimientos()
    const seleccionarFecha = (selectedData : string)=>{
        const fechaFormateada = selectedData.split(" ").join("-");
        const inicio = moment(fechaFormateada).startOf("month").format("YYYY-MM-DD");
        const fin = moment(fechaFormateada).endOf("month").format("YYYY-MM-DD");
        setFecha({inicio,fin})
        getMovimientos(inicio,fin)
        navigation.goBack()
    }
    return ( <View style={styles.container}>
        <View>
            <Title>Selecciona fecha</Title>
        </View>
        <DatePicker
            mode="monthYear"
            selectorStartingYear={2020}
            onMonthYearChange={seleccionarFecha}
            options={{
                backgroundColor: '#090C08',
                textHeaderColor: '#FFA25B',
                textDefaultColor: '#F6E7C1',
                selectedTextColor: '#fff',
                mainColor: '#F4722B',
                textSecondaryColor: '#D6C7A1',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              style={styles.calendario}
        />
    <ButtonPrimary onPress={() => navigation.goBack()}>Cerrar</ButtonPrimary>
    </View> );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    calendario:{ borderRadius: 10 }
})


export default ModalFecha;