import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";
//dasjdashj
export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Projects".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading =
    "Here are a few personal projects I've worked on over the years".split("");

  const projects = [
    {
      title: "Stock Screener App",
      description: "A stock screener built with React Native and Alpaca API.",
      github: "https://github.com/username/stock-screener-app",
    },
    {
      title: "Sentiment Analysis Tool",
      description: "A tool to analyze market sentiment for stock trading.",
      github: "https://github.com/username/sentiment-analysis-tool",
    },
    {
      title: "Shopping App",
      description: "A full-featured e-commerce app with a cart and checkout.",
      github: "https://github.com/username/shopping-app",
    },
  ];

  const [openProject, setOpenProject] = useState(null); 

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

  const trails = useTrail(projects.length, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  const handleProjectClick = (idx) => {
    if (openProject === idx) {
      setOpenProject(null);
    } else {
      setOpenProject(idx);
    }
  };

  return (
    <animated.div className="grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200">
      {projects.map((project, idx) => (
        <animated.div
          key={idx}
          style={animatedStyles}
          onClick={() => handleProjectClick(idx)} 
          className={`cursor-pointer transition-all duration-500 ease-in-out ${
            openProject === idx
              ? "lg:col-span-9 lg:row-span-9"
              : "lg:col-span-3 lg:row-span-3"
          }`}
        >
          <animated.div
            style={trails[idx]}
            className={`w-full h-full p-10 ${
              idx % 2 === 0 ? "bg-[#386641]" : "bg-[#BC4749]"
            } border border-black flex flex-col items-center justify-center gap-3`}
          >
            <div className="border border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-3">
              <h3 className="text-2xl font-bold text-[#BC4749]">
                {project.title}
              </h3>
            </div>
            {openProject === idx && (
              <div className="border text-center border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-2">
                <p className="lg:text-md text-[#BC4749]">{project.description}</p>
                <a
                  href={project.github}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
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
