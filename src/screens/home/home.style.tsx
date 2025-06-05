import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme, device }) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: device.inset.top,
        position: 'relative',
    },
    backgroundImag: {
        position: 'absolute',
        overflow: 'visible',
        left: 40,
        right: 0,
        top: 0,
        bottom: 0,
    },
    greenFilter: {
        position: 'absolute',
        overflow: 'visible',
        left: 40,
        right: 0,
        top: 0,
        bottom: 0,
    },
    text: {
        color: 'red',
    },
}));
