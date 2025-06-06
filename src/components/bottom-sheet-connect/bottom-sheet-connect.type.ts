import { type IImageProps, type IModalProps } from '~/core';

export interface IBottomSheetConnectProps extends IModalProps {
    image: IImageProps['source'];
    title: string;
}
