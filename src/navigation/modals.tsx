import React from 'react';

import { MODALS } from '~/constants';
import * as modalsComponents from '~/modals';

export const modals = {
    [MODALS.CONNECTION]: {
        renderComponent: (props: any) => <modalsComponents.ConnectionModal {...props} />,
    },
};
