import React from "react";
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
    firstName: "Pedro",
    lastName: "Zanatta",
    name: "Pedro Henrique Zanatta",
    role: "Desenvolvedor Backend & FiveM",
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
        link: "mailto:pedrohztt30@gmail.com",
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
    title: "Pedro Henrique Zanatta — Desenvolvedor",
    description: "Desenvolvedor Backend especializado em sistemas robustos e desenvolvimento FiveM.",
    headline: <>Backend Developer • FiveM Creator</>,
    featured: {
        display: true,
        title: "Projetos em Destaque",
        href: "/work",
    },
    subline: (
        <>
            Desenvolvedor Backend e criador de cidades para FiveM. 
            Transformando ideias em sistemas eficientes e bem arquitetados.
        </>
    ),
};

const about: About = {
    path: "/about",
    label: "Sobre",
    title: "Sobre Mim",
    description: "Conheça Pedro Henrique Zanatta",
    tableOfContent: { display: true, subItems: false },
    avatar: { display: true },
    calendar: { display: false },

    intro: {
        display: true,
        title: "Introdução",
        description: (
            <>
                <Text as="p" variant="body-default-m" marginBottom="m">
                    Sou estudante do 2º ano do Técnico em Informática no CEDUP Abílio Paulo (Criciúma/SC). 
                    Apaixonado por desenvolvimento Backend e criação de sistemas completos.
                </Text>
                <Text as="p" variant="body-default-m">
                    Tenho mais de 2 anos de experiência desenvolvendo soluções personalizadas, 
                    APIs robustas e cidades para servidores FiveM.
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
                role: "Desenvolvedor Backend e FiveM",
                achievements: [
                    "Mais de 2 anos criando soluções personalizadas e arquiteturas de sistemas.",
                    "Desenvolvimento de sistemas backend escaláveis e de alta performance.",
                    "Criação de cidades completas e sistemas complexos para FiveM."
                ],
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
                description: "Técnico em Informática — Criciúma, Santa Catarina",
            },
        ],
    },

    technical: {
        display: true,
        title: "Tecnologias",
        skills: [
            {
                title: "Backend",
                description: "Desenvolvimento de APIs e sistemas robustos.",
                tags: [
                    { name: "Java" },
                    { name: "TypeScript" },
                    { name: "PHP" },
                    { name: "C#" },
                ],
                images: [],
            },
            {
                title: "FiveM Development",
                description: "Criação de cidades, sistemas e scripts customizados.",
                tags: [
                    { name: "Lua" },
                    { name: "JavaScript" },
                    { name: "MySQL" },
                ],
                images: [],
            },
            {
                title: "Ferramentas",
                description: "Banco de dados, versionamento e outras ferramentas.",
                tags: [
                    { name: "Git" },
                    { name: "GitHub" },
                    { name: "HeidiSQL" },
                ],
                images: [],
            },
        ],
    },
};

const work: Work = {
    path: "/work",
    label: "Projetos",
    title: "Meus Projetos",
    description: "Principais projetos desenvolvidos em Backend e FiveM.",
};

const blog: Blog = {
    path: "/blog",
    label: "Blog",
    title: "Blog",
    description: "Artigos e aprendizados",
};

const gallery: Gallery = {
    path: "/gallery",
    label: "Galeria",
    title: "Galeria",
    description: "Alguns projetos visuais",
    images: [],
};

const newsletter: Newsletter = {
    display: true,
    title: "Vamos trabalhar juntos?",
    description: "Estou aberto a novos projetos, freelas e colaborações.",
};

export { person, social, newsletter, home, about, blog, work, gallery };
