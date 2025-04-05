import { motion } from "motion/react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, h1, p, hover = false ,texth3, texth2}) => {
  return (
    <motion.div
      data-scroll
      whileHover={{ backgroundColor: hover ? "#7542ff" : '#3F3F47', padding: "25px" }}
      className={`p-5 bg-zinc-700 rounded-xl ${width} flex flex-col justify-between min-h-[25rem]`}
    >
      <div data-scroll>
        <div data-scroll className="w-full flex justify-between items-center">
          <h3 className="text-md">{texth3}</h3>
          <IoIosArrowRoundForward className="text-xl" />
        </div>
        <h2 data-scroll className={`text-3xl mt-5 ${hover && 'w-[35%]'}`}>
          {texth2}
        </h2>
      </div>
      {h1 && (
        <div>
          <h1
            data-scroll
            className="font-medium text-8xl leading-none tracking-tight"
          >
            Start a Project
          </h1>
          <button
            data-scroll
            className="rounded-full px-5 py-2 flex items-center justify-center border-[1px] border-[var(--light)] mt-5 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      )}
      {p && (
        <p data-scroll className="text-sm text-[var(--light)]">
          Explore what drivers out team.
        </p>
      )}
    </motion.div>
  );
};

export default Card;
