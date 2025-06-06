import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(() => ({
    grid: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
}));
