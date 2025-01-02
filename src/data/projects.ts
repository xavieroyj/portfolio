export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        title: "LabEquip Mobile Application",
        imageUrl: "project-images/labequip.jpg",
        description: "Education application that identifies lab equipment and displays related information so that students can utilize lab equipment safely and correctly.",
        technologies: ["Java", "Android Studio", "TensorFlow"],
        featured: true
    },
    {
        title: "ShiftBus",
        imageUrl: "project-images/shiftbus.png",
        liveUrl: "https://shiftbus.com/",
        description: "A bus chartering application that allows users to book buses for their trips.",
        technologies: ["Next.js", "Prisma", "TailwindCSS", "PostgreSQL", "Stripe"],
        featured: true
    },
    {
        title: "2048",
        imageUrl: "project-images/2048-clone.png",
        description: "A simple 2048 clonegame built with vanilla Javascript and CSS. Fully responsive and mobile friendly.",
        githubUrl: "https://github.com/xavieroyj/2048-clone",
        liveUrl: "https://xavieroyj.github.io/2048-clone/",
        technologies: ["HTML", "CSS", "Javascript"],
        featured: false
    },
    {
        title: "FlashLearn",
        imageUrl: "project-images/flashlearn.png",
        description: "A flashcard application that allows users to upload their PDF files and generate flashcards from them.",
        technologies: ["Next.js", "Prisma", "Gemini AI", "PostgreSQL"],
        githubUrl: "https://github.com/xavieroyj/flashlearn",
        liveUrl: "https://flashlearn-nine.vercel.app/",
        featured: true
    },
    {
        title: "Personal Portfolio",
        imageUrl: "project-images/portfolio.png",
        description: "A minimal and clean portfolio website built with Astro and Tailwind CSS. Features a blog, dark mode, and responsive design.",
        technologies: ["Astro", "React", "Tailwind CSS", "TypeScript"],
        githubUrl: "https://github.com/xavieroyj/portfolio",
        liveUrl: "https://xavieroyj.dev",
        featured: false
    }
];