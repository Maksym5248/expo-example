import React, { memo, useCallback, useEffect } from 'react';

import { View } from 'react-native';
import { CodeField, useBlurOnFulfill, useClearByFocusCell, Cursor, type RenderCellOptions } from 'react-native-confirmation-code-field';

import { Scroll, Text } from '~/components';
import { useForm } from '~/hooks';
import { useTranslate } from '~/localization';
import { useTheme } from '~/styles';
import { validation } from '~/utils';

import { useStyles } from './code-form.style';
import { type ICodeFrom, type ICodeFormProps } from './code-form.type';

const validationSchema = validation.shape({
    code: validation.phoneCode(),
});

const CELL_COUNT = 6;

export const CodeForm = memo(({ onSelected, email }: ICodeFormProps) => {
    const s = useStyles();
    const t = useTranslate();
    const theme = useTheme();

    const { fields } = useForm<ICodeFrom>({
        initialValues: {
            code: '',
        },
        validationSchema,
        onSubmit: () => onSelected(),
    });

    const ref = useBlurOnFulfill({ value: fields.code.value, cellCount: CELL_COUNT });

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: fields.code.value,
        setValue: fields.code.onChangeValue,
    });

    const renderCell = useCallback(
        ({ index, symbol, isFocused }: RenderCellOptions) => (
            <View key={index} style={s.cellContainer} onLayout={getCellOnLayoutHandler(index)}>
                <Text type="h1">{symbol || (isFocused ? <Cursor /> : null)}</Text>
            </View>
        ),
        [s, getCellOnLayoutHandler],
    );

    useEffect(() => {
        if (fields.code.value.length === CELL_COUNT) {
            onSelected();
        }
    }, [fields.code.value]);

    return (
        <Scroll bounces={false} showsVerticalScrollIndicator={false}>
            <View style={s.container}>
                <CodeField
                    ref={ref}
                    {...props}
                    cellCount={CELL_COUNT}
                    rootStyle={s.codeContainer}
                    keyboardType="numeric"
                    textContentType="oneTimeCode"
                    onChangeText={fields.code.onChangeValue}
                    value={fields.code.value}
                    renderCell={renderCell}
                />
                <Text style={s.description} color={theme.colors.textSecondary} text={t('connecting.codeForm.description', { email })} />
            </View>
        </Scroll>
    );
});

CodeForm.displayName = 'CodeForm';
