import { type IViewStyle } from '~/types';

export interface ISquare {
    index: number;
    squareSize: number;
    gridGap: number;
    color: string;
    maxOpacity: number;
    flickerChance: number;
    duration?: number;
}

export interface IFlickingGridProps {
    squareSize?: number;
    gridGap?: number;
    color?: string;
    maxOpacity?: number;
    flickerChance?: number;
    style?: IViewStyle;
    duration?: number;
}
