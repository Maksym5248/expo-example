import { type ITextStyle, type IBaseThemeSchema } from './types';

export const createTextStyles = ({ theme }: { theme: IBaseThemeSchema }): ITextStyle => ({
    h1: {
        color: theme.colors.text,
        fontFamily: theme.fonts.mono,
        fontSize: theme.fontSize.XXL,
        lineHeight: theme.lineHeight.XXXL,
    },
    h2: {
        color: theme.colors.text,
        fontFamily: theme.fonts.heading,
        fontSize: theme.fontSize.XL,
        lineHeight: theme.lineHeight.XXL,
    },
    body: {
        color: theme.colors.text,
        fontFamily: theme.fonts.regular,
        fontSize: theme.fontSize.M,
        lineHeight: theme.lineHeight.XL,
    },
    bodyXS: {
        color: theme.colors.text,
        fontFamily: theme.fonts.regular,
        fontSize: theme.fontSize.XS,
        lineHeight: theme.lineHeight.L,
    },
    bodyS: {
        color: theme.colors.text,
        fontFamily: theme.fonts.regular,
        fontSize: theme.fontSize.S,
        lineHeight: theme.lineHeight.L,
    },
    labelL: {
        color: theme.colors.text,
        fontFamily: theme.fonts.regular,
        fontSize: theme.fontSize.L,
        lineHeight: theme.lineHeight.L,
    },
    labelM: {
        color: theme.colors.text,
        fontFamily: theme.fonts.regular,
        fontSize: theme.fontSize.M,
        lineHeight: theme.lineHeight.L,
    },
    monoS: {
        color: theme.colors.text,
        fontFamily: theme.fonts.mono,
        fontSize: theme.fontSize.S,
        lineHeight: theme.lineHeight.L,
    },
    monoXS: {
        color: theme.colors.text,
        fontFamily: theme.fonts.mono,
        fontSize: theme.fontSize.XS,
        lineHeight: theme.lineHeight.M,
    },
});
