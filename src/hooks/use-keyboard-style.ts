import { useAnimatedKeyboard, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';

export const useKeyboardStyle = () => {
    const keyboard = useAnimatedKeyboard();

    return useAnimatedStyle(() => {
        const keyboardHeight = keyboard.height.value;

        const translateY =
            keyboardHeight > 0 ? withDelay(50, withTiming(-keyboardHeight, { duration: 150 })) : withTiming(0, { duration: 150 });

        return {
            transform: [
                {
                    translateY,
                },
            ],
        };
    });
};
