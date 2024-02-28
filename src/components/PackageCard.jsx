import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const PackageCard = ({ packageData }) => {
  const colors = ["#00939C", "#C2DEFF", "#FFC2C2", "#FFC2C2", "#FFE3C2", "#E4FFC2", "#FFC2E3"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const description = packageData.description ? packageData.descriptions[0] : "";
  const tags = packageData.descriptions || [];
  console.log(packageData)
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={`#${packageData.name}`}
      iconStyle={{ background: randomColor }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <span className="text-white text-[24px] font-bold">
            {description}
          </span>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{packageData.name}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
  {description}
        </p>
      </div>
      
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {tags.map((tag, index) => (
          <li
            key={`tag-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {tag}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default PackageCard;