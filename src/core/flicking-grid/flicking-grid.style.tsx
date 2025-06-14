import { ThemeManager } from '~/styles';

export const FLICKERING_COLOR = '#6B7280';

export const useStyles = ThemeManager.createStyleSheet(() => ({
    grid: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        overflow: 'hidden',
    },
}));
