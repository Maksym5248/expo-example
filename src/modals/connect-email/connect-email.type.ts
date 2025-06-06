import { type IModalProps } from '~/core';

export interface IConnectEmailModalProps extends IModalProps {
    id: string;
}

export interface IEmailFrom {
    email: string;
    password: string;
}
