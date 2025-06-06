import React, { memo } from 'react';

import { Scroll } from '~/components';
import { items } from '~/store';

import { CardDownloading } from './components';

export const Downloading = memo(() => {
    return (
        <Scroll bounces={false}>
            {items.map(item => (
                <CardDownloading key={item.id} item={item} />
            ))}
        </Scroll>
    );
});

Downloading.displayName = 'Downloading';
