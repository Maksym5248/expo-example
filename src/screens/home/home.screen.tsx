import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { useStyles } from './home.style';

export function HomeScreen() {
    const s = useStyles();

    return (
        <View style={s.container}>
            <StatusBar style="auto" />
            <Text style={s.text}> =Open up App.tsx to start working on your app! =</Text>
        </View>
    );
}
