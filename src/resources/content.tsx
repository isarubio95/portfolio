import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Isaías",
  lastName: "Rubio",
  name: "Isaías Rubio",
  role: "Programador Web Full Stack",
  avatar: "/images/avatar.webp",
  email: "isarubio95@gmail.com",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Inglés"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Suscríbete a mi {person.firstName} Newsletter</>,
  description: <>Mi newsletter semanal sobre programación y tecnología.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/isarubio95",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/isa%C3%ADas-rubio-hern%C3%A1ndez-539085139/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/isarubio95/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@isarubio95",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transformando ideas en aplicaciones robustas</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    Me llamo Isaías Rubio, soy un programador web apasionado por la arquitectura limpia y la eficiencia. Actualmente desarrollo soluciones <br /> digitales en <Text as="span" size="xl" weight="strong">PANOimagen</Text>, y dedico mi tiempo personal a dar vida a proyectos propios.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mí",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/isaias-rubio-duupcu/15min?user=isaias-rubio-duupcu&overlayCalendar=true",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Soy Isaías Rubio, desarrollador web nacido en Logroño con una fuerte pasión por transformar problemas complejos en soluciones técnicas 
        sencillas y eficientes. Mi trabajo se centra en el desarrollo de aplicaciones robustas, experiencias interactivas y la integración fluida entre la 
        lógica de programación y la experiencia de usuario.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "PANOimagen",
        timeframe: "2025 - Present",
        role: "Programador Web & Data Engineer",
        achievements: [
          "Reconstruí un sistema de bigdata utilizando tecnologías modernas como Spark o Dagster, mejorando la eficiencia del procesamiento de datos en un 30%.",
          "Impulsé la implementación de herramientas de inteligencia artificial en los procesos de desarrollo, logrando una reducción del 50% en los tiempos de iteración.",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudios",
    institutions: [
      {
        name: "Centro Integral de Formación a Distancia de La Rioja",
        description: <>Grado Superior en Desarrollo de Aplicaciones Web</>,
      },
      {
        name: "Univerdad de La Rioja",
        description: <>Microcredencial Data Science con Python</>,
      },
      {
        name: "Univerdad de Cambridge",
        description: <>B2 First</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Figma",
        description: (
          <>Dominio avanzado para la extracción de recursos y traslación fiel de sistemas de diseño a componentes de software.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Desarrollo de aplicaciones web de alto rendimiento mediante Server-Side Rendering (SSR) y 
            Static Site Generation (SSG) para optimizar la carga y el SEO.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribiendo sobre desarrollo web...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/galeria",
  label: "Galería",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
