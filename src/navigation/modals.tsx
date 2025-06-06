import React from 'react';

import { MODALS } from '~/constants';
import * as modalsComponents from '~/modals';

export const modals = {
    [MODALS.CONNECT_EMAIL]: {
        renderComponent: (props: any) => <modalsComponents.ConnectEmailModal {...props} />,
    },
    [MODALS.CONNECT_CODE]: {
        renderComponent: (props: any) => <modalsComponents.ConnectCodeModal {...props} />,
    },
    [MODALS.CONNECT_DOWNLOADING]: {
        renderComponent: (props: any) => <modalsComponents.ConnectDownloadingModal {...props} />,
    },
};
