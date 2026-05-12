import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
    firstName: "Pedro",
    lastName: "Zanatta",
    name: `Pedro Henrique Zanatta`,
    role: "Desenvolvedor Backend & iOS",
    avatar: "/images/avatar.jpg",
    email: "pedrohztt30@gmail.com",
    location: "America/Sao_Paulo",
    languages: ["Português", "Inglês"],
};

const social: Social = [
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/ZanattaDev",
        essential: true,
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:pedrohztt30@gmail.com`,
        essential: true,
    },
    {
        name: "WhatsApp",
        icon: "message",
        link: "https://wa.me/554891982782",
        essential: true,
    },
];

const home: Home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: `${person.name} — Dev`,
    description: `Desenvolvedor Backend, iOS e criador de cidades para FiveM.`,
    headline: <>Backend • iOS • FiveM Development</>,
    featured: {
        display: true,
        title: (
            <Row gap="12" vertical="center">
                <Text weight="strong">Projetos em Destaque</Text>
                <Line background="brand-alpha-strong" vert height="20" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                    Backend · iOS · FiveM
                </Text>
            </Row>
        ),
        href: "/work",
    },
    subline: (
        <>
            Desenvolvedor Backend, iOS e criador de cidades para <Text as="span" variant="body-default-xl" weight="strong">FiveM</Text>. 
            Transformando ideias em sistemas bem arquitetados e código eficiente.
        </>
    ),
};

const about: About = {
    path: "/about",
    label: "Sobre",
    title: `Sobre – ${person.name}`,
    description: `Quem sou eu? Conheça Pedro Henrique Zanatta`,
    tableOfContent: { display: true, subItems: false },
    avatar: { display: true },
    calendar: { 
        display: false, 
        link: "https://cal.com" 
    },
    intro: {
        display: true,
        title: "Introdução",
        description: (
            <>
                <Text as="p" variant="body-default-m" marginBottom="m">
                    Estou no 2º ano do Técnico em Informática no CEDUP Abílio Paulo, em Criciúma/SC. 
                    Apaixonado por tecnologia e movido pela curiosidade de entender sistemas a fundo.
                </Text>
                <Text as="p" variant="body-default-m" marginBottom="m">
                    Desenvolvo sistemas Backend robustos com Java, PHP, TypeScript e C#, aplicativos iOS nativos 
                    com Swift e SwiftUI, e cidades completas para servidores FiveM.
                </Text>
                <Text as="p" variant="body-default-m">
                    Sempre buscando entregar código limpo, bem arquitetado e que realmente resolva o problema.
                </Text>
            </>
        ),
    },
    work: { 
        display: true, 
        title: "Experiência", 
        experiences: [
            {
                company: "Desenvolvedor Independente",
                timeframe: "2022 — Presente",
                role: "Backend & Game Dev",
                description: <>Mais de 2 anos desenvolvendo soluções personalizadas e arquitetura de sistemas.</>,
                images: [], 
            }
        ] 
    },
    studies: {
        display: true,
        title: "Formação",
        institutions: [
            {
                name: "CEDUP Abílio Paulo",
                description: <>Técnico em Informática — Criciúma, Santa Catarina, Brasil</>,
            },
        ],
    },
    technical: {
        display: true,
        title: "Stack Técnica",
        skills: [
            {
                title: "Backend Development",
                description: <>APIs robustas, lógica de negócios eficiente e sistemas escaláveis.</>,
                tags: [{ name: "Java" }, { name: "PHP" }, { name: "TypeScript" }, { name: "C#" }, { name: "OOP" }],
                images: [],
            },
            {
                title: "Mobile — iOS",
                description: <>Apps nativos para iPhone com SwiftUI seguindo as Human Interface Guidelines da Apple.</>,
                tags: [{ name: "Swift" }, { name: "SwiftUI" }, { name: "Nativo" }],
                images: [],
            },
            {
                title: "FiveM Development",
                description: <>Scripts de gameplay customizados, HUD, sistema de economia e banco de dados.</>,
                tags: [{ name: "Lua" }, { name: "JavaScript" }, { name: "HTML" }, { name: "CSS" }, { name: "SQL" }],
                images: [],
            },
            {
                title: "Ferramentas",
                description: <>Modelagem de dados relacional, autenticação segura e versionamento.</>,
                tags: [{ name: "MySQL" }, { name: "HeidiSQL" }, { name: "Git" }, { name: "GitHub" }],
                images: [],
            },
        ],
    },
};

const work: Work = {
    path: "/work",
    label: "Projetos",
    title: `Projetos – ${person.name}`,
    description: `Principais trabalhos em Backend, iOS e desenvolvimento de cidades FiveM.`,
};

const blog: Blog = {
    path: "/blog",
    label: "Blog",
    title: "Blog & Aprendizados",
    description: "Artigos, tutoriais e experiências em Backend, iOS e FiveM",
};

const gallery: Gallery = {
    path: "/gallery",
    label: "Galeria",
    title: `Galeria – ${person.name}`,
    description: "Portfólio visual de projetos.",
    images: [],
};

const newsletter: Newsletter = {
    display: true,
    title: <>Vamos trabalhar juntos?</>,
    description: <>Aberto a projetos freelance, colaborações e novas oportunidades. Respondo rápido.</>,
};

export { person, social, newsletter, home, about, blog, work, gallery };
