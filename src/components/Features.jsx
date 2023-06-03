import React from "react";
import { motion } from "framer-motion";
// import { data } from "./data/data";

export const Features = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      delay: 0.8,
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="md:flex py-16 px-10 bg-slate-950 text-slate-200 text-center"
      variants={boxVariant}
      animate="visible"
      initial="hidden"
    >
      <motion.div className="md:mr-2 text-center mb-4 " variants={listVariant}>
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=992&q=80"
          className="w-full h-4/6 mb-4 rounded border-solid border-2 border-slate-800"
        />
        <p>Picturesque Entrance</p>
      </motion.div>
      <motion.div className="md:mr-2 text-center mb-4 " variants={listVariant}>
        <img
          src="https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          className="w-full mb-4 h-4/6 md:mt-8 rounded border-solid border-2 border-slate-800"
        />
        <p>Pristin Relaxation Spot</p>
      </motion.div>
      <motion.div className="md:mr-2 text-center mb-4 " variants={listVariant}>
        <img
          src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="w-full mb-4 h-4/6 rounded border-solid border-2 border-slate-800"
        />
        <p>Minimalist Approach</p>
      </motion.div>
      <motion.div className="md:mr-2 text-center mb-4 " variants={listVariant}>
        <img
          src="https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="w-full mb-4 h-4/6 md:mt-8 rounded border-solid border-2 border-slate-800"
        />
        <p>Modern Homes</p>
      </motion.div>
      {/* {data.map(({ id, name, image, className }) => (
        <div key={id}>
          <div className="mr-2 text-center">
            <img
              src={image}
              alt={name}
              className={`h-5/6 object-cover ${className}`}
            />
            <p>{name}</p>
          </div>
        </div>
      ))} */}
    </motion.div>
  );
};
