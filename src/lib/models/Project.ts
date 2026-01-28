export interface IProject {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    link?: string;
    github?: string;
}

export class Project implements IProject {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    link?: string;
    github?: string;

    constructor(data: IProject) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.technologies = data.technologies;
        this.imageUrl = data.imageUrl;
        this.link = data.link;
        this.github = data.github;
    }

    public getFormattedTech(): string {
        return this.technologies.join(' • ');
    }
}
