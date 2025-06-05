import React from 'react';

import { ActivityIndicator, View } from 'react-native';

import { ThemeManager, useTheme } from '~/styles';

import { useStyles } from './loading.styles';
import { type ILoadingProps } from './loading.types';

export const Loading = ({ style, color = ThemeManager.theme.colors.primary, size = 52 }: ILoadingProps) => {
    const s = useStyles();
    const theme = useTheme();

    return (
        <View style={[s.container, style]} pointerEvents="none">
            <ActivityIndicator size={size} color={color ?? theme.colors.primary} />
        </View>
    );
};
