import { type ModalProps } from 'react-native-modal';

export interface IModalProps extends Partial<Omit<ModalProps, 'isVisible'>> {
    isVisible: boolean;
    hide: () => void;
    open: () => void;
}
