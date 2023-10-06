import { View, StyleSheet, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'


type dataType = {key:string, value:string, disabled?:boolean}

interface Props{
    data:dataType[],
    label?:string
    setSelected:(text:string)=>void
}


function Select({data,setSelected,label}:Props) {
    return ( <View style={style.container}>
        <Text style={style.label}>{label}</Text>
        <SelectList 
        setSelected={setSelected} 
        data={data}
        fontFamily='Montserrat_400Regular' 
        save="value"
    />
    </View> );
}

const style = StyleSheet.create({
    label:{
        marginLeft:8,
        marginBottom:2,
        fontFamily: "Montserrat_400Regular",
    },
    container:{
        marginVertical:16,
        flexDirection:'column'
    }
})
export default Select;