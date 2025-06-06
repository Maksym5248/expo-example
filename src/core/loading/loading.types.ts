import { type IViewStyle } from '~/types';

export type ILoadingProps = {
    style?: IViewStyle;
    color?: string;
    size?: number | 'small' | 'large' | undefined;
};
