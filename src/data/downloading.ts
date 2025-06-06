export interface ISubItem {
    id: string;
    title: string;
    progress?: number;
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
        response: '4 leagues found',
        visible: true,
    },
    {
        id: 'leagues',
        title: 'Loading Leagues',
        status: 'loading',
        visible: true,
        response: [
            {
                id: 'league-delta',
                title: 'League Delta',
                progress: 1,
            },
            {
                id: 'league-alpha',
                title: 'League Alpha',
                progress: 0.5,
            },
            {
                id: 'league-gamma',
                title: 'League Gamma',
                progress: 0,
            },
            {
                id: 'league-beta',
                title: 'League Beta',
                progress: 0,
            },
        ],
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
