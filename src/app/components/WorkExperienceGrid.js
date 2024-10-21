import React from "react";
import { GRIDS } from "../constants";

export default function WorkExperienceGrid({ setCurrentGrid }) {
  const experiences = [
    {
      company: "Zingvel Travels",
      role: "Mobile Application Developer",
      duration: "March 2024 - May 2024",
      work: [
        `Built and optimized the travel app’s UI using React Native and TypeScript, integrating and testing RESTful APIs
 for reliable backend communication.`,
        `Used JEST for comprehensive testing and employed advanced technologies like Redux and React Navigation to
 enhance app performance.`,
        `Worked with Git for version control and coordinated with cross-functional teams to maintain code integrity and
 drive continuous improvement.`
      ],
      technologies: [`Typescript`, `React`, `React-Native`, `NodeJS`, `SQLLite`],
    },
  ];

  const handleBackClick = () => {
    setCurrentGrid(GRIDS[0]); // Set the current grid to the HomeGrid
  };

  return (
    <div className='min-h-screen flex flex-col p-5 bg-gray-100'> {/* Ensure full height */}
      <h1 className='text-3xl font-bold mb-5 text-gray-800'>Work Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className='mb-5 border p-4 rounded-lg bg-white shadow'>
          <h2 className='text-xl font-semibold text-gray-800'>{exp.company}</h2> {/* Darker text */}
          <p className='text-sm text-gray-600'>{exp.role} - {exp.duration}</p>
          <ul className='mt-2 text-gray-700'>
            {exp.work.map((task, taskIndex) => (
              <li key={taskIndex}>• {task}</li> // Display tasks as a list
            ))}
          </ul>
          <div className='mt-2 text-gray-700'>
            <strong>Technologies used: </strong>
            {exp.technologies.join(", ")}
          </div>
        </div>
      ))}
       <div className='flex justify-center mt-auto'> {/* Centering the button */}
        <button 
          onClick={handleBackClick} 
          className='bg-blue-500 text-white p-2 rounded mb-4 text-sm' // Smaller button
        >
        Back to Home
      </button>
    </div>
    </div>
  );
}
