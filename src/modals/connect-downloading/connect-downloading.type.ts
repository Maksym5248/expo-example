import { type IModalProps } from '~/core';

export interface IConnectionModalProps extends IModalProps {
    id: string;
    onCreated: () => void;
}
