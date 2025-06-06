import React, { useCallback, useRef, forwardRef, type Ref } from 'react';

import { View } from 'react-native';

import { BottomSheet, Icon, ModalView, Text, Image, type IBottomSheetRef } from '~/core';
import { useStylesCommon, useTheme } from '~/styles';

import { useStyles } from './bottom-sheet-connect.style';
import { type IBottomSheetConnectProps } from './bottom-sheet-connect.type';

export const BottomSheetConnect = forwardRef<IBottomSheetRef, IBottomSheetConnectProps>(
    ({ children, image, title, ...props }: IBottomSheetConnectProps, ref: Ref<IBottomSheetRef>) => {
        const styles = useStylesCommon();
        const theme = useTheme();
        const s = useStyles();

        const refBootomSheet = useRef<IBottomSheetRef>(null);

        const onClose = useCallback(() => {
            const bottomSheetRef = (ref as React.RefObject<IBottomSheetRef>) || refBootomSheet;
            bottomSheetRef?.current?.close();
        }, [ref]);

        return (
            <ModalView style={styles.bottomSheet} {...props} animationInTiming={1}>
                <BottomSheet
                    ref={(ref as React.RefObject<IBottomSheetRef>) || refBootomSheet}
                    {...props}
                    onClose={props.hide}
                    contentStyle={s.container}
                    headerStyles={s.header}
                    header={{
                        left: (
                            <View style={s.titleContainer}>
                                <Image source={image} style={s.cardImage} />
                                <Text type="labelL" text={title} />
                            </View>
                        ),
                        right: <Icon name="cross" color={theme.colors.textSecondary} onPress={onClose} />,
                    }}>
                    {children}
                </BottomSheet>
            </ModalView>
        );
    },
);

BottomSheetConnect.displayName = 'BottomSheetConnect';
