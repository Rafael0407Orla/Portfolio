import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../../data";
import flutterflowicon from "../../assets/flutterflowIcon.png";
import Typography from "../../Components/Typograph";
import { colors } from "../../utils/colors";
import StatusChip from "../../Components/chipStatusProject";
import ContactForm from "../../Components/Forms";
const ProjectDetailPage = () => {
  const { projectID } = useParams();

  const project = projects.find((proj) => proj.projectId === parseInt(projectID));

  if (!project) {
    return (
      <div className="text-center flex flex-col justify-center align-middle mt-8 h-svh">
        <Typography variant="h1" color={colors.brandPrimary} >Project not found</Typography>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[60px]">
        <div className="flex text-left flex-col w-full lg:w-[50%] xl:w-2/3 gap-6">
          <Typography variant="h1" color={colors.brandTertirary} align="left">
            {`Sobre o projeto ${project.name}!`}
          </Typography>

          <Typography
            variant="p"
            addClassName="mt-4"
            color={colors.brandText}
            align="left"
          >
            {project.description}
          </Typography>
          <div className="flex flex-col gap-4">
            <Typography variant="h4" color={colors.brandTertirary} align="left">
              Status of the project:
            </Typography>
            <StatusChip status={project.status} />
          </div>
        </div>

        <div className="w-full lg:w-[50%] xl:w-1/3">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>

      <div className="my-12">
        <Typography variant="h2" color={colors.brandTertirary}>
          Tecnologias usadas:
        </Typography>
        <div className="flex justify-center flex-wrap gap-16 mt-8">
          {project.techUsadas.map((tech, index) => (
            <div key={index} className="w-20 h-20">
              <img
                src={tech}
                alt={tech}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ProjectDetailPage;
