import { SiDocker, SiHiveBlockchain, SiAmazonaws } from "react-icons/si";

import { DiNodejsSmall } from "react-icons/di";

export const Skills = [
  {
    slug: "nodejs",
    Component: DiNodejsSmall,
    title: "Backend",
    Description: () => <>Currently working with NodeJS/NestJS, MySQL, PostgreSQL for API development.</>,
  },
  {
    slug: "blockchain",
    Component: SiHiveBlockchain,
    title: "Blockchain",
    Description: () => <>I have experience working with Smart Contract of Etherium, Solana. Currently, I'm crawling data from Blockchain Networks by Subgraph,...</>,
  },
  {
    slug: "devops",
    Component: SiDocker,
    title: "DevOps",
    Description: () => <>I can use Docker, Github Action and Gitlab CI to setup environment, build & deploy project.</>,
  },
  {
    slug: "others",
    Component: SiAmazonaws,
    title: "Others",
    Description: () => <>I have experience working with AWS, Socket, Firebase, Stripe,... </>,
  },
];
