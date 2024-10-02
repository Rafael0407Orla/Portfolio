// ProjectCard.js
import React from "react";
import Typography from "../Typograph";
import { colors } from "../../utils/colors";
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img
        src={project.capa}
        alt={project.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <Typography variant="h4" align="left" color={colors.brandBlack}>
          {project.name}
        </Typography>
        <Typography variant="p" align="left" color={colors.brandText}>
          {project.shortDescription}
        </Typography>
        <div className="flex space-x-2 mt-4">
          {project.techUsadas.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
