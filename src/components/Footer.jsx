import { motion } from "framer-motion";

export const Footer = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.8,
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
      className="p-10 bg-black text-gray-200 flex flex-col md:flex-row justify-between text-lg mb-2"
      variants={boxVariant}
      animate="visible"
      initial="hidden"
    >
      {/* <!-- left --> */}
      <div className="md:w-1/2 mb-3">
        <motion.h3 class="text-lg mb-2" variants={listVariant}>
          Join the Newsletter
        </motion.h3>
        <form className="flex">
          <motion.input
            variants={listVariant}
            type="email"
            className="w-full rounded-l py-3 px-4 outline-none focus:bg-indigo-200"
          />
          <motion.button
            variants={listVariant}
            className="bg-red-300 text-red-800 rounded-r px-4 hover:bg-red-400"
          >
            Join
          </motion.button>
        </form>
      </div>
      {/* <!-- right --> */}
      <motion.div variants={listVariant} className="flex items-center">
        Copyright &copy; 2023 - Infinity
      </motion.div>
    </motion.div>
  );
};
