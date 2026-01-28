import { LucideIcon } from 'lucide-react';

export interface IService {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export class Service implements IService {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;

    constructor(data: IService) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.icon = data.icon;
    }
}
