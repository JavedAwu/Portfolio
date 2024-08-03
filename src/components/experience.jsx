import React from "react";
import { Uparrow } from "../constant/svgIcons";
import { Link } from "react-router-dom";
import { ExperienceData } from "../constant/data";
import PDF from '../assets/images/Javed-Frontend-Developre.pdf'

function Experience() {
  return (
    <div className="text-lg ">
      <div className="">
        <h2 className="mb-5 text-xl font-semibold md:sticky pt-10 top-0 z-10 bg-slate-50">
          Experience.
        </h2>
        <div className="border-s flex flex-col gap-10 ps-5 ms-3">
          {ExperienceData.map((item, index)=>{
            return(
<Expcolumn
              key={item.id}
              position={item.position}
              organization={item.organization}
              technologies={item.technologies}
              startdate={item.startdate}
              enddate={item.enddate}
              description={item.description}
              url={item.url}
            />
            )
          })}
         
        </div>
        <div className="flex mt-5">
          <Link
            className="uppercase text-sm font-medium flex items-center gap-2  rounded-md"
            to={PDF} target="_blank"
          >
            View Resume <Uparrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

const Expcolumn = ({
  position,
  organization,
  url,
  description,
  technologies,
  startdate,
  enddate,
  
}) => {
  return (
    <Link to={url} target="_blank" className="relative">
      <span className="w-4 h-4 rounded-full absolute bg-gray-300 -left-7 top-0"></span>
      <h4 className="text-sm">
        {startdate} - {enddate}
      </h4>
      <p className="text-lg font-medium flex text-slate-700 mb-1 ">
        {position}, {organization}{" "}
        <span className="ms-2">
          <Uparrow /> 
        </span>
      </p>
      <p className="text-slate-500 text-[14px] font-normal leading-normal">{description}</p>
      <div className="flex gap-2 flex-wrap mt-3">
        {technologies.map((link, index)=>{
          return(
            <span
            key={index}
            className={`${
              link === "WordPress" ? "bg-gray-300 text-slate-500"
                : link === "Shopify"
                ? "bg-green-100 text-green-500"
                : link === "CSS"
                ? "bg-blue-100 text-blue-500"
                : link === "jQuery"
                ? "bg-blue-50 text-blue-500"
                : link === "Bootstrap"
                ? "bg-purple-100 text-purple-500"
                 : link === "React"
                ? "bg-blue-100 text-blue-500"
                 : link === "Figma"
                ? "bg-red-100 text-red-400"
                 : link === "Tailwind CSS"
                ? "bg-teal-100 text-teal-500"
                  : link === "MUI"
                ? "bg-blue-100 text-blue-500"
                 : link === "Javascript"
                ? "bg-yellow-100 text-gray-500"
                : link === "HTML 5"
                ? "bg-orange-100 text-orange-500"
                : "bg-slate-50"
            } bg-slate-100  rounded-3xl py-1 px-3 text-[12px] leading-normal whitespace-nowrap`}
          >{link}</span>
          )
        })}
       
      </div>
    </Link>
  );
};

export default Experience;
