import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
// import { VscArrowRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-purple-700/30 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 z-20"
          >
<span className="text-4xl text-white"><span className="text-accent font-black">EESA</span> presents</span>{"   "
}            <span className="text-accent font-black text-4xl xl:text-6xl z-">
              &lt;HACKATRONICS/&gt;{" "}
            </span>
            <span className="text-4xl text-white">Transforming Ideas </span>
            <span className="text-accent text-4xl font-bold underline-offset-1">
              {" "}
              into Reality
            </span>
            <p className="max-w-sm xl:max-w-xl z-50 pt-4 font-bold text-sm text-white mx-auto xl:mx-0 mb-10 xl:mb-16 ">
              EESA presents Hackatronics, our flagship event highlighting the forefront of electronic and computer engineering. Explore innovative themes and push the boundaries of technology with us. Join the ultimate gathering of enthusiasts, innovators, and problem solvers in the field.{" "}
            </p>
            <div className="flex sm:pl-2 cursor-pointer text-lg font-extrabold text-white z-60 ">
              <ProjectsBtn />
            </div>
          </motion.h1>
          {/* <motion.p
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl z-50 font-bold text-white mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            loremAd adipisicing nulla duis anim anim. Minim laborum ipsum
            eiusmod reprehenderit Lorem incididunt qui irure irure non
            incididunt nostrud deserunt. Adipisicing qui quis sint veniam
            commodo ex dolore nulla aliqua sunt excepteur tempor in. Aliquip
            deserunt amet do culpa duis aliqua ea eu proident laborum.{" "}
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" z-10  cursor-pointer  pt-4"
            >
              <ProjectsBtn />
            </motion.div>
          </motion.p> */}
          {/* <div className="bg-indigo-200 h-[30px] flex rounded-lg w-[350px] items-center z-50">
            <div className="font-bold text-white pl-4">
              Developed and managed by{" "}
              <span className="text-accent font-extrabold">Harsh Jain</span>
            </div>
          </div> */}
          {/* counter */}
        </div>
        {/* image from now on */}
      </div>
      <div className="w-[1200px] xl:w-full h-full absolute right-0 bottom-0">
        <motion.div
          variants={fadeIn("down", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" bg-none xl:bg-cover xl:bg-right mix-blend-color-dodge xl:bg-no-repeat w-full h-full absolute translate-z-0     "
        ></motion.div>

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" w-100 h-full  max-w-[700px] max-h-[600px] absolute -bottom-40 lg:bottom-14 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
