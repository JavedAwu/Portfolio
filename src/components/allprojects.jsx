import React from 'react'
import { Tilt } from 'react-tilt'
import { ProjectList } from "../constant/data";
import { Link } from "react-router-dom";
import { Uparrow } from '../constant/svgIcons';
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            20,     // max tilt rotation (degrees)
	perspective:    600,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function AllProjects() {
  return (
    <div className="">
        <div className=''>
        <h2 className="mb-3 text-xl font-semibold md:sticky pt-10 top-0 z-10 bg-slate-50">All Projects</h2>
        {ProjectList.slice(0,5).map((pritem, index) => {
          return (
            <ProjectColumn
              key={index}
              title={pritem.title}
              image={pritem.image}
              url={pritem.url}
              category={pritem.category}
              description={pritem.description}
              technologies={pritem.technologies}
            />
          );
        })}
        <div className="flex mt-5">
          <Link
            className="uppercase text-sm font-medium flex items-center gap-2  rounded-md"
            to="/projects"
          >
            View All Projects <Uparrow />
          </Link>
        </div>
      </div>
      </div>
  )
}

const ProjectColumn = ({
    title,
    // category,
    url,
    image,
    description,
    technologies,
  }) => {
    return (
      <div className={`relative xl:mb-0 md:mb-0 mb-10`}>
        <Link
          to={url}
          target="_blank"
          className="hover:bg-white transition-all border border-transparent hover:border-slate-100 block xl:p-4 lg:p-4 md:p-4 xl:-ms-4 lg:-ms-4 md:-ms-4 hover:rounded-xl"
        >
          <div className="flex xl:flex-row lg:flex-row md:flex-row  flex-col gap-5">
            <div className="flex">
              <div className='xl:w-52 lg:w-52 md:w-52'>
              <Tilt options={defaultOptions}>
                <img
                  src={image}
                  alt="javed"
                  className="w-full transition-all rounded-xl"
                />
                </Tilt>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium flex text-slate-700">{title}</h4>
              <p className="text-slate-600 text-[14px] font-normal leading-normal">{description}</p>
              <div className="flex gap-2 flex-wrap mt-5">
                {technologies.map((link) => (
                  <span
                    key={link}
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
                    } bg-slate-100  rounded-3xl py-1 px-3 text-[12px] whitespace-nowrap`}
                  >
                    {link}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };


export default AllProjects