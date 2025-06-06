import { type IModalProps } from '~/components';

export interface IConnectionModalProps extends IModalProps {
    id: string;
    onCreated: () => void;
}
