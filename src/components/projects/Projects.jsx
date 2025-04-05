import { motion } from "motion/react";
import Project from "./Project";
import { nanoid } from "nanoid";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(2,1,111,1)_11%,rgba(4,4,167,1)_44%,rgba(2,1,111,1)_89%]",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/ttr-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(46,32,110,1)_11%,rgba(53,57,161,1)_44%,rgba(46,32,110,1)_100%]",
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2022-169.webm",
      live: true,
      case: true,
      bgColor:
        "bg-linear-[90deg,rgba(130,76,218,1)_4%,rgba(93,76,232,1)_19%,rgba(130,76,218,1)_41%]",
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yahoo-169.webm",
      live: true,
      case: true,
      bgColor:
        "bg-linear-[90deg,rgba(126,31,255,1)_0%,rgba(172,119,244,1)_47%,rgba(126,31,255,1)_100%]",
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/rainfall-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(20,48,212,1)_0%,rgba(101,122,246,1)_47%,rgba(20,48,212,1)_100%]",
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/jungle-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(0,0,255,1)_0%,rgba(96,96,250,0.8754961457239145)_47%,rgba(0,0,255,1)_100%]",
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/silvr-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(255,117,72,1)_0%,rgba(250,182,159,1)_47%,rgba(255,117,72,1)_100%]",
    },
    {
      title: "Remind",
      description:
        "Remind's new website was designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/remind-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(61,119,233,1)_0%,rgba(126,162,233,1)_18%,rgba(61,119,233,1)_42%]",
    },
    {
      title: "Summon",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/summon-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(34,99,109,1)_0%,rgba(83,171,185,1)_45%,rgba(34,99,109,1)_100%]",
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/weglotlikemagic-169.webm",
      live: true,
      case: true,
      bgColor:
        "bg-linear-[90deg,rgba(2,1,111,1)_11%,rgba(4,4,167,1)_44%,rgba(2,1,111,1)_89%]",
    },
    {
      title: "RocketChat",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/rocketchat-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(255,71,71,1)_0%,rgba(251,122,122,1)_45%,rgba(255,71,71,1)_100%]",
    },
    {
      title: "YIR 2021",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2021-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(56,40,101,1)_0%,rgba(99,82,147,1)_45%,rgba(56,40,101,1)_100%]",
    },
    {
      title: "Candid Health",
      description:
        "A complete redesign of a health-startup website, followed by cutting edge development.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/candid-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(80,63,240,1)_0%,rgba(80,63,240,1)_45%,rgba(142,131,244,1)_100%]",
    },
    {
      title: "Showcase",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/showcase-169.webm",
      live: true,
      case: false,
      bgColor:
        "bg-linear-[90deg,rgba(255,95,45,1)_0%,rgba(255,163,135,1)_45%,rgba(255,95,45,1)_100%]",
    },
  ];

  const [mainWindowPos, setMainWindowPos] = useState(0);
  const [childWindowPos, setChildWindowPos] = useState(0);
  const [windowOpacity, setWindowOpacity] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  const moveWindow = (projectIndex) => {
    setCurrentProject(projectIndex);
    setMainWindowPos(projectIndex * 14);
    setChildWindowPos(projectIndex * 22);
  };

  const hideWindow = () => {
    setWindowOpacity(0);
  };
  const showWindow = () => {
    setWindowOpacity(1);
  };

  return (
    <section
      data-scroll-section
      className="min-h-screen mt-28 w-full relative"
      onMouseLeave={hideWindow}
      onMouseEnter={showWindow}
    >
      {projects.map((project, index) => (
        <Project
          key={nanoid()}
          data={project}
          moveWindow={moveWindow}
          index={index}
          currentProject={currentProject}
        />
      ))}
      <motion.div
        initial={{ top: mainWindowPos }}
        animate={{ top: mainWindowPos + "rem" }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
        className={`w-full h-[14rem] absolute top-0 ${projects[currentProject].bgColor} z-10 pointer-events-none transition-colors duration-300 ease-in-out`}
      ></motion.div>
      <div
        className="w-full h-full absolute -top-10 pointer-events-none transition-all duration-200 ease-linear z-20"
        style={{ opacity: windowOpacity }}
      >
        <motion.div
          initial={{ top: mainWindowPos }}
          animate={{ top: mainWindowPos + "rem" }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
          className="absolute z-20 w-122 h-[22rem] left-[46%] -translate-x-1/2 rounded-xl overflow-hidden bg-zinc-800"
        >
          {projects.map((project, index) => (
            <motion.div
              animate={{ y: -childWindowPos + "rem" }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
              className="w-full h-full"
              key={index}
            >
              <video
                className="w-full h-full object-cover"
                src={project.url}
                autoPlay
                playsInline
                loop
                muted
              ></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
