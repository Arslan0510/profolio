import { kebabCase } from "../../utils";

const projects = [
    {
        id: 0,
        title: "Trackboost",
        desc: "Trackboost is a Shopify plugin which customizable orders tracking page with cross- sell suggestions.",
        img: "/images/projects/trackboost.jpg",
        link: "https://learn.theyei.org/",
        tags: ["ReactJS", "Redux", "Bootstrap", "SCSS", "Ruby and Rails"],
    },
    {
        id: 1,
        title: "ClassEquity - Teacher",
        desc: "Class equity teacher is a platform where teacher can give virtual money online their students by assigning classroom jobs. Also, teacher can give bonuses, fines, expenses and rent/utilities to their students.",
        img: "/images/projects/class-equity-teacher.jpg",
        link: "https://buildfaster.co/",
        tags: ["NextJS", "NodeJS", "Antd", "Bootstrap", "Firebase", "MongoDB"],
    },
    {
        id: 2,
        title: "Apphippo",
        desc: "Apphippo is a finance management system which can connect with the quickbooks companies. In this app user can easily see and handle journal entries and manage employee journal entries all together.",
        img: "/images/projects/apphippo.jpg",
        link: "https://staging.robodebit.com/",
        tags: ["NextJS", "NodeJS", "Antd", "Bootstrap", "Firebase", "MongoDB"],
    },
    {
        id: 3,
        title: "ClassEquity - Student",
        desc: "Class equity student is a platform where students can earn virtual money online from teachers by doing classroom jobs and spend that money to buy things from store (buy pencils, buy a lunch with teacher etc.).",
        img: "/images/projects/class-equity-student.jpg",
        link: "https://beta-teacher.classequity.com/",
        tags: ["NextJS", "NodeJS", "Antd", "Bootstrap", "Firebase", "MongoDB"],
    },
];

export const allTags = []

projects.forEach((project) => {
    project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
    kebabCase(tag)
))

export default projects