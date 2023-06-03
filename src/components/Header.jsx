import React from "react";

import { motion } from "framer-motion";

export const Header = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="sticky top-0 right-0 left-0 bg-gray-950 p-4 flex justify-between items-center"
      variants={boxVariant}
      animate="visible"
      initial="hidden"
    >
      {/* leftside  */}
      <motion.div className="flex items-center" variants={listVariant}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-256.png"
          width="50"
          alt="Logo"
          className="mr-2"
        />
        <a
          href="#"
          className="inline-block p-2 text-gray-200 hover:text-indigo-100 mr-2"
        >
          Home
        </a>
        <a
          href="#"
          className="inline-block p-2 text-gray-200 hover:text-indigo-100"
        >
          About
        </a>
      </motion.div>
      {/* rightside */}
      <motion.div className="block" variants={listVariant}>
        <a
          href="#"
          className="inline-block p-2 text-gray-200 hover:text-gray-100 mr-2"
        >
          Login
        </a>
        <a
          href="#"
          className="inline-block py-2 px-4 text-yellow-700 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yelloe-300 transition ease-in duration-150"
        >
          Signup
        </a>
      </motion.div>
    </motion.div>
  );
};
