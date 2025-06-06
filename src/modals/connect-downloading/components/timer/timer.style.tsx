import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme }) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.XXS,
    },
    dot: {
        width: 2,
        height: 2,
        backgroundColor: theme.palette.grey95,
    },
}));
