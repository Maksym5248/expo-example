import React, { memo, useEffect, useState } from 'react';

import { View } from 'react-native';

import { Text } from '~/core';
import { useTheme } from '~/styles';

import { useStyles } from './timer.style';
import { type ITimerProps } from './timer.type';

export const Timer = memo(({ item }: ITimerProps) => {
    const theme = useTheme();
    const s = useStyles();
    const [timeLeft, setTimeLeft] = useState(item.time);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1000) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 100;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [item.time]);

    const percentage = Math.max(0, 100 - (timeLeft / item.time) * 100);
    const secondsLeft = Math.max(0, Math.floor(timeLeft / 1000));

    return (
        <View style={s.container}>
            <Text type="monoXS" color={theme.colors.textSecondary}>
                {percentage.toFixed(0)}%
            </Text>
            <View style={s.dot} />
            <Text type="monoXS" color={theme.colors.textSecondary}>
                {secondsLeft}s left
            </Text>
        </View>
    );
});

Timer.displayName = 'Timer';
