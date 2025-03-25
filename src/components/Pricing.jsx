import React from "react";
import { packages } from "../constants";
import { IoArrowForward } from "react-icons/io5";

const Pricing = () => {
  return (
    <section className="bg-stone-50 px-4 py-12 md:px-8" id="pricing">
      <div>
        <h2 className="my-8 text-center text-7xl font-semibold tracking-tighter">
          Pricing
        </h2>
        <p className="mb-4 text-center text-3xl tracking-tighter md:text-5xl">
          Advertising Packages
        </p>
      </div>
      <div className="flex flex-col items-center space-y-8">
        {packages.map((pk, index) => (
          <div
            className="max-w-4xl rounded-xl border-2 border-emerald-950 p-8"
            key={index}
          >
            <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
              <div className="mb-6 flex flex-col md:mb-0 md:w-1/2">
                <h2 className="mb-2 text-lg font-semibold tracking-tighter">
                  {pk.name}
                </h2>
                <p className="mb-2 text-5xl font-bold">{pk.price}</p>
                <p className="px-2">{pk.description}</p>
              </div>
              <div className="flex flex-col md:w-1/2">
                <h3 className="mb-2 font-semibold tracking-tighter">
                  What's Included
                </h3>
                <ul className="mb-4">
                  {pk.services.map((service, index) => (
                    <li key={index}>- {service}</li>
                  ))}
                </ul>
                <div>
                    <button className="flex items-center gap-2 rounded-full bg-emerald-950 px-4 py-2 text-orange-50 hover:bg-emerald-900 cursor-pointer">
                        <span>Get Started</span>
                        <IoArrowForward />
                    </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
