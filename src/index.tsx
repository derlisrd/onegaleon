import { NavigationContainer } from '@react-navigation/native';
import { ReactNode } from 'react';

function ScreensContainerProvider({children} : {children: ReactNode}) {
    return ( <NavigationContainer>
        {children}
    </NavigationContainer> );
}

export default ScreensContainerProvider;