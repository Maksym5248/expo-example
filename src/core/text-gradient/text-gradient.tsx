import React, { useEffect } from 'react';

import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { type ColorValue, View } from 'react-native';
import Animated, {
    cancelAnimation,
    useSharedValue,
    useAnimatedProps,
    withRepeat,
    withTiming,
    withDelay,
    withSequence,
} from 'react-native-reanimated';

import { useDevice, useTheme } from '~/styles';

import { useStyles } from './text-gradient.style';
import { type IGradientTextProps } from './text-gradient.type';
import { Text } from '../text';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export function TextGradient({ style, colors, locations, loading = false, duration = 700, delay = 500, ...props }: IGradientTextProps) {
    const s = useStyles();
    const theme = useTheme();
    const device = useDevice();
    const progress = useSharedValue(0.1);

    useEffect(() => {
        if (loading) {
            progress.value = withRepeat(
                withDelay(
                    delay,
                    withSequence(withTiming(0.9, { duration }), withTiming(0.1, { duration: 0 }), withTiming(0.9, { duration })),
                ),
                -1,
                false,
            );
        } else {
            cancelAnimation(progress);
        }

        return () => {
            cancelAnimation(progress);
        };
    }, [loading, delay, duration]);

    const animatedProps = useAnimatedProps(() => {
        if (!loading) {
            return { locations, colors };
        }

        return {
            locations: [0, progress.value - 0.1, progress.value, progress.value + 0.1, 1] as [number, number, ...number[]],
            colors: [
                theme.palette.whiteFA60,
                theme.palette.whiteFA60,
                theme.palette.whiteFA,
                theme.palette.whiteFA60,
                theme.palette.whiteFA60,
            ] as [ColorValue, ColorValue, ...ColorValue[]],
        };
    });

    const height = theme.text[props.type || 'body'].lineHeight;

    const styleLoading = loading
        ? {
              marginLeft: -device.window.width * 0.3,
              width: device.window.width * 0.9,
          }
        : undefined;

    return (
        <View style={style}>
            <MaskedView maskElement={<Text {...props} />}>
                <AnimatedLinearGradient
                    colors={colors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[{ height }, styleLoading]}
                    animatedProps={animatedProps}>
                    <Text style={s.hidden} {...props} />
                </AnimatedLinearGradient>
            </MaskedView>
        </View>
    );
}
