import { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { MODALS } from '~/constants';
import { Button, Card, Icon, Image, Scroll, Svg, Text } from '~/core';
import { items } from '~/data';
import { useTranslate } from '~/localization';
import { Modal } from '~/services';
import { useStylesCommon, useTheme } from '~/styles';

import { useStyles } from './home.style';

const backgroundImage = require('../../../assets/image/main-background.png');

export function HomeScreen() {
    const styles = useStylesCommon();
    const s = useStyles();
    const theme = useTheme();
    const t = useTranslate();
    const [checked, setChecked] = useState<string[]>([]);

    const onCheckItem = (itemId: string) => {
        Modal.show(MODALS.CONNECT_EMAIL, {
            id: itemId,
            onCreated: () => {
                setChecked(prev => {
                    if (prev.includes(itemId)) {
                        return prev.filter(id => id !== itemId);
                    }
                    return [...prev, itemId];
                });
            },
        });
    };

    useEffect(() => {
        Modal.show(MODALS.CONNECT_DOWNLOADING, {
            id: items[0].id,
        });
    }, []);

    return (
        <View style={s.container}>
            <Image source={backgroundImage} style={s.backgroundImag} contentFit="cover" />
            <Scroll style={s.scroll}>
                <StatusBar style="light" translucent={false} />
                <Svg name="logo" color={theme.colors.logo} style={s.logo} />
                <Text type="h2" text={t('home.title')} style={s.title} />
                <Text type="body" text={t('home.subTitle')} color={theme.colors.textSecondary} style={s.subTitle} />
                {items.map(item => {
                    const isChecked = checked.includes(item.id);

                    return (
                        <Card key={item.id} style={s.card}>
                            <View style={s.cardContent}>
                                <Image source={item.image} style={s.cardImage} contentFit="contain" />
                                <View style={s.cardText}>
                                    <Text text={t(item.title)} />
                                    {!!item?.subTitle && <Text type="bodyS" text={t(item?.subTitle)} color={theme.colors.textSecondary} />}
                                </View>
                            </View>
                            <Icon
                                onPress={() => onCheckItem(item.id)}
                                name={checked.includes(item.id) ? 'check' : 'plus'}
                                color={isChecked ? theme.colors.primary : theme.colors.textSecondary}
                                size={16}
                                style={s.icon}
                            />
                        </Card>
                    );
                })}
            </Scroll>
            <View style={styles.footer}>
                <Button disabled={!checked.length} title={t('home.submit')} />
            </View>
        </View>
    );
}
