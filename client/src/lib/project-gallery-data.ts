
export type ProjectLevel = {
  level: number;
  name: string;
  path: string;
  projects: {
    title: string;
    imageUrl: string;
    videoUrl?: string;
    objectFit?: 'cover' | 'contain';
    objectPosition?: string;
  }[];
};

export const projectGalleryData: ProjectLevel[] = [
  {
    level: 1,
    name: 'Funtronix',
    path: '/level-1-projects',
    projects: [
      { title: 'Project 1.1', imageUrl: '/Level 1.JPG', objectPosition: 'top' },
      { title: 'Project 1.2', imageUrl: '/Level 1.1.JPG' },
      { title: 'Project 1.3', imageUrl: '/Level 1.2.JPG' },
    ],
  },
  {
    level: 2,
    name: 'Robotrix',
    path: '/level-2-projects',
    projects: [
      { title: 'Project 2.1', imageUrl: '/Level 2.jpeg' },
      { title: 'Project 2.2', imageUrl: '/Level 2.1.JPG' },
      { title: 'Project 2.3', imageUrl: '/Level 2.2.JPG' },
    ],
  },
  {
    level: 3,
    name: 'Solarix',
    path: '/level-3-projects',
    projects: [
      { title: 'Project 3.1', imageUrl: '/Level 3.JPG' },
      { title: 'Project 3.2', imageUrl: '/Level 3.1.JPG' },
    ],
  },
  {
    level: 4,
    name: 'RoboVi',
    path: '/level-4-projects',
    projects: [
      { title: 'Project 4.1', imageUrl: '/Level 4.JPG' },
      { title: 'Project 4.2', imageUrl: '/Level 4.1.JPG' },
      { title: 'Project 4.2', imageUrl: '/Level 4.2.jpeg' },
    ],
  },
  {
    level: 5,
    name: 'C-Robo',
    path: '/level-5-projects',
    projects: [
      { title: 'Project 5.1', imageUrl: '/Level 5.JPG' },
      { title: 'Project 5.2', imageUrl: '/Level 5.1.JPG' },
    ],
  },
  {
    level: 6,
    name: 'Embetrix',
    path: '/level-6-projects',
    projects: [
      { title: 'Project 6.1', imageUrl: '/Level 6.JPG' },
    ],
  },
  {
    level: 7,
    name: 'WalkO’Botz',
    path: '/level-7-projects',
    projects: [
      { title: 'Project 7.1', imageUrl: '/Level 7.JPG' },
    ],
  },
];
