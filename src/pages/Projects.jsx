import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../data";
import { Link } from "react-router-dom";
Link;
function Projects() {
  const [project, setProject] = useState(data);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
    >
      <div className="px-7 pb-10 mt-28 md:px-12 xl:px-20">
        <h1 className="font-semibold text-2xl text-center md:pb-7">Projects</h1>
        <div className="md:grid md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {project.map((item) => {
            const { id, img, name, languages, link } = item;
            return (
              <div
                key={id}
                className="my-10 md:my-0 md:z-0 thecard shadow-md shadow-blue-500 pb-3 rounded-sm z-0"
              >
                <Link to={link} className="">
                  <img
                    src={img}
                    alt={name}
                    className=" rounded-tr-sm rounded-tl-sm"
                  />
                </Link>
                <div className="text-md p-5">
                  <h1 className="font-bold py-1">{name}</h1>
                  <p className="text-sm">{languages}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
