import { type ColorValue } from 'react-native';

import { type ITextProps } from '~/core';

export interface IGradientTextProps extends ITextProps {
    colors: [ColorValue, ColorValue, ...ColorValue[]];
    locations?: [number, number, ...number[]];
    loading?: boolean;
    duration?: number;
    delay?: number;
}
