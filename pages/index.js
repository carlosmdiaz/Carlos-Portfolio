import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Head from "next/head";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { getAllProjects } from "@/helpers/projects-helpers";

export default function Home(props) {
  const { projects } = props;
  console.log(projects);
  return (
    <main>
      <Head>
        <title>Carlos | Full Stack Developer</title>
        <meta name="description" content="Portfolio Page" />
        <link rel="icon" href="/navLogo.png" />
      </Head>
      <div className="">
        <Main />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Contact />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: {
      projects: projects,
    },
    revalidate: 2000,
  };
}
