import React, { Fragment } from 'react';

import { type IModalsMap, Modal, type IModalTypeInternal, type IModalsMapInternal } from '~/services';

interface IModalProviderProps {
    modals: IModalsMap;
}

interface IModalProviderState {
    modals: IModalTypeInternal[];
    visibleModals: IModalsMapInternal;
}

export class ModalProvider extends React.PureComponent<IModalProviderProps, IModalProviderState> {
    _removeListener: () => void;

    constructor(props: IModalProviderProps) {
        super(props);
        this.state = {
            modals: Modal.registerModals(props.modals),
            visibleModals: {},
        };

        this._removeListener = () => undefined;
    }

    componentDidMount() {
        this._removeListener = Modal.onChange(async nextState => {
            this.setState(prev => ({
                ...prev,
                visibleModals: nextState,
            }));
        });
    }

    componentWillUnmount() {
        this._removeListener();
    }

    onModalHide = (name: string) => {
        Modal.hide(name);
    };

    onModalShow = (name: string, propsForComponent = {}) => {
        Modal.show(name, propsForComponent);
    };

    render() {
        const { modals, visibleModals } = this.state;

        if (modals.length === 0) {
            return null;
        }

        return modals.map((modal: IModalTypeInternal) => {
            const visibleModal = visibleModals[modal.name];
            const propsForComponent = {
                ...modal?.propsForComponent,
                ...visibleModal?.propsForComponent,
            };

            return (
                <Fragment key={modal.name}>
                    {visibleModal?.isRendered &&
                        modal.renderComponent({
                            ...propsForComponent,
                            isVisible: visibleModal?.isVisible,
                            hide: () => this.onModalHide(modal.name),
                            open: () => this.onModalShow(modal.name),
                        })}
                </Fragment>
            );
        });
    }
}
