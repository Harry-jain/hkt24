import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

//SCRIPT
// function GetFruit(color) {
//   google.script.run
//     .withSuccessHandler(function (ar) {
//       console.log(ar);

//       fruit.length = 0;

//       let option = document.createElement("option");
//       option.value = "";
//       option.text = "";
//       fruit.appendChild(option);

//       ar.forEach(function (item, index) {
//         let option = document.createElement("option");
//         option.value = item;
//         option.text = item;
//         fruit.appendChild(option);
//       });
//     })
//     .getFruits(color);
// }

const Contact = () => {
  return (
    <div className="h-full bg-indigo-500-">
      <div className=" container mx-auto py-32 text-center xl:text-left flex items-center jusrify-center h-full ">
        <div className="flex flex-col w-full max-w-[700px] ">
          <h2 className=" p-2 text-white text-[30px]">
            Register for <span className="text-accent font-extrabold">EESA event :)</span>
          </h2>
          <h3 className=" p-2 text-white text-[30px] text-lg font-bold">
            Heyy there!! we at EESA are organizing a very interactive workshop on...
            <span className="text-2xl underline decoration-sky-500 text-blue-600">Azure odyssey</span>... lead by{" "}
            <span className=" text-accent text-xl"> Mr. Vedant Patil </span>a
            Expert in Microsoft certification. <a className="text-blue-400 text-lg" href="https://www.linkedin.com/in/vedant-patil-6082/">Linkedin</a>{" "}
          </h3>
          <h4 className=" p-2 text-white text-xs font-extrabold text-[30px]">
           Date : <span className="text-accent">7th March 2024</span> | Time : <span className="text-accent">4:00 - 5:30</span> | Location : <span className="text-accent">VIT : CC02</span>
          </h4>

          <form
            id="survey-form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdrR-HAmjzPVbFFoTuHKfy8WCMBZ0yu_psVNO1NLd1ddhEiqw/formResponse"
            method="post"
            className=" lowercase bg-primary/30 rounded-lg text-white"
          >
            <div className="flex p-2">
              <input
                type="text"
                required
                placeholder="full name"
                className="input p-2 text-white-500"
                name="entry.1411527844"
              ></input>{" "}
            </div>
            <div className="flex p-2">
              <input
                type="text"
                required
                placeholder="Email (VIT only)"
                className="input p-2 text-white-500"
                name="entry.1030762046"
              ></input>{" "}
            </div>
            <div className="flex p-2 ">
              <select
                name="cars"
                id="cars"
                required
                placeholder="Branch"
                className="input p-2"
                name="entry.2023976054"
              >
                <option className="text-black" value="CMPN">
                  CMPN
                </option>
                <option className="text-black" value="INFT">
                  INFT
                </option>
                <option className="text-black" value="ExCS">
                  ExCS
                </option>
                <option className="text-black" value="ExTC">
                  ExTC
                </option>
                <option className="text-black" value="BIOM">
                  BIOM
                </option>
                <option className="text-black" value="Mtech ">
                  M.Tech
                </option>
              </select>
            </div>
            <div className="flex p-2 ">
              <select
                name="cars"
                id="cars"
                placeholder="Year"
                className="input p-2"
                required
                name="entry.359830086"
              >
                <option className="text-black" value="First">
                  1st
                </option>
                <option className="text-black" value="Second">
                  2nd
                </option>
                <option className="text-black" value="Third">
                  3rd
                </option>
                <option className="text-black" value="Fourth">
                  4th
                </option>
              </select>
            </div>
            <div className="flex p-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="text-white lowercase input p-2"
                required
                name="entry.1893242125"
              ></input>
            </div>

            <div className="flex justify-center pb-3 pt-3">
              <a href="https://www.linkedin.com/company/eesa-vit/about/">
                <input
                  type="submit"
                  id="submit"
                  value="Submit"
                  href="https://www.linkedin.com/company/eesa-vit/about/"
                  onclick="location.href = 'https://www.linkedin.com/company/eesa-vit/about/';"
                  className="text-white h-10 w-40 rounded-lg  flex justify-center font-bold cursor-pointer hover:text-accent hover:bg-white bg-accent "
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
