import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

import { LocalizationProvider } from './localization';
import { RootNavigation } from './navigation';
import { ThemeProvider } from './styles';

enableScreens();

export function App() {
    return (
        <GestureHandlerRootView>
            <LocalizationProvider>
                <ThemeProvider>
                    <RootNavigation />
                </ThemeProvider>
            </LocalizationProvider>
        </GestureHandlerRootView>
    );
}
