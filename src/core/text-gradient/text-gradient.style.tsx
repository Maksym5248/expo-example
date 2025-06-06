import { ThemeManager } from '~/styles';

export const FLICKERING_COLOR = '#6B7280';

export const useStyles = ThemeManager.createStyleSheet(() => ({
    hidden: {
        opacity: 0,
    },
}));
