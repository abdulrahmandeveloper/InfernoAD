import React from "react";
import { team_members } from "../constants";
import { ImArrowRight, ImArrowRight2 } from "react-icons/im";

const Team = () => {
  return (
    <section className="container mx-auto px-8 py-20" id="team">
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Team
      </h2>
      <div className="flex flex-wrap">
        {team_members.map((member, index) => (
          <div
            key={index}
            className="mb-12 flex w-full flex-col items-center px-4 text-center md:w-1/2 lg:w-1/3"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mb-4 h-52 w-52 rounded-4xl"
            />
            <h3 className="font-semibold tracking-tighter lg:text-xl">
              {member.name}
            </h3>
            <p className="italic lg:text-lg">{member.title}</p>
          </div>
        ))}

        <div className="w-full flex justify-center mt-12 ">
          <button className="flex items-center gap-2 px-8 py-4 font-semibold rounded-full bg-emerald-950 text-orange-50 hover:bg-emerald-900 transition-colors duration-300 cursor-pointer hover:translate-x-1 transition-transform">
            See more
            <ImArrowRight2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
