import React, { memo } from 'react';

import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { Button, Icon, Scroll, TextInput } from '~/components';
import { useFocusInput, useForm, useKeyboardStyle } from '~/hooks';
import { useTranslate } from '~/localization';
import { useStylesCommon, useTheme } from '~/styles';
import { validation } from '~/utils';

import { useStyles } from './email-form.style';
import { type IEmailFrom, type IEmailFromProps } from './email-form.type';

const validationSchema = validation.shape({
    email: validation.email(),
    password: validation.password(),
});

export const EmailForm = memo(({ onSelected }: IEmailFromProps) => {
    const styles = useStylesCommon();
    const theme = useTheme();
    const s = useStyles();
    const t = useTranslate();

    const keyboardStyle = useKeyboardStyle();
    const [refPassword, onEditedEmail] = useFocusInput();

    const { formik, fields } = useForm<IEmailFrom>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: onSelected,
    });

    return (
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
    );
});

EmailForm.displayName = 'EmailForm';
