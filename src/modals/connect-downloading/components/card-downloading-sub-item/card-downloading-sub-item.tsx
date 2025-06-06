import React, { memo } from 'react';

import { View } from 'react-native';

import { Text, Icon } from '~/core';
import { useTheme } from '~/styles';

import { useStyles } from './card-downloading-sub-item.style';
import { type ICardDownloadingSubItemProps } from './card-downloading-sub-item.type';

export const CardDownloadingSubItem = memo(({ item }: ICardDownloadingSubItemProps) => {
    const theme = useTheme();
    const s = useStyles();

    const isSuccess = item.status === 'success';

    return (
        <View style={s.item}>
            <Text type="bodyS" text={item.title} color={isSuccess ? theme.colors.primary : theme.colors.textSecondary} />
            {!!isSuccess && <Icon name="check" color={theme.colors.primary} size={12} />}
        </View>
    );
});

CardDownloadingSubItem.displayName = 'CardDownloadingSubItem';
