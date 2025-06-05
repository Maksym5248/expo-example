import { ThemeManager } from '~/styles';

export const useStyles = ThemeManager.createStyleSheet(({ theme }) => ({
    container: {
        height: theme.element.input.height,
    },
    inputContainer: {
        ...theme.element.input,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        paddingRight: theme.spacing.XS,
        paddingLeft: theme.spacing.XS,
        backgroundColor: theme.colors.input,
        borderRadius: theme.radius.M,
    },
    input: {
        ...theme.element.input,
        width: '100%',
        ...theme.text.body,
        color: theme.colors.textSecondary,
        paddingTop: 0,
        paddingLeft: 0,
        paddingBottom: 0,
    },
    inputText: {
        lineHeight: 50,
        alignItems: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        pointerEvents: 'none',
    },
    hitSlop: {
        top: 15,
        right: 15,
        bottom: 15,
        left: 15,
    },
}));
