import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RootNavigation } from './navigation';

export function App() {
	return (
        <GestureHandlerRootView>
            <RootNavigation />
        </GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
