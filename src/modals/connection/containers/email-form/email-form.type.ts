export interface IEmailFromProps {
    onSelected: ({ email }: { email: string }) => void;
}

export interface IEmailFrom {
    email: string;
    password: string;
}
