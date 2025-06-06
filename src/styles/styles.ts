import { ThemeManager } from './theme';

export const useStylesCommon = ThemeManager.createStyleSheet(({ theme, device }) => ({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: theme.colors.background,
    },
    fillAbsolute: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    touchable: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    bottomSheet: {
        height: device.window.height,
        width: device.window.width,
        padding: 0,
        margin: 0,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        backgroundColor: theme.colors.background,
        height: 88 + device.inset.bottom,
        paddingBottom: device.inset.bottom,
        paddingHorizontal: theme.spacing.L,
        justifyContent: 'center',
    },
}));
