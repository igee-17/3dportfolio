import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  carrent,
  jobit,
  tripguide,
  parach,
  trium,
  betterdrive,
  pac,
  next,
  sass,
  mysql,
  betterdriveBg,
  pregnancare,
  pacBg,
  jobtracker,
  comfy
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud-Based Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Scss",
    icon: sass,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Parach Computers ICT HUB",
    icon: parach,
    iconBg: "#ffffff",
    date: "December 2021 – March 2022",
    points: [
      "Revamped the company's online presence by implementing a cutting-edge WordPress design.",
      "Developed a deep understanding of complex React.js use cases and leveraged this knowledge to enhance the technical expertise of team members, contributing to the organization's overall success.",
      "Demonstrated exceptional teaching skills by serving as a tutor for aspiring programmers, offering comprehensive instruction in HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Trium Digital Limited",
    icon: trium,
    iconBg: "#343a40",
    date: "September 2022 – March 2023",
    points: [
      "Utilized Next.js with Typescript as well as GraphQL for querying a MongoDb database, optimizing returning user experience by developing an automated form-filling process.",
      "Worked closely with cross-functional teams to implement price formatting improvements, resulting in a more efficient and effective pricing system.",
      "Enhanced user data collection capabilities by identifying key areas for additional input fields and successfully implemented them into the existing data collection process.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "BetterDrive",
    icon: betterdrive,
    iconBg: "#fff",
    date: "Mar. 2023 – Jan. 2024",
    points: [
      "Contributed to a ride-hailing and logistics service mobile application utilizing Node.Js for backend and MySQL for database.",
      "Utilized Google Cloud Services and Google Location API to implement the airing of user and driver based on proximity.",
      "Set up the application’s backend and database on AWS.",
      "Integrated a CI-CD pipeline, automating the software build and deployment process.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Pan-African Capital Holdings",
    icon: pac,
    iconBg: "#fff",
    date: "December 2022 – Present",
    points: [
      "Built a SOS web application for pregnant women, utilizing React.js, Typescript, Firebase, Tailwind CSS, NodeJs, MySql, Socket.io among other technologies.",
      "Utilized React.js, SCSS, Tailwind CSS among other technologies to rebuild and maintain the company's website.",
      "Developed an admin dashboard to manage blog posts, Newsletter subscribers, as well as sending of bulk mails, utilizing Nodemailer, Node.Js and Firebase.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Igbagbo proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Igbagbo does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Igbagbo optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BetterDrive",
    description:
      "A ride-hailing and logistics service mobile application that pairs users and drivers based on proximity.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: betterdriveBg,
    source_code_link: "https://betterdrive.org",
  },
  {
    name: "PregnanCare",
    description:
      "An SOS web application for pregnant women in distress that allows pregnant women to request a ride to the nearest healthcare facility.",
    tags: [
      {
        name: "google cloud",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pregnancare,
    source_code_link: "https://pregnancare.com",
  },
  {
    name: "Admin Dashboard",
    description:
      "A multifunctional admin dashboard that features management of blog posts, newsletter subscribers, and sending of bulk mails",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodemailer",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: pacBg,
    source_code_link: "https://panafricancapitalholdings.com",
  },
  {
    name: "Job Tracker",
    description:
      "A web application that can be used to track the status of job applications",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobtracker,
    source_code_link: "https://jobtrackerr.netlify.app",
  },
  {
    name: "E-Commerce Store",
    description:
      "A furniture store E-commerce web application that features authentication, user cart, and checkout using stripe",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: comfy,
    source_code_link: "https://igee-react-store.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
