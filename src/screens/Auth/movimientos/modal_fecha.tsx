
import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { ButtonPrimary, Title } from "../../../components";
import { StackMovimientos } from ".";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<StackMovimientos,'modalfecha'>

function ModalFecha({navigation}:Props) {
    const [date, setDate] = useState('');

    return ( <View style={styles.container}>
        <View>
            <Title>Selecciona fecha</Title>
        </View>
        <DatePicker
      mode="monthYear"
      selectorStartingYear={2020}
      onMonthYearChange={selectedDate => setDate(selectedDate)}
    />
    <ButtonPrimary onPress={() => navigation.goBack()}>Cerrar</ButtonPrimary>
    </View> );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default ModalFecha;