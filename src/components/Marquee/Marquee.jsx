import { motion } from "motion/react";
import { nanoid } from "nanoid";

const Marquee = ({ urls, direction }) => {
  return (
    <div
      data-scroll
      className="w-full overflow-hidden flex gap-0 items-center py-10"
    >
      <motion.div
        data-scroll
        initial={{ x: direction==='left'?'0':'-100%' }}
        animate={{ x: direction==='left'?'-100%':'0' }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="one flex shrink-0 items-center gap-20"
      >
        {urls.map((url, index) => (
          <figure
            key={nanoid()}
            className={`w-34 h-9 ${index === 0 && "ml-20"}`}
          >
            <img
              className="w-full h-full object-center"
              src={url}
              alt={decodeURIComponent(url.split("_")[1].split(".")[0])}
            />
          </figure>
        ))}
      </motion.div>
      <motion.div
        data-scroll
        initial={{ x: direction==='left'?'0':'-100%' }}
        animate={{ x: direction==='left'?'-100%':'0' }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="one flex shrink-0 items-center gap-20"
      >
        {urls.map((url, index) => (
          <figure
            key={nanoid()}
            className={`w-34 h-9 ${index === 0 && "ml-20"}`}
          >
            <img
              className="w-full h-full object-center"
              src={url}
              alt={decodeURIComponent(url.split("_")[1].split(".")[0])}
            />
          </figure>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
