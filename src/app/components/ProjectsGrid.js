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
      title: "Formula 1 Experience App",
      description: "F1 fan app (React Native + Supabase) with community forums, merchandise store, and live screening ticket bookings.",
      tech: " Typescript, ReactNative, Supabase, Expo",
      github: "https://github.com/devcool20/projectf1",
    },
    {
      title: "Stocker",
      description: "Engineered an innovative stock aggregation app leveraging TypeScript and React Native, enabling users to track top-performing U.S. financial market stocks and make informed investment decisions through real-time data analysis. Integrated live news feeds and implemented advanced machine learning models to perform sentiment analysis on market news, providing users with actionable insights on market trends and stock performance.",
      tech: "Typescript, React Native, Tensorflow, Machine Learning",
      github: "https://github.com/devcool20/stocker",
    },
    {
      title: "Web3 Website Uptime Monitor",
      description: "Developed a decentralized website uptime monitoring tool using Next.js and Solidity, enabling users to track the availability of their websites in real-time. Leveraged blockchain technology to ensure transparency and reliability in monitoring services, providing users with a secure and efficient solution for website uptime management.",
      tech  : "Next.js, Solidity, Web3",
      github: "https://github.com/devcool20/dpin-uptime",
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
                <p className="lg:text-md text-[#BC4749]">{project.tech}</p>
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
