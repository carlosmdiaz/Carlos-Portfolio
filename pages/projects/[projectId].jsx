import {
  getAllProjects,
  getProjectById,
  getImage,
} from "@/helpers/projects-helpers";
import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { strHandler } from "@/helpers/projects-helpers";
import Link from "next/link";

function ProjectItem(props) {
  const project = props.selectedProject;
  const tech = strHandler(project.tech);

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={getImage(project.id)}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          alt={project.title}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 ">{project.title}</h2>
          <h3>{`${tech[0]} / ${tech[1]} / ${tech[2]}`}</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{project.description}</p>
          <Link href={project.projectUrl} target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href={project.githubURL} target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {tech.map((item) => {
                return (
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const projectId = context.params.projectId;
  const project = await getProjectById(projectId);

  return {
    props: {
      selectedProject: project,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const projects = await getAllProjects();

  const paths = projects.map((project) => ({
    params: { projectId: project.id },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default ProjectItem;
