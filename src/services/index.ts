export type { IModalsMapInternal, IModalsMap, IModalTypeInternal } from './modal';
import { ModalClass } from './modal';
import { NavigationClass } from './navigation';

export const Navigation = new NavigationClass();
export const Modal = new ModalClass();
