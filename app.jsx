import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootNavigation } from './src/navigation';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function App() {
	return <View style={styles.container} />;
}

const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
});
