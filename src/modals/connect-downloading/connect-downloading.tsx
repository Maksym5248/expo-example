import React, { memo, useMemo } from 'react';

import { BottomSheetConnect } from '~/components';
import { Scroll } from '~/core';
import { useTranslate } from '~/localization';
import { items, store } from '~/store';

import { CardDownloading } from './components';
import { type IConnectionModalProps } from './connect-downloading.type';

export const ConnectDownloadingModal = memo(({ id, ...props }: IConnectionModalProps) => {
    const t = useTranslate();
    const item = useMemo(() => store.getItemById(id), [id]);

    return (
        <BottomSheetConnect title={t('connecting.titleDownloading')} image={item?.image} {...props}>
            <Scroll bounces={false}>
                {items.map(item => (
                    <CardDownloading key={item.id} item={item} />
                ))}
            </Scroll>
        </BottomSheetConnect>
    );
});

ConnectDownloadingModal.displayName = 'ConnectDownloadingModal';
