
import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { Title } from "../../../components";


function ModalFecha() {
    const [date, setDate] = useState('');

    return ( <View style={styles.container}>
        <View>
            <Title>Movimientos</Title>
        </View>
        <DatePicker
      mode="monthYear"
      selectorStartingYear={2020}
      onMonthYearChange={selectedDate => setDate(selectedDate)}
    />
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