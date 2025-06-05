import React, { forwardRef, type ForwardedRef, useCallback, useRef } from 'react';

import { isString } from 'lodash';
import { View, TextInput as RNTextInput, Text as RNText } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { useTheme } from '~/styles';
import { toMaskPattern } from '~/utils';

import { useStyles } from './input.styles';
import { type IInputProps } from './input.types';
import { useOnChangeFocus } from './use-on-change-focus';
import { Text } from '../text';

const getBorderStyle = (theme: { colors: { input: string; error: string; primary: string } }, isValid: boolean, isFocused: boolean) => {
    let color = theme.colors.input;

    if (!isValid) {
        color = theme.colors.error;
    } else if (isFocused) {
        color = theme.colors.primary;
    }

    return { borderBottomColor: color };
};

const Component = (
    {
        onChangeValue,
        style,
        contentStyle,
        inputStyle,
        isValid,
        message,
        testID,
        onFocus,
        onBlur,
        autoFocus = false,
        value = '',
        secureTextEntry,
        right,
        left,
        mask,
        pointerEvents,
        disabled = false,
        ...rest
    }: IInputProps,
    ref: ForwardedRef<RNTextInput>,
) => {
    const innerRef = useRef<RNTextInput>(null);
    const outerRef = typeof ref === 'function' ? { current: null } : ref;
    const inputRef = outerRef || innerRef;

    const s = useStyles();
    const theme = useTheme();
    const paddingLeftLabel = useSharedValue(0);

    const _onChangeValue = useCallback(
        (text: string) => {
            if (mask) {
                const formatted = toMaskPattern(text, mask);
                inputRef.current?.setNativeProps({ text: formatted });

                onChangeValue?.(formatted);
            } else {
                onChangeValue?.(text);
            }
        },
        [onChangeValue, inputRef, mask],
    );

    const { onFocusHandler, onBlurHandler, isFocused } = useOnChangeFocus({
        onFocus,
        onBlur,
        autoFocus,
        isValue: !!value,
    });

    const renderLeftIcon = () => left;

    const renderRightIcon = () => right;

    const onLayoutLeftIcon = ({ nativeEvent }: { nativeEvent: { layout: { width: number } } }) => {
        const newValue = nativeEvent.layout.width + 20;

        if (paddingLeftLabel.value !== newValue) {
            paddingLeftLabel.value = newValue;
        }
    };

    return (
        <View style={[s.container, style]} pointerEvents={pointerEvents}>
            <View style={[s.inputContainer, getBorderStyle(theme, !!isValid, isFocused), contentStyle]}>
                <View onLayout={onLayoutLeftIcon}>{renderLeftIcon()}</View>
                {!!disabled && <RNText style={[s.input, s.inputText, inputStyle]}>{value}</RNText>}
                {!disabled && (
                    <RNTextInput
                        blurOnSubmit={false}
                        returnKeyType="next"
                        autoCapitalize="none"
                        placeholder=""
                        {...rest}
                        value={value}
                        secureTextEntry={secureTextEntry}
                        autoCorrect={false}
                        underlineColorAndroid={theme.colors.transparent}
                        testID={`input.${testID}`}
                        selectionColor={theme.colors.primary}
                        placeholderTextColor={theme.colors.placeholder}
                        onBlur={onBlurHandler}
                        onFocus={onFocusHandler}
                        style={[s.input, inputStyle]}
                        ref={inputRef}
                        onChangeText={_onChangeValue}
                    />
                )}
                {renderRightIcon()}
            </View>
            {!!message && isString(message) && (
                <Text
                    testID={`input.${testID}.message`}
                    type="bodyS"
                    color={isValid ? theme.colors.disabled : theme.colors.error}
                    text={message}
                />
            )}
            {!!message && !isString(message) && message}
        </View>
    );
};

export const TextInput = forwardRef(Component) as (props: IInputProps & React.RefAttributes<RNTextInput>) => ReturnType<typeof Component>;
