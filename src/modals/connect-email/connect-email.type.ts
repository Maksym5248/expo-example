import { type IModalProps } from '~/core';

export interface IConnectEmailModalProps extends IModalProps {
    id: string;
    onCreated: () => void;
}

export interface IEmailFrom {
    email: string;
    password: string;
}
