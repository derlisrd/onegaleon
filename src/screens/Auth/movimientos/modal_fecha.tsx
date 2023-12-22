
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { ButtonPrimary, Title } from "../../../components";
import { StackMovimientos } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import moment from "moment";
import { useMovimientos } from "./provider";
import { colors } from "../../../utils/colors";

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
                backgroundColor: colors.bgcolor,
                textHeaderColor: colors.primary,
                textDefaultColor: colors.black72,
                selectedTextColor: '#fff',
                mainColor: colors.yellow,
                textSecondaryColor: colors.error,
                borderColor: colors.greenPastel,
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