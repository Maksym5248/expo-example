import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Button, Card, Icon, Image, Scroll, Svg, Text } from '~/components';
import { useTranslate } from '~/localization';
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

    return (
        <View style={s.container}>
            <Image source={backgroundImage} style={s.backgroundImag} contentFit="cover" />
            <Scroll style={s.scroll}>
                <StatusBar style="light" translucent={false} />
                <Svg name="logo" color={theme.colors.logo} style={s.logo} />
                <Text type="h2" text={t('home.title')} style={s.title} />
                <Text type="body" text={t('home.subTitle')} color={theme.colors.textSecondary} style={s.subTitle} />
                {items.map(item => (
                    <Card key={item.id} style={s.card}>
                        <Image source={item.image} style={s.cardImage} contentFit="contain" />
                        <Text text={item.title} />
                        <Icon
                            onPress={() => onCheckItem(item.id)}
                            name={checked.includes(item.id) ? 'check' : 'plus'}
                            color={theme.colors.textSecondary}
                            size={24}
                        />
                    </Card>
                ))}
            </Scroll>
            <View style={s.footer}>
                <Button disabled={!!checked.length} title={t('')} />
            </View>
        </View>
    );
}
