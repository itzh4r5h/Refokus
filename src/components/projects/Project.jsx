import { motion } from "motion/react";
import Button from "../Button";

const Project = ({ data, moveWindow, index,currentProject }) => {
  return (
    <div
      data-scroll
      className="relative z-20 w-full"
      onMouseEnter={() => moveWindow(index)}
    >
      <div
        data-scroll
        className="max-w-screen-xl h-[14rem] mx-auto flex justify-between items-center"
      >
        <h1 data-scroll className="capitalize text-5xl font-medium">
          {data.title}
        </h1>
        <div data-scroll className="w-1/3">
          <p data-scroll className="mb-5">
            {data.description}
          </p>
          <div data-scroll className="overflow-hidden h-10">
        <motion.div
              className="flex items-center gap-5"
              initial={{transform: "translateY(50px)" }}
              animate={ currentProject === index && { transform: "translateY(0px)"}}
              transition={{ease: [0.22, 1, 0.36, 1], duration: 0.8, delay: .2}}
            >
              {data.live && <Button data-scroll text={"Live Website"} />}
              {data.case && <Button data-scroll text={"Case Study"} />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
