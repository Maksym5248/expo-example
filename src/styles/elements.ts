import { type IBaseThemeSchema, type IElementStyle } from './types';

export const createElementsStyles = ({ theme }: { theme: IBaseThemeSchema }): IElementStyle => ({
    header: {
        height: 52,
    },
    input: {
        height: 40,
        borderRadius: theme.radius.M,
    },
    button: {
        height: 48,
        borderRadius: theme.radius.M,
    },
});
