import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import axios from "axios";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
}) => {
  return (
<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
className="p-5 rounded-2xl sm:w-[360px] w-full h-fit  my-3 position-relative bg-[#142234]" style={{'Opacity': '1'}}
      >
    <div className=" w-full h-36">
          <div className="    card-img_hover">
            <div
              onClick={() => window.open(`/packages/${index + 1}`, "_blank")}
              className="w-28 position-absolute m-auto h-20 rounded-full flex justify-center items-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="214.17"
                height="337.299"
                viewBox="0 0 214.17 337.299"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#0d1b2b" />
                    <stop offset="0.248" stopColor="#522e17" />
                    <stop offset="0.335" stopColor="#f6ed88" />
                    <stop offset="0.405" stopColor="#5c2f14" />
                    <stop offset="0.773" stopColor="#553e32" />
                    <stop offset="0.837" stopColor="#f3e986" />
                    <stop offset="0.874" stopColor="#945322" />
                    <stop offset="0.927" stopColor="#4a5461" />
                    <stop offset="1" stopColor="#7b431c" />
                  </linearGradient>
                </defs>
                <g
                  id="Component_1_1"
                  data-name="Component 1 – 1"
                  transform="translate(0.5 0.5)"
                >
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M18.537,0h176.1c10.237,0,18.537,8.8,18.537,19.65V268.083c0,21.738-81.443,72.505-105.61,67.738-.5.06.7,0,0,0h0C95.969,341.524,7.939,293.095.458,267.2.194,266.3,0,162.443,0,161.253V19.65C0,8.8,8.3,0,18.537,0Z"
                    stroke="#707070"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M17.685,0H185.691c9.767,0,17.685,8.576,17.685,19.156V261.338c0,21.191-77.7,70.681-100.758,66.034-.48.059.668,0,0,0h0c-11.059,5.56-95.043-41.651-102.181-66.9C.185,259.605,0,158.357,0,157.2V19.156C0,8.576,7.918,0,17.685,0Z"
                    transform="translate(4.897 4.23)"
                    fill="#0d1b2b"
                    stroke="#707070"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </g>
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M14.7,0H154.309A14.7,14.7,0,0,1,169,14.7V200.5c0,16.813-66.917,50.66-83.729,50.66h0c-17.661,0-78.981-31.954-84.912-51.321C.154,199.167,0,121.49,0,120.6V14.7A14.7,14.7,0,0,1,14.7,0Z"
                  transform="translate(22.583 42.838)"
                  fill="#0e1d2d"
                  stroke="#09101a"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="5"
                />
                <text
                  id="wesal_package"
                  data-name="wesal
package"
                  transform="translate(107.585 155.838)"
                  fill="#b07427"
                  stroke="#d3b160"
                  strokeWidth="1"
                  fontSize="29"
                  fontFamily="Sitka Display"
                  fontWeight="700"
                >
                  <tspan x="-45.324" y="0">
                    WESAL
                  </tspan>
                  <tspan x="-59.656" y="44">
                    PACKAGE
                  </tspan>
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="border-[#96763F] border-[1px] rounded-xl text-center m-auto p-2   ">
          <h3 className="text-[#b07427] font-bold stroke-[#d3b160] text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-[#CEAE6F]">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] text-[${tag.color}]`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Baqat = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.backend.support-constructions.com/website/api/baqas"
        );
        setPackages(response.data);
      } catch (error) {
        console.error("Error occurred while fetching baqas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          Choose the package that suits you
        </p>
        <h2 className={`${styles.sectionHeadText}`}>packages.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
  Choose the package that suits you. {packages.length}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 "  >
        {packages.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Baqat, "");
