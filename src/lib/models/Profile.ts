export interface IProfile {
    name: string;
    title: string;
    bio: string;
    avatarUrl?: string;
    email: string;
    socials: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    };
}

export class Profile implements IProfile {
    name: string;
    title: string;
    bio: string;
    avatarUrl?: string;
    email: string;
    socials: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    };

    constructor(data: IProfile) {
        this.name = data.name;
        this.title = data.title;
        this.bio = data.bio;
        this.avatarUrl = data.avatarUrl;
        this.email = data.email;
        this.socials = data.socials;
    }

    public getInitials(): string {
        return this.name.split(' ').map(n => n[0]).join('');
    }
}
