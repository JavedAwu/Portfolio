import React from 'react'
import { Tilt } from 'react-tilt'
import { ProjectList } from "../constant/data";
import { Link } from "react-router-dom";
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
        <h2 className="mb-3 text-xl font-semibold sticky pt-20 top-0 z-10 bg-slate-50">All Projects</h2>
        {ProjectList.map((pritem, index) => {
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
    category,
    url,
    image,
    description,
    technologies,
  }) => {
    return (
      <div className="relative">
        <Link
          to={url}
          target="_blank"
          className="hover:bg-white transition-all border border-transparent hover:border-slate-100 block p-4 -ms-4 hover:rounded-xl"
        >
          <div className="flex gap-5 mb-4">
            <div className="flex">
              <div>
              <Tilt options={defaultOptions}>
                <img
                  src={image}
                  alt="javed"
                  className="w-96 transition-all rounded-xl"
                />
                </Tilt>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium flex text-slate-700">{title}</h4>
              <p className="text-slate-500 font-light">{description}</p>
              <div className="flex gap-2 flex-wrap mt-5">
                {technologies.map((link) => (
                  <span
                    key={link}
                    className={`${
                      link === "WordPress" ? "bg-gray-300 text-slate-500"
                        : link === "Shopify"
                        ? "bg-green-100 text-green-600"
                        : link === "CSS"
                        ? "bg-slate-100 text-slate-500"
                        : link === "jQuery"
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-500"
                        : link === "Bootstrap"
                        ? "bg-gradient-to-r from-purple-50 to-purple-100 text-purple-500"
                        : link === "HTML 5"
                        ? "bg-gradient-to-r from-orange-50 to-orange-100 text-orange-500"
                        : "bg-slate-50"
                    } bg-slate-100 text-slate-500 rounded-3xl py-1 px-3  text-[13px] whitespace-nowrap`}
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
  const Uparrow = () => {
    return (
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon points="0 0 24 0 24 24 0 24" />
          <rect
            fill="#000000"
            opacity="0.3"
            transform="translate(11.646447, 12.853553) rotate(-315.000000) translate(-11.646447, -12.853553) "
            x="10.6464466"
            y="5.85355339"
            width="2"
            height="14"
            rx="1"
          />
          <path
            d="M8.1109127,8.90380592 C7.55862795,8.90380592 7.1109127,8.45609067 7.1109127,7.90380592 C7.1109127,7.35152117 7.55862795,6.90380592 8.1109127,6.90380592 L16.5961941,6.90380592 C17.1315855,6.90380592 17.5719943,7.32548256 17.5952502,7.8603687 L17.9488036,15.9920967 C17.9727933,16.5438602 17.5449482,17.0106003 16.9931847,17.0345901 C16.4414212,17.0585798 15.974681,16.6307346 15.9506913,16.0789711 L15.6387276,8.90380592 L8.1109127,8.90380592 Z"
            fill="#000000"
            fillRule="nonzero"
          />
        </g>
      </svg>
    );
  };

export default AllProjects