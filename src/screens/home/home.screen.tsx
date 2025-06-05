import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Image } from '~/components';

import { useStyles } from './home.style';

/* eslint-disable-next-line @typescript-eslint/no-require-imports */
const backgroundImage = require('../../../assets/image/main-background.png');

export function HomeScreen() {
    const s = useStyles();

    return (
        <View style={s.container}>
            <StatusBar style="light" translucent={false} />
            <Image source={backgroundImage} style={s.backgroundImag} />
        </View>
    );
}
