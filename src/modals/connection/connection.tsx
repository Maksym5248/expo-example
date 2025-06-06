import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import { View } from 'react-native';

import { BottomSheet, Icon, Modal, Text, Image, type IBottomSheetRef } from '~/components';
import { useTranslate } from '~/localization';
import { items } from '~/store';
import { useStylesCommon, useTheme } from '~/styles';

import { useStyles } from './connection.style';
import { type IConnectionModalProps } from './connection.type';
import { EmailForm, CodeForm } from './containers';

enum STEPS {
    EMAIL = 'email',
    CODE = 'code',
    DOWNLOADING = 'downloading',
}

interface IStep {
    id: STEPS;
    email?: string;
}

const createStep = (id: STEPS, email?: string): IStep => ({
    id,
    email,
});

export const ConnectionModal = memo(({ id, ...props }: IConnectionModalProps) => {
    const styles = useStylesCommon();
    const theme = useTheme();
    const s = useStyles();
    const t = useTranslate();
    const [step, setStep] = useState<IStep>(createStep(STEPS.CODE, 'email@address.com'));

    const refBootomSheet = useRef<IBottomSheetRef>(null);
    const item = useMemo(() => items.find(el => el.id === id), [id]);

    const onSelectedEmail = useCallback(({ email }: { email: string }) => {
        setStep(createStep(STEPS.CODE, email));
    }, []);

    const onSelectedCode = useCallback(() => {
        setStep(createStep(STEPS.DOWNLOADING));
    }, []);

    return (
        <Modal style={styles.bottomSheet} {...props} animationInTiming={1}>
            <BottomSheet
                ref={refBootomSheet}
                {...props}
                onClose={props.hide}
                contentStyle={s.container}
                headerStyles={s.header}
                header={{
                    left: (
                        <View style={s.titleContainer}>
                            <Image source={item?.image} style={s.cardImage} />
                            <Text text={`${t('connecting.title')} ${t(item?.title) ?? t('items.unknown')}`} />
                        </View>
                    ),
                    right: <Icon name="cross" color={theme.colors.textSecondary} onPress={props.hide} />,
                }}>
                {step.id === STEPS.EMAIL && <EmailForm onSelected={onSelectedEmail} />}
                {step.id === STEPS.CODE && <CodeForm onSelected={onSelectedCode} email={step.email as string} />}
            </BottomSheet>
        </Modal>
    );
});

ConnectionModal.displayName = 'ConnectionModal';
