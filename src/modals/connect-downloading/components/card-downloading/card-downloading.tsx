import React, { memo } from 'react';

import { isString } from 'lodash';
import { View } from 'react-native';

import { FlickeringGrid, Text, Card, Icon, Loading, TextGradient } from '~/core';
import { useTheme } from '~/styles';

import { useStyles } from './card-downloading.style';
import { type ICardDownloadingProps } from './card-downloading.type';

export const CardDownloading = memo(({ item }: ICardDownloadingProps) => {
    const theme = useTheme();
    const s = useStyles();

    const isSuccess = item.status === 'success';
    const isLoading = item.status === 'loading';

    return (
        <Card key={item.id} style={s.card}>
            {!!isLoading && <FlickeringGrid style={s.flickeringGrid} />}
            <View style={s.cardContent}>
                <View style={s.cardText}>
                    {!isLoading && <Text text={item.title} color={isSuccess ? theme.colors.primary : theme.colors.textSecondary} />}
                    {isLoading && (
                        <TextGradient
                            colors={[theme.palette.whiteFA60, theme.palette.whiteFA, theme.palette.whiteFA60]}
                            locations={[0, 0.05, 1]}
                            text={item.title}
                            color={isSuccess ? theme.colors.primary : theme.colors.textSecondary}
                        />
                    )}
                    {!!isString(item.response) && <Text type="bodyS" text={item.response} color={theme.colors.textSecondary} />}
                </View>
            </View>
            {!!isSuccess && <Icon name={'check'} color={theme.colors.primary} size={16} style={s.icon} />}
            {!!isLoading && <Loading style={s.loading} color={theme.colors.text} />}
        </Card>
    );
});

CardDownloading.displayName = 'CardDownloading';
