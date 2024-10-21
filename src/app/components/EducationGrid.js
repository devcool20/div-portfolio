import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";

export default function EducationGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Education".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "Here are my educational qualifications".split("");

  const education = [
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "ABC University",
      year: "2017 - 2021",
    },
    {
      title: "High School Diploma",
      institution: "XYZ High School",
      year: "2015 - 2017",
    },
  ];

  const [openEducation, setOpenEducation] = useState(null); // Controls the expansion of individual items

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  });

  const trails = useTrail(education.length, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  const handleEducationClick = (idx) => {
    if (openEducation === idx) {
      setOpenEducation(null);
    } else {
      setOpenEducation(idx);
    }
  };

  return (
    <animated.div className="grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200">
      {education.map((item, idx) => (
        <animated.div
          key={idx}
          style={animatedStyles}
          onClick={() => handleEducationClick(idx)} // Handle click to expand/collapse
          className={`cursor-pointer transition-all duration-500 ease-in-out ${
            openEducation === idx
              ? "lg:col-span-9 lg:row-span-9"
              : "lg:col-span-3 lg:row-span-3"
          }`}
        >
          <animated.div
            style={trails[idx]}
            className={`w-full h-full p-10 ${
              idx % 2 === 0 ? "bg-[#F4A261]" : "bg-[#E76F51]"
            } border border-black flex flex-col items-center justify-center gap-3`}
          >
            <div className="border border-neutral-900 bg-[#264653] w-fit px-5 py-3">
              <h3 className="text-2xl font-bold text-[#E76F51]">
                {item.title}
              </h3>
              <p className="text-md text-[#264653]">{item.institution}</p>
              <p className="text-md text-[#264653]">{item.year}</p>
            </div>
            {openEducation === idx && (
              <div className="border text-center border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-2">
                <p className="lg:text-md text-[#264653]">
                  {item.institution}, {item.year}
                </p>
                <button
                  onClick={() => setCurrentGrid(GRIDS[0])} // Back to HomeGrid
                  className="mt-5 text-white bg-blue-500 px-3 py-2 rounded-lg"
                >
                  Back to Home
                </button>
              </div>
            )}
          </animated.div>
        </animated.div>
      ))}
    </animated.div>
  );
}
