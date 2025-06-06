export interface ISubItem {
    id: string;
    title: string;
    status?: 'idle' | 'loading' | 'success';
}

export interface IItem {
    id: string;
    title: string;
    status?: 'idle' | 'loading' | 'success';
    response?: string | ISubItem[];
}

export interface ICardDownloadingProps {
    item: IItem;
}
