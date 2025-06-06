import React, { memo, useMemo } from 'react';

import { BottomSheetConnect } from '~/components';
import { Scroll, Text } from '~/core';
import { itemsDownloading, store } from '~/data';
import { useTranslate } from '~/localization';
import { useTheme } from '~/styles';

import { CardDownloading } from './components';
import { useStyles } from './connect-downloading.style';
import { type IConnectionModalProps } from './connect-downloading.type';

export const ConnectDownloadingModal = memo(({ id, ...props }: IConnectionModalProps) => {
    const t = useTranslate();
    const item = useMemo(() => store.getItemById(id), [id]);
    const theme = useTheme();
    const s = useStyles();

    return (
        <BottomSheetConnect title={t('connecting.titleDownloading')} image={item?.image} {...props}>
            <Scroll bounces={false}>
                {itemsDownloading
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
