import React, { useEffect } from 'react';

import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import Animated, { cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

import { useTheme } from '~/styles';

import { useStyles } from './text-gradient.style';
import { type IGradientTextProps } from './text-gradient.type';
import { Text } from '../text';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export function TextGradient({ style, colors, locations, loading = false, duration = 3000, ...props }: IGradientTextProps) {
    const s = useStyles();
    const theme = useTheme();
    const progress = useSharedValue(0);

    useEffect(() => {
        if (loading) {
            progress.value = withRepeat(withTiming(1, { duration }), -1, true);
        } else {
            cancelAnimation(progress);
        }

        return () => {
            cancelAnimation(progress);
        };
    }, [loading]);

    const animatedStyle = useAnimatedStyle(() => {
        const translateX = progress.value * 100;

        return {
            transform: [{ translateX }],
        };
    });

    const height = theme.text[props.type || 'body'].lineHeight;

    return (
        <View style={style}>
            <MaskedView maskElement={<Text {...props} />}>
                <AnimatedLinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    locations={locations}
                    colors={colors}
                    style={[{ height }, animatedStyle]}>
                    <Text style={s.hidden} {...props} />
                </AnimatedLinearGradient>
            </MaskedView>
        </View>
    );
}
