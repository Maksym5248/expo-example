import React from 'react';

import { View } from 'react-native';

import { ThemeManager, useStylesCommon } from '~/styles';

import { useStyles } from './button.style';
import { type IButtonProps } from './button.types';
import { Loading } from '../loading';
import { Text } from '../text';
import { Touchable } from '../touchable';

export const Button = ({
    onPress,
    title,
    style,
    right,
    left,
    disabled,
    testID,
    background = ThemeManager.theme.colors.primary,
    color = ThemeManager.theme.colors.textButton,
    isLoading,
    center,
}: IButtonProps) => {
    const s = useStyles();
    const styles = useStylesCommon();

    const colors = {
        text: color,
        background: background,
    };

    if (disabled) {
        colors.text = color;
        colors.background = ThemeManager.theme.colors.disabled;
    }

    return (
        <View style={[s.container, style, { backgroundColor: colors.background }]} testID={`${testID}.button`}>
            <View>{left}</View>
            {!!isLoading && <Loading size="small" />}
            {!isLoading && !!title && <Text style={s.title} type="labelM" text={title} color={colors.text} />}
            {!isLoading && !!center && center}
            <View>{right}</View>
            <Touchable type="rect" disabled={disabled} onPress={onPress} style={styles.touchable} testID={testID} />
        </View>
    );
};
