import React, { memo, useCallback, useMemo, useRef, useEffect } from 'react';

import { View } from 'react-native';
import { CodeField, useBlurOnFulfill, useClearByFocusCell, Cursor, type RenderCellOptions } from 'react-native-confirmation-code-field';

import { BottomSheetConnect } from '~/components';
import { MODALS } from '~/constants';
import { Scroll, Text, type IBottomSheetRef } from '~/core';
import { store } from '~/data';
import { useForm } from '~/hooks';
import { useTranslate } from '~/localization';
import { Modal } from '~/services';
import { useTheme } from '~/styles';
import { validation } from '~/utils';

import { useStyles } from './connect-code.style';
import { type IConnectCodeModalProps, type ICodeFrom } from './connect-code.type';

const validationSchema = validation.shape({
    code: validation.phoneCode(),
});

const CELL_COUNT = 6;

export const ConnectCodeModal = memo(({ id, onCreated, email, ...props }: IConnectCodeModalProps) => {
    const theme = useTheme();
    const s = useStyles();
    const t = useTranslate();
    const item = useMemo(() => store.getItemById(id), [id]);

    const refBootomSheet = useRef<IBottomSheetRef>(null);

    const onSubmit = useCallback(() => {
        Modal.show(MODALS.CONNECT_DOWNLOADING, {
            id,
            onCreated,
        });

        setTimeout(() => {
            refBootomSheet.current?.close();
        }, 300);
    }, []);

    const { fields } = useForm<ICodeFrom>({
        initialValues: {
            code: '',
        },
        validationSchema,
        onSubmit,
    });

    const ref = useBlurOnFulfill({ value: fields.code.value, cellCount: CELL_COUNT });

    const [propsCode, getCellOnLayoutHandler] = useClearByFocusCell({
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
            onSubmit();
        }
    }, [fields.code.value]);

    return (
        <BottomSheetConnect ref={refBootomSheet} title={`${t('connecting.title')} ${t(item?.title)}`} image={item?.image} {...props}>
            <Scroll bounces={false} showsVerticalScrollIndicator={false}>
                <View style={s.container}>
                    <CodeField
                        ref={ref}
                        {...propsCode}
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
        </BottomSheetConnect>
    );
});

ConnectCodeModal.displayName = 'ConnectCodeModal';
