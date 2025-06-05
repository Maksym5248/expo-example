import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme, device }) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    backgroundImag: {
        position: 'absolute',
        top: device.inset.top,
        left: 0,
        right: 0,
        bottom: 0,
    },
    text: {
        color: 'red',
    },
}));
