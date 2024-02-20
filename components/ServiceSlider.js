import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxMix,
  RxFramerLogo,
} from "react-icons/rx";
import { FaGears } from "react-icons/fa6";
// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Harsh Rajput",
    link: "https://www.linkedin.com/company/eesa-vit/about/",
    description: "General secretary.",
  },
  {
    icon: <RxPencil2 />,
    title: "Uday Ambala",
    link: "https://www.linkedin.com/company/eesa-vit/about/",
    description: "Joint-Genral secretary.",
  },
  {
    icon: <FaGears />,
    title: "Harsh Jain",
    core: "Core & extendee",
    description: "Technical Head.",
    link: "https://www.linkedin.com/company/eesa-vit/about/",
    c_member: "Aanchal C, Biral M, Aryan B, Aaryan M, Maitri D.",
    e_member: "Aaryan T, Sunny T, Lokesh P, Vaishnavi M, Akshat G.",
  },
  {
    icon: <RxReader />,
    title: "Mannan Naidu",
    description: "Documentation Head.",
    link: "https://www.linkedin.com/company/eesa-vit/about/",
    core: "Core & extendee",
    c_member: "Rajan J, Rohan K, Inshrah K, Haider R, Harshad B.",
    e_member: "Aryan G, pratik P, Gargi K, Nachammai C, Yash P.",
  },
  {
    icon: <RxFramerLogo />,
    title: "Aman Kumar",
    description: "Event Head.",
    link: "https://www.linkedin.com/company/eesa-vit/about/",
    core: "Core & extendee",
    c_member: "Gargee D, Diya S, Prachi K, Veda D, Shreyas C, Garv H.",
    e_member: "Sumedha, Shreya S, Lubdha M, Vedshree A Singh, Y.",
  },
  {
    icon: <RxRocket />,
    title: "Ganesh Jangal",
    description: "Publicity Head.",
    core: "Core & extendee",
    link: "https://www.linkedin.com/company/eesa-vit/about/",
    c_member:
      "Sameer S, Omakr P, Aarya P, Gargi P, Gargi B, Chinmay P, Rajwardhan A.",
    e_member: " Aashna G, Riya G, Sanika S, Abhinav M, Vaishnavi P.",
  },
  {
    icon: <RxMix />,
    title: "Omkar Daggula",
    description: "Creatives Head.",
    core: "Core & extendee",
    link: "https://www.linkedin.com/company/eesa-vit/about/",
    c_member:
      "Divesh B, Nishika s, Swaranchi K, Tejas P, Shreyas G, Inshrah K, Pratima M, Prabhjyot K.",
    e_member: "Poorva K, Kiah V, Trupti V, Umang B, Shubhanshu B, Sanskriti S.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" h-[240px] xl:h-[300px] xl:bg-[rgba(81,47,123,0.5)] bg-[rgba(65,47,123)]  rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer text-white xl:hover:bg-[rgb(89,68,157)] transition-all duration-500 ">
              {/**/}
              <div className="text-accent text-4xl">{item.icon}</div>
              {/**/}
              <div className="text-white">
                <div className="text-2xl">{item.title}</div>
                <p className=" font-bold text-accent ">{item.description}</p>
                {/* <p className="text-white font-bold text-sm">{item.core}</p> */}
                <p className="text-sm">{item.c_member}</p>
                <br className="bg-primary-300 h-[10px] w-[50px]"></br>
                {/* <p>{item.extendee}</p> */}
                <p className="text-sm">{item.e_member}</p>
              </div>
              <div className=" text-white text-3xl ">
                <div className="hover:text-accent transition-all duration-200">
                  <a href={item.link}>
                    <RxArrowTopRight />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
