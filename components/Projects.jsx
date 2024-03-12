import React from "react";
import ProjectItem from "./ProjectItem";

function Projects(props) {
  const { projects } = props;

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
                key={item.id}
                title={item.title}
                backgroundImg={item.img}
                projectUrl={item.projectUrl}
                tech={item.tech}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
