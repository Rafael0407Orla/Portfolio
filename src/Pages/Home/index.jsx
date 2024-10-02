import React from "react";
import Typography from "../../Components/Typograph";
import { colors } from "../../utils/colors";
import { projects } from "../../../data.js";
import ProjectCard from "../../Components/projectCard/index.jsx";
// Importação correta dos ícones
import htmlIcon from "../../assets/htmlIcon.svg";
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
    <main className="container m-auto px-4 py-8 gap-8 md:px-5 md:py-11 md:gap-12">
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
          <img
            src="https://example.com/path-to-your-image.jpg"
            alt="Pavan MG"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="text-center mb-8">
          <Typography variant="h2" color={colors.brandTertirary}>
            My Tech Stack
          </Typography>
          <Typography variant="h3" addClassName="text-gray-600">
            Technologies I've been working with recently
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
        <div className="container mx-auto px-6">
          <Typography variant="h2" color={colors.brandTertirary}>
            Projetos
          </Typography>
          <Typography variant="p" color={colors.brandText}>
            Alguns dos meus projetos:
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.projectId} project={project} />
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}

export default Home;
