//  data
const aboutData = [
  {
    title: "Web-Apps",
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
        title: "6.Replicate features of a popular E-commerce website.",
      },
      {
        title:
          "7.Build a dynamic blog platform for users to create and share blogs, with liking, sharing. Include a text editor with image insertion for engaging content.",
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
          "6.Design an automation bot for cyclic monthly patching of Windows servers, with input functionality via CSV files",
      },
     
    ],
  },
  {
    "title": "AI/ML",
    "info": [
      {
        "title": "1.Develop a predictive analytics model to forecast stock market trends using machine learning."
      },
      {
        "title": "2.Build an intelligent virtual assistant empowered by AI algorithms to assist users with scheduling, task prioritization, and reminders, enhancing productivity."
      },
      {
        "title": "3.Design a computer vision solution proficient in accurately detecting objects within images, enabling applications ranging from security to image recognition."
      },
      {
        "title": "4.Create a personalized job recommendation system, leveraging machine learning algorithms to suggest relevant job openings based on their skills and experience."
      },
      {
        "title": "5.Develope a computer vision system using OpenCV to recognize hand gestures and perform tasks based on finger combinations, enhancing control in computer interfaces."
      },
      {
        "title": "6.Implement a Python-based Deep Iris Detection system to capture eye blinking actions, provide insights into behavior for applications like drowsiness, biometrics detection"
      }
    ]
  },
  {
    title: "IoT",
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
      }
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
    <div className="h-[250%] bg-purple-700/30 py-32 text-white text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          // exit="hidden"
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="h2 sm:h3">
            Problem{" "}
            <span className="h2 sm:h3 text-accent font-medium font-lg">
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
          <div className="flex gap-x-4 text-xl xl:gap-x-8 mx-auto xl:mx-0 mb-4">
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
