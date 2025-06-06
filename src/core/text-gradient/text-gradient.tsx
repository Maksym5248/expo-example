import React from 'react';

import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

import { useTheme } from '~/styles';

import { useStyles } from './text-gradient.style';
import { type IGradientTextProps } from './text-gradient.type';
import { Text } from '../text';

export function TextGradient({ style, colors, locations, ...props }: IGradientTextProps) {
    const s = useStyles();
    const theme = useTheme();

    const height = theme.text[props.type || 'body'].lineHeight;

    return (
        <View style={style}>
            <MaskedView maskElement={<Text {...props} />}>
                <LinearGradient colors={colors} locations={locations} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ height }}>
                    <Text style={s.hidden} {...props} />
                </LinearGradient>
            </MaskedView>
        </View>
    );
}
