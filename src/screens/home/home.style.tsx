import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme, device }) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: device.inset.top,
        position: 'relative',
    },
    scroll: {
        paddingHorizontal: theme.spacing.L,
        paddingBottom: 88 + device.inset.bottom,
    },
    backgroundImag: {
        position: 'absolute',
        overflow: 'visible',
        left: 40,
        right: 0,
        top: theme.spacing.XXL,
        bottom: 0,
    },
    logo: {
        marginVertical: theme.spacing.XXL,
        alignSelf: 'flex-start',
    },
    card: {
        height: 80,
        marginBottom: theme.spacing.S,
        paddingHorizontal: theme.spacing.XL,
    },
    cardImage: {
        height: 32,
        width: 32,
        borderRadius: theme.radius.S,
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
}));
