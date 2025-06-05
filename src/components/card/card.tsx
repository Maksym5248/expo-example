import React from 'react';

import { View } from 'react-native';

import { useStyles } from './card.style';
import { type ICardProps } from './card.type';

export const Card = ({ children, ...props }: ICardProps) => {
    const s = useStyles();

    return (
        <View {...props} style={[s.container, props.style]}>
            {children}
        </View>
    );
};
