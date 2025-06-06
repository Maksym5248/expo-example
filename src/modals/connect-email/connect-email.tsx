import React, { memo, useCallback, useMemo, useRef } from 'react';

import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { BottomSheetConnect } from '~/components';
import { MODALS } from '~/constants';
import { Button, type IBottomSheetRef, Icon, Scroll, TextInput } from '~/core';
import { items } from '~/data';
import { useFocusInput, useForm, useKeyboardStyle } from '~/hooks';
import { useTranslate } from '~/localization';
import { Modal } from '~/services';
import { useStylesCommon, useTheme } from '~/styles';
import { validation } from '~/utils';

import { useStyles } from './connect-email.style';
import { type IConnectEmailModalProps, type IEmailFrom } from './connect-email.type';

const validationSchema = validation.shape({
    email: validation.email(),
    password: validation.password(),
});

export const ConnectEmailModal = memo(({ id, onCreated, ...props }: IConnectEmailModalProps) => {
    const styles = useStylesCommon();
    const theme = useTheme();
    const s = useStyles();
    const t = useTranslate();
    const item = useMemo(() => items.find(el => el.id === id), [id]);
    const refBootomSheet = useRef<IBottomSheetRef>(null);

    const onSubmit = useCallback(({ email }: { email: string }) => {
        Modal.show(MODALS.CONNECT_CODE, {
            id,
            email,
            onCreated,
        });

        setTimeout(() => {
            refBootomSheet.current?.close();
        }, 300);
    }, []);

    const keyboardStyle = useKeyboardStyle();
    const [refPassword, onEditedEmail] = useFocusInput();

    const { formik, fields } = useForm<IEmailFrom>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit,
    });

    return (
        <BottomSheetConnect ref={refBootomSheet} title={`${t('connecting.title')} ${t(item?.title)}`} image={item?.image} {...props}>
            <Scroll bounces={false} showsVerticalScrollIndicator={false}>
                <View style={s.container}>
                    <TextInput
                        {...fields.email}
                        left={<Icon name="email" color={theme.colors.textSecondary} />}
                        placeholder={t('connecting.emailFrom.email')}
                        style={s.input}
                        onSubmitEditing={onEditedEmail}
                        keyboardType="email-address"
                        autoComplete="email"
                    />
                    <TextInput
                        {...fields.password}
                        left={<Icon name="lock" color={theme.colors.textSecondary} />}
                        placeholder={t('connecting.emailFrom.password')}
                        style={s.input}
                        ref={refPassword}
                        returnKeyType="done"
                        secureTextEntry
                        autoComplete="password"
                        onSubmitEditing={formik.isValid ? () => formik.handleSubmit() : undefined}
                    />
                    <View style={s.content}>
                        <Animated.View style={[styles.footer, keyboardStyle]}>
                            <Button disabled={!formik.isValid} title={t('connecting.emailFrom.submit')} onPress={formik.handleSubmit} />
                        </Animated.View>
                    </View>
                </View>
            </Scroll>
        </BottomSheetConnect>
    );
});

ConnectEmailModal.displayName = 'ConnectEmailModal';
