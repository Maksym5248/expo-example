import { type ReactNode } from 'react';

import { type IViewStyle } from '~/types';

import { type ITouchable } from '../touchable';

export interface ICardProps extends Omit<ITouchable, 'children' | 'type'> {
    style?: IViewStyle;
    children?: ReactNode;
}
