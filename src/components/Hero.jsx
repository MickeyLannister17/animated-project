import { motion } from "framer-motion";

export const Hero = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.6,
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
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="md:flex justify-between py-20 px-10 bg-slate-900 text-slate-100"
      variants={boxVariant}
      animate="visible"
      initial="hidden"
    >
      {/* leftside */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <motion.h2
          className="text-2xl md:text-4xl lg:text-6xl text-white mb-6"
          variants={listVariant}
        >
          Welcome to Prium Homes!
        </motion.h2>
        <motion.p className="mb-6" variants={listVariant}>
          There is never a sad day!
        </motion.p>
        <motion.a
          href="#"
          className="md:mb-6 inline-block py-3 px-6 text-lg bg-gray-400 rounded text-slate-800 hover:bg-slate-300 mr-2"
          variants={listVariant}
        >
          Learn More
        </motion.a>
        <motion.a
          href="#"
          className="inline-block py-3 px-6 text-lg bg-yellow-400 text-yellow-800 hover:bg-yellow-200 rounded"
          variants={listVariant}
        >
          Get Started
        </motion.a>
      </div>
      {/* rightside */}
      <div className="md:w-1/2">
        <motion.img
          src="
          https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="signature-home"
          className="w-full rounded shadow-2xl"
          variants={listVariant}
        />
      </div>
    </motion.div>
  );
};
