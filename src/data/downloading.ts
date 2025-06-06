export interface ISubItem {
    id: string;
    title: string;
    status?: 'idle' | 'loading' | 'success';
    time: number;
}

export interface IItem {
    id: string;
    title: string;
    visible: boolean;
    visibleResponse?: boolean;
    status?: 'idle' | 'loading' | 'success';
    time: number;
    response?: string;
    items?: ISubItem[];
}

export const itemsDownloading: IItem[] = [
    {
        id: 'connecting',
        title: 'Connecting to platform',
        status: 'success',
        visible: true,
        time: 2000,
    },
    {
        id: 'slates',
        title: 'Finding Active Slates',
        status: 'idle',
        response: '4 leagues found',
        visible: true,
        visibleResponse: false,
        time: 2000,
    },
    {
        id: 'leagues',
        title: 'Loading Leagues',
        status: 'idle',
        response: '4 leagues found',
        visible: false,
        visibleResponse: false,
        time: 2000,
        items: [
            {
                id: 'league-delta',
                title: 'League Delta',
                status: 'idle',
                time: 5000,
            },
            {
                id: 'league-alpha',
                title: 'League Alpha',
                status: 'idle',
                time: 5000,
            },
            {
                id: 'league-gamma',
                title: 'League Gamma',
                status: 'idle',
                time: 5000,
            },
            {
                id: 'league-beta',
                title: 'League Beta',
                status: 'idle',
                time: 5000,
            },
        ],
    },
    {
        id: 'drafts',
        title: 'Downloading Drafts',
        status: 'idle',
        visible: true,
        time: 2000,
    },
    {
        id: 'calculating',
        title: 'Calculating Exposures / Data',
        status: 'idle',
        visible: true,
        time: 2000,
    },
];
