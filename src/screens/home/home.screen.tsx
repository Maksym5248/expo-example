import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Button, Card, Icon, Image, Scroll, Svg, Text } from '~/components';
import { MODALS } from '~/constants';
import { useTranslate } from '~/localization';
import { Modal } from '~/services';
import { useTheme } from '~/styles';

import { useStyles } from './home.style';

const backgroundImage = require('../../../assets/image/main-background.png');

export function HomeScreen() {
    const s = useStyles();
    const theme = useTheme();
    const t = useTranslate();
    const [checked, setChecked] = useState<string[]>([]);

    const items = [
        {
            id: 'sleeper',
            title: t('home.sleeper'),
            image: require('../../../assets/image/sleeper.png'),
        },
        {
            id: 'espn',
            title: t('home.espn'),
            subTitle: t('home.espnSub'),
            image: require('../../../assets/image/espn.png'),
        },
        {
            id: 'yahoo',
            title: t('home.yahoo'),
            image: require('../../../assets/image/yahoo.png'),
        },
        {
            id: 'cbs',
            title: t('home.cbs'),
            image: require('../../../assets/image/cbs.png'),
        },
        {
            id: 'unknown',
            title: t('home.unknown'),
            image: require('../../../assets/image/unknown.png'),
        },
    ];

    const onCheckItem = (itemId: string) => {
        setChecked(prev => {
            if (prev.includes(itemId)) {
                return prev.filter(id => id !== itemId);
            }
            return [...prev, itemId];
        });
    };

    const onPressOpenConnection = () => {
        Modal.show(MODALS.CONNECTION, { id: checked[0] });
    };

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
                                    <Text text={item.title} />
                                    {!!item?.subTitle && <Text type="bodyS" text={item?.subTitle} color={theme.colors.textSecondary} />}
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
            <View style={s.footer}>
                <Button disabled={!checked.length} title={t('home.submit')} onPress={onPressOpenConnection} />
            </View>
        </View>
    );
}
