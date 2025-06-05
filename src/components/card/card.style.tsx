import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme }) => ({
    container: {
        position: 'relative',
        borderRadius: theme.radius.L,
        backgroundColor: theme.colors.card,
        padding: 0,
    },
}));
