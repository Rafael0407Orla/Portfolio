import React from "react";
import Typography from "../../Components/Typograph";
import { colors } from "../../utils/colors";
import { projects } from "../../../data.js";
import ProjectCard from "../../Components/projectCard/index.jsx";
import htmlIcon from "../../assets/htmlIcon.svg";
import eu from "../../assets/eu.png";
import cssIcon from "../../assets/cssIcon.svg";
import jsIcon from "../../assets/jsIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import reactNativeIcon from "../../assets/reactNativeIcon.png";
import framerIcon from "../../assets/framerIcon.png";
import ffIcon from "../../assets/flutterflowIcon.png";
import wpIcon from "../../assets/wpIcon.png";
import webFlowIcon from "../../assets/webFlowIcon.png";
import ContactForm from "../../Components/Forms/index.jsx";

function Home() {
  const techStackIcons = [
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: jsIcon, alt: "JavaScript" },
    { src: reactIcon, alt: "React" },
    { src: reactNativeIcon, alt: "React Native" },
    { src: framerIcon, alt: "Framer" },
    { src: ffIcon, alt: "FlutterFlow" },
    { src: wpIcon, alt: "Wordpress" },
    { src: webFlowIcon, alt: "Webflow" },
  ];

  return (
    <main className="container mx-auto gap-10 lg:gap-20 py-custom-v px-custom-h md:py-custom-v-md md:px-custom-h-md lg:py-custom-v-lg lg:px-custom-h-lg flex flex-col">
      <section className="flex flex-col-reverse md:flex-row items-center gap-6 justify-evenly">
        <div className="text-center md:text-left md:max-w-[50%]">
          <Typography variant="h1" color={colors.brandTertirary}>
            Olá 👋, <br />
            meu nome é <span className="text-brandPrimary">Rafael Panhoca</span>
            <br />
            Eu sou engenheiro de software
          </Typography>
        </div>

        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-gradient-to-r from-purple-400 via-pink-500 to-blue-500 overflow-hidden">
          <img src={eu} className="w-full h-full object-cover rounded-full" />
        </div>
      </section>

      <section className="">
        <div className="text-center mb-8">
          <Typography variant="h2" color={colors.brandTertirary}>
            Meu Tech Stack
          </Typography>
          <Typography variant="h3" addClassName="text-gray-600 mt-6 mb-4">
            Tecnologias que trabalhei recentemente
          </Typography>
        </div>

        <div className="grid grid-cols-3 md:flex md:flex-wrap gap-6 md:gap-11 justify-items-center md:justify-center md:align-middle">
          {techStackIcons.map((icon, index) => (
            <div key={index} className="w-16 h-16 md:w-28 md:h-28">
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="">
        <div className="container mx-auto">
          <Typography variant="h2" color={colors.brandTertirary}>
            Projetos
          </Typography>
          <Typography
            variant="p"
            color={colors.brandText}
            addClassName="mt-6 mb-4"
          >
            Alguns dos meus projetos:
          </Typography>

          <div className="flex flex-wrap justify-center align-middle gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.projectId} project={project} />
            ))}
          </div>
        </div>
      </section>
      <div className="w-auto flex  justify-center">
        <ContactForm />
      </div>
    </main>
  );
}

export default Home;
