export interface IWorkExperience {
  name: string;
  url: string;
  startYear: number;
  endYear?: number;
  description: string;
  tags: string[];
}

export const WORK_EXPERIENCES: IWorkExperience[] = [
  {
    name: 'Ramjet Studios',
    url: 'https://ramjetstudios.com/',
    startYear: 2022,
    description:
      'Founder & CEO. Designed all code systems for the survival game VEIN; wrote all code; implemented web apps, Discord bots, and tooling.',
    tags: ['C++', 'Unreal Engine', 'Node', 'React', 'PostgreSQL', 'SQLite', 'GraphQL'],
  },
  {
    name: 'Alderon Games',
    url: 'https://alderongames.com/',
    startYear: 2023,
    endYear: 2024,
    description: 'Contract programmer. Implemented and upgraded core gameplay systems for a yet-unannounced game.',
    tags: ['C++', 'Unreal Engine'],
  },
  {
    name: 'Mercury',
    url: 'https://mercury.com/',
    startYear: 2022,
    endYear: 2023,
    description: 'Senior frontend engineer. Worked on various UI elements, form flows, and landing page elements.',
    tags: ['React', 'ThreeJS'],
  },
  {
    name: 'AngelList',
    url: 'https://www.angellist.com/',
    startYear: 2022,
    endYear: 2022,
    description:
      'Senior fullstack engineer. Worked on some legacy code porting; worked on some confidential finance features of the application.',
    tags: ['React', 'Ruby', 'PostgreSQL'],
  },
  {
    name: 'Prepared',
    url: 'https://www.prepared911.com/',
    startYear: 2021,
    endYear: 2022,
    description:
      'Staff fullstack engineer. Wrote multiple mobile apps with Flutter; wrote the WebRTC Node/Go backend system for video streams.',
    tags: ['React Native', 'Flutter', 'Node', 'Go', 'Websockets', 'WebRTC', 'GraphQL'],
  },
  {
    name: 'Crowbar Collective',
    url: 'https://www.crowbarcollective.com/',
    startYear: 2021,
    endYear: 2021,
    description: 'Contract programmer. Implemented gameplay systems for an as-of-yet unannounced game.',
    tags: ['C++', 'Unreal Engine'],
  },
  {
    name: 'QI Games',
    url: 'https://www.qi.games/',
    startYear: 2020,
    endYear: 2021,
    description:
      'Lead programmer. Implemented web app that sold and distributed game keys; worked on multiple core gameplay systems; and mentored junior programmers.',
    tags: ['C++', 'Unreal Engine', 'React', 'Node', 'PostgreSQL', 'MySQL'],
  },
  {
    name: 'Devlift Media',
    url: 'https://devlift.com',
    startYear: 2015,
    endYear: 2020,
    description:
      'Senior fullstack developer. Project lead on tens of different projects spanning a wide variety of technologies. Mentored junior programmers.',
    tags: ['React', 'Angular', 'Ionic', 'React Native', 'Node', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    name: 'ISP Canada',
    url: 'https://isp.ca/',
    startYear: 2013,
    endYear: 2015,
    description:
      'Tools programmer. Modernized UI; implemented tools for staff to interface with stored procedures and other legacy ISP management systems.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
  },
];
