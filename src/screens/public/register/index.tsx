import { HeaderBack, SafeArea, Title } from "@components";
import useLang from "hooks/useLang";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PublicScreenList } from "screens/list/public.list";

type Props = NativeStackScreenProps<PublicScreenList,'register'>

function Register({navigation}:Props) {
    const {translate,language} = useLang()
    return <SafeArea>
        <HeaderBack onPress={()=>navigation.goBack()} />
        <Title>{translate[language].register}</Title>
    </SafeArea>
}

export default Register;