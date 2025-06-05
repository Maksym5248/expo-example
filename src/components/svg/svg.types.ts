import { type ViewStyle } from 'react-native';

import { type svgs } from '../../../assets';

export type ISvgName = keyof typeof svgs;

export interface ISvgProps {
    name: ISvgName;
    size?: number;
    color?: string;
    secondColor?: string;
    style?: ViewStyle;
    svgStyle?: ViewStyle;
    onPress?: () => void;
    disabled?: boolean;
}
