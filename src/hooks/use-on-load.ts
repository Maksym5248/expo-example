import { useEffect } from 'react';

export const useOnLoad = (item: { id: string; time: string }, onLoad: (id: string) => void) => {
    useEffect(() => {
        setTimeout(
            () => {
                onLoad(item.id);
            },
            parseInt(item.time, 10),
        );
    }, []);
};
