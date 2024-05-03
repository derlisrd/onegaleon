import { Input, PrimaryButton, SafeArea, Title } from "@components";
import useLang from "hooks/useLang";
import { useAuth } from "providers/auth.provider";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PublicScreenList } from "screens/list/public.list";

type Props = NativeStackScreenProps<PublicScreenList,'login'>

function LoginScreen({navigation}:Props) {
    const {language,translate} = useLang()
    const {tryLogin} = useAuth()
    
    return <SafeArea>
        <Title align="center" uppercase >{translate[language].login}</Title>
        <Input 
            placeholder="Email"
        />
        <Input 
            placeholder="Contraseña"
        />
        <PrimaryButton onPress={tryLogin} mt={24} center>{translate[language].login}</PrimaryButton>
        <PrimaryButton onPress={()=>{ navigation.navigate('register')}}  variant='outlined' mt={24} center>{translate[language].register}</PrimaryButton>
    </SafeArea>
}

export default LoginScreen;