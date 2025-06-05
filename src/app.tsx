import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

import { RootNavigation } from './navigation';
import { ThemeProvider } from './styles';

enableScreens();

export function App() {
    return (
        <GestureHandlerRootView>
            <ThemeProvider>
                <RootNavigation />
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}
