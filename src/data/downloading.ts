export interface ISubItem {
    id: string;
    title: string;
    progress?: number;
    time: number;
}

export interface IItem {
    id: string;
    title: string;
    visible: boolean;
    status?: 'idle' | 'loading' | 'success';
    time: number;
    response?: string | ISubItem[];
}

export const itemsDownloading: IItem[] = [
    {
        id: 'connecting',
        title: 'Connecting to platform',
        status: 'success',
        visible: true,
        time: 1000,
    },
    {
        id: 'slates',
        title: 'Finding Active Slates',
        status: 'loading',
        response: '4 leagues found',
        visible: true,
        time: 1000,
    },
    {
        id: 'leagues',
        title: 'Loading Leagues',
        status: 'loading',
        visible: true,
        time: 1000,
        response: [
            {
                id: 'league-delta',
                title: 'League Delta',
                progress: 1,
                time: 5000,
            },
            {
                id: 'league-alpha',
                title: 'League Alpha',
                progress: 0.5,
                time: 5000,
            },
            {
                id: 'league-gamma',
                title: 'League Gamma',
                progress: 0,
                time: 5000,
            },
            {
                id: 'league-beta',
                title: 'League Beta',
                progress: 0,
                time: 5000,
            },
        ],
    },
    {
        id: 'drafts',
        title: 'Downloading Drafts',
        status: 'idle',
        visible: true,
        time: 1000,
    },
    {
        id: 'calculating',
        title: 'Calculating Exposures / Data',
        status: 'idle',
        visible: true,
        time: 1000,
    },
];
