//  data
const aboutData = [
  {
    title: "Web-Developement",
    info: [
      {
        title:
          "1. Develop a web application that helps individuals manage their finances and track expenses.",
      },
      {
        title:
          "2. Create a Student Result Management System with SQL Database.",
      },
      {
        title: "3. Create a simple social media web app.",
      },
      {
        title: "4. Weather forecasting web app using ReactJS.",
      },
      {
        title:
          "5. Create a resume builder using HTML, CSS and ReactJS. The user interface should be easy to use. There must be multiple resume formats. The infomation given by the user must adjust automatically according to the template.",
      },
      {
        title: "6. Clone any famous E-Commerce website using any language.",
      },
      {
        title:
          "7. Create a blog portal where user can write any kind of blog, while others can like and share the blog via a unique link. Create a text editor to write the blog and add insert images option. Sort top performing blogs on the basis of popularity by likes and feature it on the homepage of the blog portal.",
      },
    ],
  },
  {
    title: "Robotics",
    info: [
      {
        title:
          "1. Develop an autonomus delivery robot that can deliver packages or other items which can be easily used in a warehouse or on a college campus. The robot should be able to navigate complex environments and interact with humans in a safe and efficient manner.",
      },
      {
        title:
          "2. Create a sporty robot that can play basketball, either autonomously or with some manual inputs. The robot should be able to identify the basket accurately and put the ball in basket.",
      },
      {
        title:
          "3. Develop a robot that can automate farming tasks, such as planting, harvesting, or fertilizing crops. The robot should be able to operate in a range of environments, identify and respond to changes in soil or weather conditions, and be able to learn and adapt over time.",
      },
      {
        title:
          "4. Develop a robot that can assist with everyday tasks in the home or office, such as cleaning, cooking, or organizing. The robot should be able to interact with humans in a natural and intuitive way, and be easy to program and customize for different users.",
      },
      {
        title:
          "5. Develop a robot that can translate any language audio into any other language.",
      },
      {
        title:
          "6. Create a automation bot for Window server cyclic monthly patching bot. Input should be in csv file.",
      },
      {
        title:
          "7. Create a Optimum Path finder robot that can identify the shortest path from many avaiable paths to reach the destination.",
      },
    ],
  },
  {
    title: "AI and ML",
    info: [
      {
        title:
          "1. Build a Machine Learning model that can predict stock prices or cryptocurrency values.",
      },
      {
        title:
          "2. Create an AI system that can automatically classify and tag images or videos based on content.",
      },
      {
        title:
          "3. Build an AI-powered virtual assistant that can help with scheduling, task management, and reminders.",
      },
      {
        title:
          "4. Create a computer vision model that can accurately detect and classify objects in an image.",
      },
      {
        title:
          "5. Build a recommendation engine for job seekers that suggests relevant job openings based on their skills and experience.",
      },
      {
        title:
          "6. Select a photo album of 10 photos from which human faces can be detected, identify a person from that photos. Create a ML model that allow a program to organize photos by person. Some software like iPhoto and Google Photos has this capability.",
      },
      {
        title:
          "7. Develop a Virtual Mouse using OpenCV. Create many actions using various finger combinations. This should recognise hand gestures and perform certain assigned tasks.",
      },
      {
        title:
          "8. Create a Deep Iris Detection using Python. It should capture the eye blinking action.",
      },
    ],
  },
  {
    title: "Internet of things",
    info: [
      {
        title:
          "1. create a solution that can help farmers by keeping them warned about weather conditions which can affect them by accessing data from the meteorological department.",
      },
      {
        title:
          "2. Develop an air quality monitoring system that tracks pollution levels and provides insights for improving public health.",
      },
      {
        title:
          "3. Design a smart waste management system that uses sensors and data analytics to optimize waste collection and disposal.",
      },
      {
        title:
          "4. Create a smart farming system that uses data analytics and machine learning to optimize crop yields and resource usage.",
      },
      {
        title: "5. IoT Based Smart Waste Management System for Smart City.",
      },
      {
        title:
          "6. Create a survelliance Drone using RaspberryPi. The camera use for survelliance should capture good video quality. Real-time video streaming data should be broadcasted on any preferred software platform.",
      },
      {
        title:
          "7. Create a Home Automation System WITHOUT using Arduino & RaspberryPi. Create your custom PCB board that can automate a room. Automatic Light controlling and fingerprint door opening should be the main features.",
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
            <span className="h2 text-accent font-medium font-xl">
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
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent duration-300 hover:text-accent after:transition-all after:duration-300 "
                  }
                cursor-pointer capitalize xl:text-lg text-white duration-300 relative after:w-8 hover:text-accent after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 
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
                  <div className="xl:text-sm text-xs pt-2 pr-2 text-slate-100 font-normal f ">
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
