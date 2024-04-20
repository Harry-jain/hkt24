//  data
const aboutData = [
  {
    title: "Web-Developement",
    info: [
      {
        title:
          "1.Develop a web-based financial management app for personal finance tracking and budgeting."
      },
      {
        title:
          "2.Design a Student Result Management System with SQL integration for storing and managing academic records.",
      },
      {
        title: "3Develop a social media web app for user connections and interactions with profiles, posts, comments, and messaging.",
      },
      {
        title: "4.Build a weather forecasting web app using ReactJS for real-time updates and interactive visualizations.",
      },
      {
        title:
          "5.Craft a resume builder web application using HTML, CSS, and ReactJS, offering users an intuitive interface.",
      },
      {
        title: "6.Replicate features of a popular E-commerce website with product listings, shopping carts, user accounts, and secure payment processing.",
      },
      {
        title:
          "7.Build a dynamic blog platform for users to create and share blogs, with liking, sharing, and top blog sorting features. Include a text editor with image insertion for engaging content.",
      },
    ],
  },
  {
    title: "Robotics",
    info: [
      {
        title:
          "1.Design an autonomous delivery robot for efficient navigation in warehouses or campuses, ensuring safe interaction with humans during package delivery.",
      },
      {
        title:
          "2.Create a dynamic basketball robot capable of accurately identifying the basket and executing shots autonomously or with manual inputs.",
      },
      {
        title:
          "3.Engineer a versatile farming robot to automate planting, harvesting, and fertilizing crops, adaptable to various environmental conditions and capable of learning over time.",
      },
      {
        title:
          "4.Develop a multifunctional robot for home or office tasks like cleaning, cooking, and organizing, featuring intuitive human interaction and customizable programming.",
      },
      {
        title:
          "5.Devise a universal language translation robot seamlessly converting audio from any language to another.",
      },
      {
        title:
          "6.Design an automation bot for cyclic monthly patching of Windows servers, with input functionality facilitated through CSV files",
      },
      {
        title:
          "7.Engineer an Optimum Path Finder robot capable of analyzing multiple available routes and determining the shortest path to a given destination efficiently.",
      },
    ],
  },
  {
    title: "AI and ML",
    info: [
      {
        title:
          "1.Design an autonomous delivery robot for efficient navigation in warehouses or campuses, ensuring safe human interaction during package delivery.",
      },
      {
        title:
          "2.Invent a dynamic basketball robot that accurately identifies the basket and can shoot autonomously or with manual control.",
      },
      {
        title:
          "3.Engineer a versatile farming robot for automating tasks like planting, harvesting, and fertilizing crops, adapting to varying environmental conditions and learning over time.",
      },
      {
        title:
          "4.Develop a multifunctional robot for home or office use, capable of tasks such as cleaning, cooking, and organizing, with intuitive human interaction and customizable programming.",
      },
      {
        title:
          "5.Create an automation bot tailored for monthly patching of Windows servers, with input through CSV files.",
      },
      {
        title:
          "6.Engineer a Virtual Mouse system using OpenCV that recognizes hand gestures and performs designated tasks based on various finger combinations, enhancing user interaction and control in computer interfaces."
      },
    ],
  },
  {
    title: "Internet of things",
    info: [
      {
        title:
          "1.Design a solution to support farmers by providing timely weather alerts sourced from meteorological data, helping them mitigate risks associated with adverse weather conditions.",
      },
      {
        title:
          "2. Engineer an air quality monitoring system that tracks pollution levels and offers actionable insights for enhancing public health.",
      },
      {
        title:
          "3.Develop a sophisticated waste management platform empowered by sensors and advanced analytics to streamline waste collection and disposal processes.",
      },
      {
        title:
          "4.Implement an intelligent farming framework leveraging data analytics and machine learning algorithms to maximize crop yields and optimize resource utilization.",
      },
      {
        title: "5.Construct an IoT-enabled Smart Waste Management System tailored for urban environments, facilitating efficient waste management practices within smart cities.",
      },
      {
        title:
          "6. Develop IoT solutions aimed at enhancing energy efficiency across residential, commercial, and industrial sectors, integrating features such as intelligent lighting, HVAC management, and energy consumption monitoring.",
      },
      {
        title:
          "7. Create robust security protocols for safeguarding IoT devices and networks against unauthorized access, data breaches, and privacy infringements, taking into account the diverse array of connected devices and potential vulnerabilities.",
      },
    ],
  },
];

import { motion } from "framer-motion";
import { variants } from "../../variants";
import { fadeIn } from "../../variants";
import { useState } from "react";
import RegisterBtn from "../../components/RegisterBtn";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-purple-700/30 py-32 text-white text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          // exit="hidden"
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="h2">
            Problem{" "}
            <span className="h2 text-accent font-medium font-lg">
              Statements
            </span>
          </h2>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex"
          >
            <RegisterBtn />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px] sm:pt-0"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent sm:text-sm duration-300 hover:text-accent after:transition-all after:duration-300 "
                    }
                cursor-pointer capitalize xl:text-lg  text-white duration-300 relative after:w-8 hover:text-accent after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 
                `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div className="text-white">
                  <div className="xl:text-sm text-sm pt-2 pr-2 text-slate-100 font-normal f ">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
