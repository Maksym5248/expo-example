import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import { View } from 'react-native';

import { BottomSheet, Icon, Modal, Text, Image, type IBottomSheetRef } from '~/components';
import { useTranslate } from '~/localization';
import { items } from '~/store';
import { useStylesCommon, useTheme } from '~/styles';

import { useStyles } from './connection.style';
import { type IConnectionModalProps } from './connection.type';
import { EmailFrom } from './containers';

enum STEPS {
    EMAIL = 'email',
    PHONE = 'phone',
    DOWNLOADING = 'downloading',
}

export const ConnectionModal = memo(({ id, ...props }: IConnectionModalProps) => {
    const styles = useStylesCommon();
    const theme = useTheme();
    const s = useStyles();
    const t = useTranslate();
    const [step, setStep] = useState<STEPS>(STEPS.EMAIL);

    const refBootomSheet = useRef<IBottomSheetRef>(null);
    const item = useMemo(() => items.find(el => el.id === id), [id]);

    const onSelectedEmail = useCallback(() => {
        setStep(STEPS.PHONE);
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
                {step === STEPS.EMAIL && <EmailFrom onSelected={onSelectedEmail} />}
            </BottomSheet>
        </Modal>
    );
});

ConnectionModal.displayName = 'ConnectionModal';
