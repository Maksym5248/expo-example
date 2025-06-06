import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme }) => ({
    description: {
        marginHorizontal: theme.spacing.L,
        alignSelf: 'center',
    },
}));
