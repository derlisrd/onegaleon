import { Pressable, StyleSheet, Text, View } from "react-native";

const meses = [
    {
        label: 'Enero',
        number: '01',
        short: 'Ene'
    },
    {
        label: 'Febrero',
        number: '02',
        short: 'Feb'
    },
    {
        label: 'Marzo',
        number: '03',
        short: 'Mar'
    },
    {
        label: 'Abril',
        number: '04',
        short: 'Abr'
    },
    {
        label: 'Mayo',
        number: '05',
        short: 'May'
    },
    {
        label: 'Junio',
        number: '06',
        short: 'Jun'
    },
    {
        label: 'Julio',
        number: '07',
        short: 'Jul'
    },
    {
        label: 'Agosto',
        number: '08',
        short: 'Ago'
    },
    {
        label: 'Septiembre',
        number: '09',
        short: 'Sep'
    },
    {
        label: 'Octubre',
        number: '10',
        short: 'Oct'
    },
    {
        label: 'Noviembre',
        number: '11',
        short: 'Nov'
    },
    {
        label: 'Diciembre',
        number: '12',
        short: 'Dic'
    }
];



function DatePicker() {
    
    const onPressSelect = (number : string)=>{
        console.log(number);
        
    }


    return ( <View style={s.container}>
        <View style={s.mesesContainer}>
            {
                meses.map(e=>(
                    <Pressable style={s.itemMes} onPress={()=>{onPressSelect(e.number)}} key={e.short} >
                        <Text style={[s.textMes]}>{e.short}</Text>
                    </Pressable>
                ))
            }
        </View>
    </View> );
}


const s = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    mesesContainer:{
        width:'90%',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center'
    },
    itemMes:{
        backgroundColor:'silver',
        padding:12,
        alignItems:'center',
        width:'33%'
    },
    textMes:{
        fontSize:16
    }
})

export default DatePicker;