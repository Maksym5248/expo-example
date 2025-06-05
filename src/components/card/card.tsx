import React from 'react';

import { useStyles } from './card.style';
import { type ICardProps } from './card.type';
import { Touchable } from '../touchable';

export const Card = ({ children, ...props }: ICardProps) => {
    const s = useStyles();

    return (
        <Touchable {...props} type="rect" style={[s.container, props.style]}>
            {children}
        </Touchable>
    );
};
