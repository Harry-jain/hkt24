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
    <div className="h-full bg-purple-700/30 ">
      <div className=" container mx-auto py-32 text-center xl:text-left flex items-center jusrify-center h-full ">
        <div className="flex flex-col w-full max-w-[700px] ">
          <h2 className=" p-2 text-white text-[30px]">
            Contact <span className="text-accent">US</span> :)
          </h2>
          <form
            id="survey-form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdYaaYI4TrGERhOpKhKwzJk9km6qx4kuTkrieDwP8t2zaYQFg/formResponse"
            method="post"
            className=" lowercase bg-primary rounded-lg "
          >
            <div className="flex p-2">
              <div></div>
              <input
                type="text"
                required
                placeholder="First name"
                className="input p-2 text-white"
              ></input>{" "}
              <input
                type="text"
                placeholder="Last Name"
                className="input p-2 text-white"
                required
              ></input>
            </div>
            <div className="flex p-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="text-white lowercase input p-2"
                required
              ></input>
            </div>
            <div className="flex p-2">
              <input
                type="email"
                placeholder="Example@vit.edu.in"
                className="input p-2 text-white lowercase "
                required
              ></input>
            </div>
            <div className="flex p-2">
              <input
                type="text"
                required
                placeholder="Testimoials"
                className="input h-40 pb-24 text-white p-2"
              ></input>
            </div>{" "}
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
