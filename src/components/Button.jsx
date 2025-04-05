import { motion } from "motion/react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ text }) => {
  const arrow = {
    initial: { translateY: 0 },
    animate: { translateY: "-175%", transition: { type: "spring" } },
  };

  const textEl = {
    initial: { translateY: 0 },
    animate: {
      translateY: "-140%",
      transition: { type: "spring", delay: 0.2 },
    },
  };

  return (
    <motion.button
      initial="initial"
      animate="initial"
      whileHover="animate"
      className="custom_btn min-w-35 h-8 bg-[var(--light)] rounded-full text-black flex gap-3 items-center justify-center cursor-pointer px-5 flex-wrap overflow-hidden"
    >
      <div className="flex flex-col overflow-hidden h-8">
        <motion.span
          variants={textEl}
          className="capitalize font-medium mt-[.25rem] mb-[.25rem]"
        >
          {text}
        </motion.span>
        <motion.span
          variants={textEl}
          className="capitalize font-medium mt-[.25rem] mb-[.25rem]"
        >
          {text}
        </motion.span>
      </div>
      <div className="flex flex-col overflow-hidden h-8">
        <motion.span variants={arrow} className="mt-[.45rem] mb-[.45rem]">
          <IoIosReturnRight className="text-xl" />
        </motion.span>
        <motion.span variants={arrow} className="mt-[.45rem] mb-[.45rem]">
          <IoIosReturnRight className="text-xl" />
        </motion.span>
      </div>
    </motion.button>
  );
};

export default Button;
