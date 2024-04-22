import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion"; 
import { BsGearWideConnected } from "react-icons/bs";

import { fadeIn } from "../../variants";
// components/VideoPlayer.js




const Contact = () => {
  return (
    <div className="h-full bg-indigo-500/10 ">
      <div className="xl:pr-[107px] xl:pl-[107px] pr-[35px] pl-[35px] pt-[140px] xl:pt-[180px] flex justify-center">
        <div className="bg-purple-500/30 h-[300px] w-[680px] rounded-lg">
          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            animate="show"
            // exit="hidden"
            className="flex-1 flex flex-col justify-center"
          >
            <span className="text-accent flex justify-center text-2xl pt-[55px] font-black text-3xl text-center">&lt;Register for HACKATRONICS/&gt;</span>
          <div className="flex justify-center text-white text-2xl pb-10 pl-10 pr-10 text-center">Register for hackatronics and read the rules, regulations and avoidence guidelines given below.</div>
          </motion.div>

          <motion.div
            variants={fadeIn("up",1)}
            initial="hidden"
            animate="show"
            // exit="hidden"
            className="flex-1 flex flex-col justify-center"
          >
            <div className="flex justify-center text-lg duration-[4200ms] font-black" viewBox="0 0 54 54">
              <div className="sm:justify-center flex pl-12 xl:pl-0">
                <div
                  className="z-30  cursor-pointer justify-center flex items-center rounded-md
                  text-white bg-accent
                hover:border-accent hover:text-accent hover:bg-white 
                  h-[30px] w-[320px] "
                >
                  <a href={"https://forms.office.com/pages/responsepage.aspx?id=fw2wx5mtKkSxL8LJEgRP3FPDWp8eQFtLsFcqoo-_-SJUOEI5RFgyOFFRTlRJQlVZNTU0VDIxNldGQS4u"}>
                    &lt;!--Click on this tag to register--&gt;
                  </a>
                </div>
              </div>
          </div>
          </motion.div>
       </div>
      </div>
    </div>
  );
};

export default Contact;
