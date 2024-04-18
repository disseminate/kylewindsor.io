export enum ESkillLocus {
  FrontEnd,
  BackEnd,
  Games,
}

interface ISkill {
  name: string;
  subskills?: string[];
  locus: ESkillLocus;
}

export const SKILLS: ISkill[] = [
  {
    name: 'TypeScript',
    locus: ESkillLocus.FrontEnd,
    subskills: ['JavaScript'],
  },
  {
    name: 'React',
    locus: ESkillLocus.FrontEnd,
    subskills: ['JSX', 'TSX'],
  },
  {
    name: 'GraphQL',
    locus: ESkillLocus.FrontEnd,
  },
  {
    name: 'HTML5',
    locus: ESkillLocus.FrontEnd,
  },
  {
    name: 'SASS',
    locus: ESkillLocus.FrontEnd,
    subskills: ['CSS'],
  },
  {
    name: 'Websockets, WebRTC, MediaStreams',
    locus: ESkillLocus.FrontEnd,
  },
  {
    name: 'Electron',
    locus: ESkillLocus.FrontEnd,
  },
  {
    name: 'Webpack, Parcel, Vite',
    locus: ESkillLocus.FrontEnd,
  },
  {
    name: 'React Native',
    locus: ESkillLocus.FrontEnd,
  },
  {
    name: 'Flutter',
    locus: ESkillLocus.FrontEnd,
  },
  {
    name: 'Angular',
    locus: ESkillLocus.FrontEnd,
  },
  {
    name: 'Node',
    locus: ESkillLocus.BackEnd,
  },
  {
    name: 'Golang',
    locus: ESkillLocus.BackEnd,
  },
  {
    name: 'Databases',
    locus: ESkillLocus.BackEnd,
    subskills: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
  },
  {
    name: 'Linux',
    locus: ESkillLocus.BackEnd,
    subskills: ['Arch', 'Debian (Ubuntu, Amazon)'],
  },
  {
    name: 'Websockets, WebRTC',
    locus: ESkillLocus.BackEnd,
  },
  {
    name: 'GraphQL',
    locus: ESkillLocus.BackEnd,
  },
  {
    name: 'DevOps',
    locus: ESkillLocus.BackEnd,
    subskills: ['AWS', 'GCP', 'DigitalOcean'],
  },
  {
    name: 'Firebase',
    locus: ESkillLocus.BackEnd,
  },
  {
    name: 'C++11 through C++22',
    locus: ESkillLocus.Games,
  },
  {
    name: 'Unreal Engine',
    locus: ESkillLocus.Games,
  },
  {
    name: 'Source Engine',
    locus: ESkillLocus.Games,
  },
  {
    name: 'Lua',
    locus: ESkillLocus.Games,
  },
  {
    name: 'C',
    locus: ESkillLocus.Games,
  },
  {
    name: 'Visual Studio, IntelliJ Rider',
    locus: ESkillLocus.Games,
  },
];
