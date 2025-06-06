import { ThemeManager } from '~/styles';

const HEADER_HEIGHT = 60;

export const useStyles = ThemeManager.createStyleSheet(({ theme, device }) => ({
    scroll: {
        matginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    container: {
        height: device.window.height - 100 - HEADER_HEIGHT,
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
