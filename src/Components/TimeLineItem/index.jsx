import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import Typography from "../Typograph";
import { MdDateRange } from "react-icons/md";
import { colors } from "../../utils/colors";

const TimelineItem = ({ title, company, dateRange, type = "job" }) => {
  const color = type == "job" ? colors.brandSecondary : colors.brandPrimary;
  return (
    <div
      className="relative flex items-start py-4 border-l-4 "
      style={{ borderColor: color }}
    >
      <div
        style={{ backgroundColor: color }}
        className=" w-6 h-6 rounded-full absolute top-0 left-[-14px]"
      ></div>

      <div className="ml-12 w-full">
        <Typography variant="h3" className="text-brandBlack" align="left">
          {title}
        </Typography>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex items-center text-brandText">
            <FaRegBuilding className="mr-2" size={"16px"} />
            <Typography variant="detail">{company}</Typography>
          </div>
          <div className="flex ">
            <MdDateRange color={colors.brandText} size={"16px"} />
            <Typography variant="detail" className="text-brandText">
              {dateRange}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
