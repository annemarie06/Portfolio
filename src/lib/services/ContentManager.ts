import { Project } from '../models/Project';
import { Service } from '../models/Service';
import { Profile } from '../models/Profile';
import { Code, Palette, Calendar, Briefcase } from 'lucide-react';

export class ContentManager {
    private static instance: ContentManager;
    private profile: Profile;
    private services: Service[];
    private projects: Project[];

    private constructor() {
        this.profile = new Profile({
            name: "Anne Marie Factor",
            title: "IT Major & Multi-disciplinary Professional",
            bio: "I am an IT Major with a diverse skill set ranging from Web Development and Graphic Design to Executive and Virtual Assistance. I bridge the gap between technical expertise and administrative excellence.",
            avatarUrl: "/mypicture.jpg",
            email: "contact@example.com",
            socials: {
                github: "https://github.com",
                linkedin: "https://linkedin.com"
            }
        });

        this.services = [
            new Service({
                id: '1',
                title: 'Web Development',
                description: 'Building modern, responsive websites using Next.js, React, and Tailwind CSS. Specializing in clean code and OOP principles.',
                icon: Code
            }),
            new Service({
                id: '2',
                title: 'Graphic Design',
                description: 'Creating visually stunning designs for branding, social media, and web interfaces. Proficiency in modern design tools.',
                icon: Palette
            }),
            new Service({
                id: '3',
                title: 'Virtual Assistant',
                description: 'Providing reliable remote support for data entry, research, and administrative tasks to help your business run smoothly.',
                icon: Calendar
            }),
            new Service({
                id: '4',
                title: 'Executive Assistant',
                description: 'High-level administrative support, schedule management, and communication handling for busy executives.',
                icon: Briefcase
            })
        ];

        this.projects = [
            new Project({
                id: '1',
                title: 'Personal Portfolio',
                description: 'A professional portfolio website built with Next.js and Tailwind CSS, following OOP principles.',
                technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OOP'],
                imageUrl: '/api/placeholder/400/300', // Placeholder
                github: '#'
            }),
            new Project({
                id: '2',
                title: 'E-Commerce Dashboard',
                description: 'A concept dashboard for managing online stores, featuring data visualization and inventory management.',
                technologies: ['React', 'Chart.js', 'Node.js'],
                imageUrl: '/api/placeholder/400/300',
                github: '#'
            }),
            new Project({
                id: '3',
                title: 'Brand Identity Package',
                description: 'Complete branding package including logo design, color palette, and typography guide.',
                technologies: ['Adobe Illustrator', 'Photoshop', 'Figma'],
                imageUrl: '/api/placeholder/400/300',
                link: '#'
            })
        ];
    }

    public static getInstance(): ContentManager {
        if (!ContentManager.instance) {
            ContentManager.instance = new ContentManager();
        }
        return ContentManager.instance;
    }

    public getProfile(): Profile {
        return this.profile;
    }

    public getServices(): Service[] {
        return this.services;
    }

    public getProjects(): Project[] {
        return this.projects;
    }
}
