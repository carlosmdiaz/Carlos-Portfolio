import React from "react";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#e36414]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your typical developer
          </p>
          <p className="py-2 text-gray-600">
            Over the past five years, I've immersed myself in the dynamic
            landscape of the tech industry, dedicating three years as an IT
            Specialist and two years as a versatile Full Stack/DevOps Engineer.
            My affinity for technology has been innate, and my passion lies in
            seamlessly interacting with computers.
          </p>
          <p className="py-2 text-gray-600">
            My journey began in 2016 when, as a senior in high school, I delved
            into Java programming. This interest deepened during my junior
            college years when I enrolled in a Web Development class, marking
            the inception of my fascination with the field. The turning point
            came when I participated in a three-month Front-end Web Development
            bootcamp, where I honed my skills in JavaScript, HTML, CSS, and
            React.
          </p>
          <p className="py-2 text-gray-600">
            Eager to expand my expertise, I secured a position as a DevOps
            Engineer even before completing my college degree. In this role, I
            leveraged my proficiency in JavaScript, TypeScript, HTML, CSS,
            ReactJS, NodeJS, ExpressJS, and MySQL. Additionally, I earned
            certification as a Laserfiche Platinum Developer. My focus
            intensified on mastering NextJS and Node.JS as backend technologies,
            and my commitment to learning remained unwavering.
          </p>
          <p className="py-2 text-gray-600">
            Presently, I am channeling my energy towards crafting projects
            utilizing the MERN stack. Simultaneously, I am actively engaged in
            broadening my knowledge base by exploring AWS and Spring Boot. My
            journey in the tech realm continues, fueled by a relentless pursuit
            of excellence and a passion for staying at the forefront of
            cutting-edge technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center relative p-4 m-2 hover:scale-105 ease-in duration-300">
          <img src="/assets/carlos.jpeg" alt="carlos" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
