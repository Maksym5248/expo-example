import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { type StackAnimationTypes } from 'react-native-screens';

import { SCREENS } from '~/constants';
import * as screens from '~/screens';
// import { useTheme } from '~/styles';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    // const theme = useTheme();

    const params = {
        screenOptions: {
            headerShown: false,
            // headerTintColor: theme.colors.primary,
            animation: 'slide_from_right' as StackAnimationTypes,
            animationTypeForReplace: 'push' as const,
        },
        initialRouteName: SCREENS.HOME,
    };

    return (
        <Stack.Navigator {...params}>
            <Stack.Screen name={SCREENS.HOME} component={screens.HomeScreen} />
        </Stack.Navigator>
    );
};
