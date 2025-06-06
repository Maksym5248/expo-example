import { type IModalProps } from '~/core';

export interface IConnectCodeModalProps extends IModalProps {
    id: string;
    email: string;
}

export interface ICodeFrom {
    code: string;
}
