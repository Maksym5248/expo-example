import React, { memo } from 'react';

import { isString } from 'lodash';
import { View } from 'react-native';

import { Text, Card, Icon, Loading } from '~/components';
import { useTranslate } from '~/localization';
import { useTheme } from '~/styles';

import { useStyles } from './card-downloading.style';
import { type ICardDownloadingProps } from './card-downloading.type';

export const CardDownloading = memo(({ item }: ICardDownloadingProps) => {
    const theme = useTheme();
    const s = useStyles();
    const t = useTranslate();

    const isSuccess = item.status === 'success';
    const isLoading = item.status === 'loading';

    return (
        <Card key={item.id} style={s.card}>
            <View style={s.cardContent}>
                <View style={s.cardText}>
                    <Text text={t(item.title)} />
                    {!!isString(item.response) && <Text type="bodyS" text={item.response} color={theme.colors.textSecondary} />}
                </View>
            </View>
            {!!isSuccess && <Icon name={'check'} color={theme.colors.primary} size={16} style={s.icon} />}
            {!!isLoading && <Loading />}
        </Card>
    );
});

CardDownloading.displayName = 'CardDownloading';
