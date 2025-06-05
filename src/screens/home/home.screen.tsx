import { ImageBackground } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { useStyles } from './home.style';

export function HomeScreen() {
    const s = useStyles();

    return (
        <View style={s.container}>
            <StatusBar style="auto" />
            {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
            <ImageBackground source={require('../../../assets/image/main-background.png')} style={s.backgroundImag} />
        </View>
    );
}
