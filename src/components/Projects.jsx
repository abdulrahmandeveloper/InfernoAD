import React from "react";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:px-8" id="projects">
      <div className="">
        <h2 className="my-8 text-center justify-center text-4xl font-semibold tracking-tighter">
          Projects
        </h2>
      </div>
      <div className="space-y-16">
        {projects.map((projects, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:flex-row-reverse md:items-start"
          >
            <div className="w-full p-8 md:w-1/2">
              <img
                src={projects.imageUrl}
                alt={projects.title}
                className="w-full rounded-3xl"
              ></img>
            </div>
            <div className="w-full md:w-1/2 mt-20">
              <h2 className="mb-2 text-lg text-emerald-950">{projects.year}</h2>
              <h3 className="mb-2 text-2xl font-semibold text-emerald-950">
                {projects.title}
              </h3>
              <p className="mb-2 text-3xl text-emerald-950 lg:text-4xl">
                {projects.description}
              </p>
              <p className="mb-4 text-lg text-emerald-950 lg:text-2xl">
                {projects.details}
              </p>
              <table className="min-w-full text-lg lg:text-xl">
                <tbody>
                  <tr>
                    <td className="px-6 py-4 font-medium text-emerald-950 ">
                      Investment
                    </td>
                    <td className="px-6 py-4  text-emerald-950 ">
                      {projects.figures.investment}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-emerald-950">
                      Duration
                    </td>
                    <td className="px-6 py-4 text-emerald-950">
                      {projects.figures.duration}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-emerald-950">
                      Outcome
                    </td>
                    <td className="px-6 py-4 text-emerald-950">
                      {projects.figures.outcome}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
