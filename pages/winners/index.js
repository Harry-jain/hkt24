import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { GiGlassCelebration } from "react-icons/gi";
import { fadeIn } from "../../variants";

const Winners = () => {
  return (
    <div className="h-full bg-indigo-500/10 ">
      <div className="xl:pr-[107px] xl:pl-[107px] pr-[35px] pl-[35px] pt-[140px]">
        <div className="bg-purple-500/30 h-[420px] w-full rounded-lg">
          
          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            animate="show"
            // exit="hidden"
            className="flex-1 flex flex-col justify-center"
          >
          <span className="text-accent flex justify-center text-2xl pt-[75px] font-black text-3xl text-center">Registeration   </span>
          <div className="flex justify-center text-white text-2xl pb-10 pl-10 pr-10 text-center">link will be activated soon and the below given gear will be replaced by form link.</div>
          </motion.div>

          <div className="flex justify-center text-[90px] duration-[4200ms] text-white font-black " viewBox="0 0 54 54">
            <GiGlassCelebration/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
