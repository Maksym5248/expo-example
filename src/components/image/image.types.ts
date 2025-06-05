import { type ImageProps } from 'expo-image';

import { type IViewStyle, type IImageStyle } from '~/types';

export interface IImageProps extends Omit<ImageProps, 'style'> {
    uri?: string | null;
    style?: IViewStyle;
    imageStyle?: IImageStyle;
    contentFit?: 'cover' | 'contain';
}
