import { type ColorValue } from 'react-native';

import { type ITextProps } from '~/core';

export interface IGradientTextProps extends ITextProps {
    height: number;
    colors: [ColorValue, ColorValue, ...ColorValue[]];
}
