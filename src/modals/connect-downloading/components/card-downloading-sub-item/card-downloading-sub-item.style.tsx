import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme }) => ({
    item: {
        gap: theme.spacing.S,
    },
    itemContent: {
        flex: 1,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    loading: {
        flex: 0,
        width: 12,
        height: 12,
    },
}));
