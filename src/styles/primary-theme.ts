import { createElementsStyles } from './elements';
import { fonts } from './font-family';
import { palette } from './palette';
import { createTextStyles } from './text';
import { type IThemeSchema, type IBaseThemeSchema } from './types';

export const themeBase: IBaseThemeSchema = {
    radius: {
        S: 3,
        M: 4,
        L: 6,
    },
    colors: {
        logo: palette.whiteFF,
        primary: palette.green4D,
        text: palette.whiteF6,
        textSecondary: palette.grey95,
        textButton: palette.black03,
        background: palette.black03,
        ripple: palette.black01,
        disabled: palette.grey62,
        error: palette.red,
        transparent: palette.transparent,
        placeholder: palette.grey95,
        input: palette.whiteFA15,
        card: palette.grey14,
        border: palette.green26,
        separator: palette.green40,
    },
    fonts: {
        heading: fonts.TacticSansMed,
        regular: fonts.VolksansTest,
        mono: fonts.VolksansMonoTest,
    },
    lineHeight: {
        M: 18,
        L: 20,
        XL: 24,
        XXL: 32,
        XXXL: 40,
    },
    spacing: {
        XXS: 8,
        XS: 10,
        S: 12,
        M: 16,
        L: 20,
        XL: 24,
        XXL: 26,
    },
    fontSize: {
        XS: 12,
        S: 14,
        M: 16,
        L: 18,
        XL: 30,
        XXL: 40,
    },
};

export const themePrimary: IThemeSchema = {
    ...themeBase,
    palette,
    text: createTextStyles({ theme: themeBase }),
    element: createElementsStyles({ theme: themeBase }),
};
