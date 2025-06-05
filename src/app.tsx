import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

import { ModalProvider } from './containers';
import { LocalizationProvider } from './localization';
import { modals, RootNavigation } from './navigation';
import { ThemeProvider } from './styles';

enableScreens();

export function App() {
    const [fontsLoaded] = useFonts({
        'Tactic Sans Medium': require('../assets/fonts/tactic-sans-medium.ttf'),
        'volksans Test Regular': require('../assets/fonts/volksansTest-Bold.otf'),
        'volksans Test Bold': require('../assets/fonts/volksansTest-Regular.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <GestureHandlerRootView>
            <LocalizationProvider>
                <ThemeProvider>
                    <RootNavigation />
                    <ModalProvider modals={modals} />
                </ThemeProvider>
            </LocalizationProvider>
        </GestureHandlerRootView>
    );
}
