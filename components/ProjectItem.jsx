import React from "react";
import Link from "next/link";
import Image from "next/image";
import { strHandler } from "@/helpers/projects-helpers";

function ProjectItem(props) {
  const { title, backgroundImg, projectUrl, tech, id } = props;
  const techArr = strHandler(tech);
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#e36414] to-[#ffd800]">
      <Image
        src={backgroundImg}
        alt="/"
        className="rounded-xl group-hover:opacity-10 ease-in"
        width={700}
        height={600}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{`${techArr[0]} / ${techArr[1]} / ${techArr[2]}`}</p>
        <Link href={`/projects/${id}`}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
