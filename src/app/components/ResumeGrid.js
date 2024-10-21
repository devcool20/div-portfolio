import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";

import React from "react";

export default function ResumeGrid() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <div className="w-full h-full p-5">
        <iframe
          src="/resume-div.pdf"  // Pointing to public folder
          title="Resume"
          className="w-full h-[90vh] border border-neutral-900"
        ></iframe>
      </div>
    </div>
  );
}
