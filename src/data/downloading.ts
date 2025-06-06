export interface ISubItem {
    id: string;
    title: string;
    status?: 'idle' | 'loading' | 'success';
}

export interface IItem {
    id: string;
    title: string;
    visible: boolean;
    status?: 'idle' | 'loading' | 'success';
    response?: string | ISubItem[];
}

export const itemsDownloading: IItem[] = [
    {
        id: 'connecting',
        title: 'Connecting to platform',
        status: 'success',
        visible: true,
    },
    {
        id: 'slates',
        title: 'Finding Active Slates',
        status: 'loading',
        visible: true,
    },
    {
        id: 'leagues',
        title: 'Loading Leagues',
        status: 'idle',
        visible: true,
    },
    {
        id: 'drafts',
        title: 'Downloading Drafts',
        status: 'idle',
        visible: true,
    },
    {
        id: 'calculating',
        title: 'Calculating Exposures / Data',
        status: 'idle',
        visible: true,
    },
];
