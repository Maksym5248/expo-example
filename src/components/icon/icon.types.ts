import { type svgs } from '~/assets';
import { type IViewStyle } from '~/types';

export type IIconName = keyof typeof svgs;

export interface IIconProps {
    name: IIconName;
    size?: number;
    color?: string;
    secondColor?: string;
    style?: IViewStyle;
    svgStyle?: IViewStyle;
    onPress?: () => void;
    disabled?: boolean;
}
