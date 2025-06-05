import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(() => ({
    container: {
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        height: undefined,
        width: undefined,
        flex: 1,
    },
}));
