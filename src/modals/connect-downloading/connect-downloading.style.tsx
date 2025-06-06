import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme, device }) => ({
    container: {
        height: device.window.height - 100,
        width: device.window.width,
        backgroundColor: theme.colors.background,
    },
    header: {
        paddingHorizontal: theme.spacing.L,
        height: 60,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.S,
    },
    cardImage: {
        width: 20,
        height: 20,
        borderRadius: 2.5,
    },
}));
