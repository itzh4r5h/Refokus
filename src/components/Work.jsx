import { nanoid } from "nanoid";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "55%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "48%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "63%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "67%",
      left: "43%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let progress = Math.floor(latest*100)
    
    const showImages = (imageCount)=>{
      setImages(prev=>(
        prev.map((imageObj,index)=>(
          imageCount.indexOf(index)===-1?({...imageObj,isActive:false}):({...imageObj,isActive:true})
        ))
      ))
    }

    switch (progress) {
      case 0:
        showImages([])
        break;
      case 1:
        showImages([0])
        break;
      case 3:
        showImages([0,1])
        break;
      case 5:
        showImages([0,1,3])
        break;
      case 7:
        showImages([0,1,3,4])
        break;
      case 8:
        showImages([0,1,3,4,5])
        break;
      default:
        break;
    }
  });

  return (
    <section
      data-scroll-section
      className="max-w-screen-xl mx-auto relative h-[80vh]"
    >
      <h1 data-scroll className="font-medium text-[36rem] leading-none">
        work
      </h1>
      <div data-scroll className="absolute h-full w-full top-0">
        {images.map((item) => {
          return (
            item.isActive && (
              <figure
                data-scroll
                key={nanoid()}
                className="absolute w-60 overflow-hidden rounded-lg -translate-x-1/2 -translate-y-1/2"
                style={{ top: item.top, left: item.left }}
              >
                <img
                  src={item.url}
                  alt={decodeURIComponent(item.url.split("_")[1].split(".")[0])}
                />
              </figure>
            )
          );
        })}
      </div>
    </section>
  );
};

export default Work;
