import React from 'react';

import ModalUI from 'react-native-modal';

import { useAndroidBackButton } from '~/hooks';

import { useStyles } from './modal-view.styles';
import { type IModalProps } from './modal-view.type';

export const ModalView = ({ children, isVisible, hide, ...rest }: IModalProps) => {
    const s = useStyles();

    useAndroidBackButton(() => {
        hide();
        return isVisible;
    }, [isVisible]);

    return (
        <ModalUI
            style={s.container}
            {...rest}
            useNativeDriver
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            coverScreen={false}
            backdropOpacity={0}
            isVisible={isVisible}
            onBackdropPress={hide}>
            {children}
        </ModalUI>
    );
};
