import React from 'react'
import { Link } from 'react-router-dom';
import { ProjectList } from '../constant/data';

const Projects = () => {
  return (
    <div>
       <div className='flex border-b h-10 items-center uppercase text-sm font-semibold text-gray-400 ps-6'>
        <div className='w-28'>Year</div>
        <div className='w-56'>Project Name</div>
        <div  className='w-80 ps-6'>Made at</div>
        <div className='flex-1'>Built with</div>
        <div className='flex-1 ps-6'>Link</div>
       </div>
       {ProjectList.map((pritem, index) => {
          return (
            <ProjectColumn
              key={index}
              title={pritem.title}
              image={pritem.image}
              madeAt={pritem.madeAt}
              url={pritem.url}
              category={pritem.category}
              description={pritem.description}
              technologies={pritem.technologies}
            />
          );
        })}
      
    </div>
  )
}

const ProjectColumn = ({
    title,
    category,
    madeAt,
    url,
    image,
    description,
    technologies,
  }) => {
    return (
        <>
         <div className='flex border-b items-center py-6 text-gray-600 bg-slate-50 rounded-md hover:bg-slate-100 transition-all delay-200 ps-6'>
        <div className='w-28'>Year</div>
        <div className='w-56'> <h4 className="text-lg font-medium flex text-slate-700">{title}</h4></div>
        <div  className='w-80 ps-6'>{madeAt}</div>
        <div className='flex-1'>
        <div className="flex gap-2 flex-wrap">
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
        <div className='flex-1 ps-6'>
        <Link
          to={url}
          target="_blank"
          className="transition-all border border-transparent inline-block"
        >
          <span className="flex gap-5">
          {url}
           
          </span>
        </Link>
        </div>
       </div>

       <div className="relative">
        
      </div>
        </>
      
    );
  };

export default Projects