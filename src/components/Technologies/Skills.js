import { SiDocker, SiFirebase, SiGit, SiMysql, SiPostgresql } from "react-icons/si";

import { DiNodejsSmall } from "react-icons/di";

export const Skills = [
  {
    slug: "nodejs",
    Component: DiNodejsSmall,
    title: "NodeJS",
    Description: () => <>Currently working with NodeJS and NestJS for API development.</>,
  },
  {
    slug: "docker",
    Component: SiDocker,
    title: "Docker",
    Description: () => <>I can setup dev environment, build & deploy project on production.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I often use. I use GitHub, GitLab for development everyday.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "mysql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Currently I often use MySQL during development. </>,
  },
  {
    slug: "postgresql",
    Component: SiPostgresql,
    title: "PostgreSQL",
    Description: () => <>I can use PostgreSQL during development.</>,
  },
];
