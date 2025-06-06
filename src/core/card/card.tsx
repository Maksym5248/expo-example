import React from 'react';

import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { useStyles } from './card.style';
import { type ICardProps } from './card.type';

export const Card = ({ children, ...props }: ICardProps) => {
    const s = useStyles();

    return (
        <Animated.View entering={FadeIn} exiting={FadeOut} {...props} style={[s.container, props.style]}>
            {children}
        </Animated.View>
    );
};
