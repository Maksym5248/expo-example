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
    },
    cardImage: {
        height: 32,
        width: 32,
        borderRadius: theme.radius.S,
    },
    title: {
        marginBottom: theme.spacing.L,
    },
    subTitle: {
        marginBottom: theme.spacing.XL,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: theme.spacing.L,
        right: theme.spacing.L,
        backgroundColor: theme.colors.background,
        height: 88 + device.inset.bottom,
    },
}));
