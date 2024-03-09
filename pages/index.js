import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Head from "next/head";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Carlos | Full Stack Developer</title>
        <meta name="description" content="Portfolio Page" />
        <link rel="icon" href="/navLogo.png" />
      </Head>
      <div className="">
        <Navbar />
        <Main />
        <About />
        <Skills />
      </div>
    </main>
  );
}
