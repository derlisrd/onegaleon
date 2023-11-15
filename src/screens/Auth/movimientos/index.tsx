import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';


function Movimientos() {
    const [value, setValue] = useState(dayjs());

    return ( <View style={styles.container}>
        <DateTimePicker
        value={value}
        onValueChange={(date) => setValue(date)}
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


export default Movimientos;