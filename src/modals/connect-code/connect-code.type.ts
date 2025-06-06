import { type IModalProps } from '~/core';

export interface IConnectCodeModalProps extends IModalProps {
    id: string;
    email: string;
    onCreated: () => void;
}

export interface ICodeFrom {
    code: string;
}
