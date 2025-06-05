import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme }) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    backgroundImag: {
        flex: 1,
    },
    text: {
        color: 'red',
    },
}));
