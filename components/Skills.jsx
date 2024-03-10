import Image from "next/image";
import React from "react";

const imgArr = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "MongoDB" },
  { name: "AWS" },
  { name: "NextJS" },
  { name: "NodeJS" },
  { name: "Java" },
  { name: "Tailwind" },
  { name: "Firebase" },
  { name: "Github" },
  { name: "Shopify" },
];

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#e36414]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {imgArr.map((item) => {
            return (
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={`/assets/skills/${item.name}.png`}
                      alt={item.name}
                      width="70"
                      height="70"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
