import React, { useState, useEffect } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import PackageCard from "./PackageCard";
import Contact from "./Contact";
import { StarsCanvas } from "./canvas";
import axios from "axios";

const PackageDetail = () => {
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(
          `https://www.backend.support-constructions.com/website/api/baqas/${id}`
        );
        setSelectedPackage(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error occurred while fetching package:", error);
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const description =
    selectedPackage && selectedPackage.description && selectedPackage.description[0]
      ? selectedPackage.description[0][0].toUpperCase()
      : "";

  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>Wesal is producing</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        {selectedPackage && selectedPackage.name}
      </h2>
      {description && (
        <p className="text-center">{description}</p>
      )}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {selectedPackage &&
            selectedPackage.tags.map((experience, index) => (
              <PackageCard
                key={`package-${index}`}
                packageData={experience}
              />
            ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(PackageDetail, "work");