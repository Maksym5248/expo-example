import React from 'react';

import ModalUI from 'react-native-modal';

import { useAndroidBackButton } from '~/hooks';

import { useStyles } from './modal.styles';
import { type IModalProps } from './modal.type';

export const Modal = ({ children, isVisible, hide, ...rest }: IModalProps) => {
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
