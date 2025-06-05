import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RootNavigation } from './navigation';

export function App() {
    return (
        <View style={styles.container}>
            <GestureHandlerRootView style={styles.container}>
                <StatusBar style="auto" />
                <RootNavigation />
            </GestureHandlerRootView>
        </View>
    );
}

const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
