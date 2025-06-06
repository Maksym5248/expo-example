import { useAnimatedKeyboard, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export const useKeyboardStyle = () => {
    const keyboard = useAnimatedKeyboard();

    return useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withTiming(-keyboard.height.value, { duration: 150 }),
                },
            ],
        };
    });
};
