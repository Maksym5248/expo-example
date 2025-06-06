import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme }) => ({
    card: {
        marginBottom: theme.spacing.S,
        marginHorizontal: theme.spacing.L,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    cardInfo: {
        padding: theme.spacing.XL,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardInfoSubItems: {
        paddingBottom: theme.spacing.M,
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
        gap: theme.spacing.S,
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
    subItems: {
        backgroundColor: theme.palette.balck2660,
        marginHorizontal: theme.spacing.XL,
        borderRadius: theme.radius.S,
        padding: theme.spacing.S,
        marginBottom: theme.spacing.XL,
    },
    separator: {
        height: 1,
        marginVertical: theme.spacing.S,
        width: '100%',
        backgroundColor: theme.colors.separator,
    },
}));
