import React from "react";
import TimelineItem from "../TimeLineItem";

const Timeline = ({ experiences, type }) => {
  return (
    <div className="w-full">
      {experiences.map((exp, index) => (
        <TimelineItem
          key={index}
          type={type}
          title={exp.title}
          company={exp.company}
          dateRange={exp.dateRange}
        />
      ))}
    </div>
  );
};

export default Timeline;
