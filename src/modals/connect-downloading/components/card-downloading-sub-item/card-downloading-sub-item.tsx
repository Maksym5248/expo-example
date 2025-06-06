import React, { memo, useEffect } from 'react';

import { View } from 'react-native';

import { Text, Icon, Loading, TextGradient } from '~/core';
import { useTheme } from '~/styles';

import { useStyles } from './card-downloading-sub-item.style';
import { type ICardDownloadingSubItemProps } from './card-downloading-sub-item.type';
import { Timer } from '../timer';

export const CardDownloadingSubItem = memo(({ item }: ICardDownloadingSubItemProps) => {
    const theme = useTheme();
    const s = useStyles();

    const isSuccess = item.progress === 1;
    const isLoading = item.progress !== 1 && item.progress !== 0;

    useEffect(() => {}, [item.progress]);

    return (
        <View style={s.item}>
            <View style={s.itemContent}>
                {!isLoading && <Text text={item.title} color={isSuccess ? theme.colors.primary : theme.colors.textSecondary} />}
                {isLoading && (
                    <TextGradient
                        colors={[theme.palette.whiteFA60, theme.palette.whiteFA, theme.palette.whiteFA60]}
                        locations={[0, 0.05, 1]}
                        text={item.title}
                        loading
                    />
                )}
                {!!isSuccess && <Icon name="check" color={theme.colors.primary} size={12} />}
                {!!isLoading && <Loading style={s.loading} color={theme.colors.text} size={12} />}
            </View>
            {isLoading && <Timer item={item} />}
        </View>
    );
});

CardDownloadingSubItem.displayName = 'CardDownloadingSubItem';
