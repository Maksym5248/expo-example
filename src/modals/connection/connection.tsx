import React, { memo, useRef } from 'react';

import { BottomSheet, Modal, Text, type IBottomSheetRef } from '~/components';
import { useStylesCommon } from '~/styles';

import { useStyles } from './connection.style';
import { type IConnectionModalProps } from './connection.type';

export const ConnectionModal = memo(({ id, ...props }: IConnectionModalProps) => {
    const styles = useStylesCommon();
    const s = useStyles();
    const refBootomSheet = useRef<IBottomSheetRef>(null);

    return (
        <Modal style={styles.bottomSheet} {...props} animationInTiming={1}>
            <BottomSheet ref={refBootomSheet} {...props} onClose={props.hide} contentStyle={s.container}>
                <Text text={`test ${id}`} />
            </BottomSheet>
        </Modal>
    );
});

ConnectionModal.displayName = 'ConnectionModal';
