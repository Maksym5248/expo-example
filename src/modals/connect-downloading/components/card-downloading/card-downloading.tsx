import React, { memo } from 'react';

import { isArray } from 'lodash';
import { View } from 'react-native';

import { FlickeringGrid, Text, Card, Icon, Loading, TextGradient } from '~/core';
import { useTheme } from '~/styles';

import { useStyles } from './card-downloading.style';
import { type ICardDownloadingProps } from './card-downloading.type';
import { CardDownloadingSubItem } from '../card-downloading-sub-item';

export const CardDownloading = memo(({ item }: ICardDownloadingProps) => {
    const theme = useTheme();
    const s = useStyles();

    const isSuccess = item.status === 'success';
    const isLoading = item.status === 'loading';
    const isSubItems = isArray(item.items);
    const isResponse = !!item.visibleResponse;

    return (
        <Card key={item.id} style={s.card}>
            {!!isLoading && <FlickeringGrid style={s.flickeringGrid} />}
            <View style={[s.cardInfo, isSubItems && s.cardInfoSubItems]}>
                <View style={s.cardContent}>
                    <View style={s.cardText}>
                        {!isLoading && <Text text={item.title} color={isSuccess ? theme.colors.primary : theme.colors.textSecondary} />}
                        {isLoading && isSubItems && <Text text={item.title} />}
                        {isLoading && !isSubItems && (
                            <TextGradient
                                colors={[theme.palette.whiteFA60, theme.palette.whiteFA, theme.palette.whiteFA60]}
                                locations={[0, 0.2, 1]}
                                text={item.title}
                            />
                        )}
                        {!!item.response && isResponse && <Text type="bodyS" text={item.response} color={theme.colors.textSecondary} />}
                    </View>
                </View>
                {!!isSuccess && <Icon name={'check'} color={theme.colors.primary} size={16} style={s.icon} />}
                {!!isLoading && !isSubItems && <Loading style={s.loading} color={theme.colors.text} />}
            </View>
            {isSubItems && isLoading && (
                <View style={s.subItems}>
                    {item.items?.map((subItem, i) => {
                        const isLast = (item.response?.length ?? 1) - 1 === i;

                        return (
                            <>
                                <CardDownloadingSubItem item={subItem} key={item.id} />
                                {!isLast && <View style={s.separator} key={`${item.id}-separator`} />}
                            </>
                        );
                    })}
                </View>
            )}
        </Card>
    );
});

CardDownloading.displayName = 'CardDownloading';
