import {  StyleSheet, Text, View} from 'react-native'
import RadioButtonsGroup, {RadioGroupProps} from "react-native-radio-buttons-group";

interface Props extends RadioGroupProps{
    label?:string
}

function RadioGroup(props: Props) {
    const { layout, onPress, radioButtons, selectedId, label } = props
    return (
    <View style={styles.radioContainer}>
        <Text style={styles.label}>{label}</Text>
        <RadioButtonsGroup
            containerStyle={{}}
            layout={layout}
            radioButtons={radioButtons}
            onPress={onPress}
            selectedId={selectedId}
            
        />
    </View>);
}

const styles = StyleSheet.create({
    label:{
        fontFamily:'Montserrat_400Regular',
        marginBottom:4
    },
    radioContainer:{
        marginVertical:8
    }
})


export default RadioGroup;