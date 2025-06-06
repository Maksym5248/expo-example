import { ThemeManager } from '~/styles';

const HEADER_HEIGHT = 60;

export const useStyles = ThemeManager.createStyleSheet(({ theme, device }) => ({
    container: {
        height: device.window.height - 50 - HEADER_HEIGHT,
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    codeContainer: {
        paddingHorizontal: theme.spacing.L,
        width: '100%',
        gap: 8,
    },
    cellContainer: {
        flex: 1,
        height: 80,
        backgroundColor: theme.colors.input,
        borderRadius: theme.radius.S,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        marginHorizontal: theme.spacing.L,
        marginVertical: theme.spacing.M,
    },
}));
