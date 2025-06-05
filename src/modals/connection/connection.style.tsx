import { ThemeManager } from '~/styles';

export const getHeight = (device: { window: { height: number } }) => device.window.height * 0.9;

export const useStyles = ThemeManager.createStyleSheet(({ theme, device }) => ({
    container: {
        height: getHeight(device),
        width: device.window.width,
        paddingBottom: device.inset.bottom + Number(theme.element.button.height) + theme.spacing.L,
    },
}));
