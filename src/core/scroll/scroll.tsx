import { type RefAttributes } from 'react';

import { type ScrollViewProps, type ScrollView as RNScrollView } from 'react-native';
import { type NativeViewGestureHandlerProps, ScrollView } from 'react-native-gesture-handler';

export const Scroll = ({ children, ...props }: ScrollViewProps & NativeViewGestureHandlerProps & RefAttributes<RNScrollView>) => {
    return <ScrollView {...props}>{children}</ScrollView>;
};
