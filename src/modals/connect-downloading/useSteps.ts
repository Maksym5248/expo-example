import { useCallback, useEffect, useState } from 'react';

import { type IItem, itemsDownloading } from '~/data';
import { delay } from '~/utils';

export const useSteps = (onFinished: () => void) => {
    const [steps, setSteps] = useState<IItem[]>([...itemsDownloading]);

    const getItemTime = useCallback((id: string) => {
        return steps.find(step => step.id === id)?.time || 2000;
    }, []);

    const getSubItemTime = useCallback((id: string, subItemId: string) => {
        const item = steps.find(step => step.id === id);
        return item?.items?.find(subItem => subItem.id === subItemId)?.time || 2000;
    }, []);

    const update = useCallback((id: string, params: { status?: 'loading' | 'success'; visible?: boolean; visibleResponse?: boolean }) => {
        setSteps(prevSteps => {
            return prevSteps.map(step => {
                if (step.id === id) {
                    return { ...step, ...params };
                }
                return step;
            });
        });
    }, []);

    const updateSub = useCallback((id: string, subId: string, params: { status?: 'loading' | 'success' }) => {
        setSteps(prevSteps => {
            return prevSteps.map(step => {
                if (step.id === id) {
                    return {
                        ...step,
                        items: step.items?.map(subItem => ({
                            ...subItem,
                            ...(subItem.id === subId ? params : {}),
                        })),
                    };
                }
                return step;
            });
        });
    }, []);

    const run = useCallback(async () => {
        update('slates', { status: 'loading' });
        await delay(getItemTime('slates'));

        update('slates', { status: 'success', visibleResponse: true });
        update('drafts', { visible: false });
        update('calculating', { visible: false });
        update('leagues', { status: 'loading', visible: true });

        updateSub('leagues', 'league-delta', { status: 'loading' });
        await delay(getSubItemTime('leagues', 'league-delta') + 300);
        updateSub('leagues', 'league-delta', { status: 'success' });

        updateSub('leagues', 'league-alpha', { status: 'loading' });
        await delay(getSubItemTime('leagues', 'league-alpha') + 300);
        updateSub('leagues', 'league-alpha', { status: 'success' });

        updateSub('leagues', 'league-gamma', { status: 'loading' });
        await delay(getSubItemTime('leagues', 'league-gamma') + 300);
        updateSub('leagues', 'league-gamma', { status: 'success' });

        updateSub('leagues', 'league-beta', { status: 'loading' });
        await delay(getSubItemTime('leagues', 'league-beta') + 300);
        updateSub('leagues', 'league-beta', { status: 'success' });

        update('leagues', { status: 'success', visibleResponse: true });
        update('drafts', { status: 'loading', visible: true });
        update('calculating', { visible: true });

        await delay(getItemTime('drafts'));

        update('drafts', { status: 'success' });
        update('calculating', { status: 'loading' });

        await delay(getItemTime('loading'));

        update('calculating', { status: 'success' });

        await delay(1000);
        onFinished();
    }, []);

    useEffect(() => {
        run();
    }, []);

    return steps;
};
