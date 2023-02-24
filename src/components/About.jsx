import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        A self-driven individual who is good at problem solving and programming, with an emphasis on writing clean and maintainable code, aspiring to make a career in software engineering with a
        focus on full stack development.

        </p>

        <br />

        <p className="text-xl">
        The web can sometimes be indistinguishable from magic, but I have the knowledge and patience required to make just about anything.
        </p>
      </div>
    </div>
  );
};

export default About;
