import React, { memo, useMemo, useRef } from 'react';

import { BottomSheetConnect } from '~/components';
import { type IBottomSheetRef, Scroll, Text } from '~/core';
import { store } from '~/data';
import { useTranslate } from '~/localization';
import { useTheme } from '~/styles';

import { CardDownloading } from './components';
import { useStyles } from './connect-downloading.style';
import { type IConnectionModalProps } from './connect-downloading.type';
import { useSteps } from './useSteps';

export const ConnectDownloadingModal = memo(({ id, onCreated, ...props }: IConnectionModalProps) => {
    const t = useTranslate();
    const item = useMemo(() => store.getItemById(id), [id]);
    const theme = useTheme();
    const s = useStyles();
    const refBootomSheet = useRef<IBottomSheetRef>(null);

    const steps = useSteps(() => {
        refBootomSheet.current?.close();
        onCreated?.();
    });

    return (
        <BottomSheetConnect ref={refBootomSheet} title={t('connecting.titleDownloading')} image={item?.image} {...props}>
            <Scroll bounces={false}>
                {steps
                    .filter(el => el.visible)
                    .map(item => (
                        <CardDownloading key={item.id} item={item} />
                    ))}
                <Text style={s.description} color={theme.colors.textSecondary} text={t('connecting.downloading.description')} />
            </Scroll>
        </BottomSheetConnect>
    );
});

ConnectDownloadingModal.displayName = 'ConnectDownloadingModal';
