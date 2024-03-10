import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Property Finder",
    img: propertyImg,
    projectUrl: "/property",
    tech: "React JS",
  },
  {
    title: "Crypto App",
    img: cryptoImg,
    projectUrl: "/crypto",
    tech: "React JS",
  },
  {
    title: "Netflix App",
    img: netflixImg,
    projectUrl: "/netflix",
    tech: "React JS",
  },
  {
    title: "Twitch App",
    img: twitchImg,
    projectUrl: "/twitch",
    tech: "Next JS",
  },
];

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#e36414]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item) => {
            return (
              <ProjectItem
                title={item.title}
                backgroundImg={item.img}
                projectUrl={item.projectUrl}
                tech={item.tech}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
