import { ThemeManager } from '~/styles';

const HEADER_HEIGHT = 60;

export const useStyles = ThemeManager.createStyleSheet(({ theme, device }) => ({
    container: {
        height: device.window.height - 50 - HEADER_HEIGHT,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    input: {
        paddingHorizontal: theme.spacing.L,
        marginBottom: theme.spacing.S,
    },
}));
