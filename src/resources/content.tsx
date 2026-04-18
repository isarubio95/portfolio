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
  title: <>Suscríbete a la newsletter de {person.firstName}</>,
  description: <>Cada semana, una dosis de programación, ideas y tecnología directamente en tu bandeja de entrada.</>,
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
  label: "Inicio",
  title: `Portfolio de ${person.name}`,
  description: `Portfolio de ${person.name}, ${person.role}. Diseño y desarrollo de aplicaciones web modernas, rápidas y pensadas para las personas.`,
  headline: <>Convierto ideas en productos digitales que funcionan</>,
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
      Soy Isaías Rubio, desarrollador web enamorado del código limpio y las soluciones que se sienten <br /> fluidas. Ahora mismo construyo producto en <Text as="span" size="xl" weight="strong">PANOimagen</Text>, y en mis ratos libres doy forma a mis propias ideas.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mí",
  title: `Sobre mí – ${person.name}`,
  description: `Conoce a ${person.name}, ${person.role}. Mi recorrido, experiencia y la manera en la que entiendo el desarrollo web.`,
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
        Soy Isaías Rubio, un desarrollador web de Logroño con una obsesión: transformar problemas enredados en soluciones limpias y fáciles de mantener. 
        Me muevo entre la lógica del código y el detalle de la interfaz, buscando siempre que mis aplicaciones no solo funcionen perfectamente, sino 
        que se sientan naturales al usarlas.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "PANOimagen",
        timeframe: "2025 - Actualidad",
        role: "Programador Web & Data Engineer",
        achievements: [
          "Diseñé y construí un data lake para el tratamiento de grandes volúmenes de datos con tecnologías como Spark y Dagster, mejorando la eficiencia del procesamiento y análisis en un 30%.",
          "Introduje herramientas de inteligencia artificial en el flujo de desarrollo del equipo, reduciendo a la mitad los tiempos de iteración y acelerando la entrega de nuevas funcionalidades.",
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
        name: "Universidad de La Rioja",
        description: <>Microcredencial en Data Science con Python</>,
      },
      {
        name: "Universidad de Cambridge",
        description: <>Certificación B2 First en inglés</>,
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
          <>Traduzco diseños a código con fidelidad milimétrica, extrayendo recursos y convirtiendo sistemas de diseño en componentes reutilizables y consistentes.</>
        ),
        tags: [],
        images: [
          {
            src: "/images/logos/figma.png",
            alt: "Logo de Figma",
            width: 6,
            height: 6,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Construyo aplicaciones web rápidas y escalables aprovechando <strong>SSR</strong> y <strong>SSG</strong> para conseguir cargas instantáneas,
            una gran experiencia de usuario y un SEO impecable desde el primer despliegue.
          </>
        ),
        tags: [],
        images: [
          {
            src: "/images/logos/nextjs-black.png",
            srcDark: "/images/logos/nextjs-white.png",
            alt: "Logo de Next.js",
            width: 6,
            height: 6,
          },
        ],
      },
      {
        title: "Django & Python Backend",
        description: (
          <>
            Desarrollo backends sólidos y APIs escalables con <strong>Django Rest Framework</strong>, cuidando cada consulta al ORM
            y blindando la seguridad de los datos sin renunciar al rendimiento.
          </>
        ),
        tags: [],
        images: [
          {
            src: "/images/logos/django2.png",
            alt: "Logo de Django",
            width: 6,
            height: 6,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notas y reflexiones sobre desarrollo web",
  description: `Lo último que está explorando, aprendiendo y construyendo ${person.name}.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/proyectos",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Una selección de los proyectos de diseño y desarrollo en los que ${person.name} ha dejado huella.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/galeria",
  label: "Galería",
  title: `Galería fotográfica – ${person.name}`,
  description: `Una colección visual de momentos capturados por ${person.name}.`,
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
