import { ThemeManager as ThemeManagerCreator } from 'react-native-theme-mk';

import { themePrimary } from './primary-theme';
import { type IThemeSchema } from './types';

export type * from './types';
const theme: Record<string, IThemeSchema> = {
    primary: themePrimary,
};

export const ThemeManager = new ThemeManagerCreator('primary', theme);

export const { ThemeProvider, useTheme, useDevice, useScale } = ThemeManager;
