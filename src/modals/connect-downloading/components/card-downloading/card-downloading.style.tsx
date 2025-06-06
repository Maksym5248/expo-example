import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme }) => ({
    card: {
        height: 80,
        marginBottom: theme.spacing.S,
        paddingHorizontal: theme.spacing.XL,
        marginHorizontal: theme.spacing.L,
        position: 'relative',
    },
    flickeringGrid: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.M,
    },
    cardText: {
        flexDirection: 'column',
    },
    title: {
        marginTop: theme.spacing.XL,
        marginBottom: theme.spacing.L,
    },
    subTitle: {
        marginBottom: theme.spacing.XL,
    },
    icon: {
        width: 28,
        height: 28,
        backgroundColor: theme.palette.whiteFA10,
        borderRadius: theme.radius.S,
    },
    loading: {
        flex: 0,
        width: 28,
        height: 28,
    },
}));
