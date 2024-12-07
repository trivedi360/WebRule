import ToolCard from "./ToolCard";
// import React from "react";

const TechStack = () => {
  const data = [
    {
      image: "../image/html-5.png",
      label: "HTML",
    },
    {
      image: "../image/css-3.png",
      label: "CSS",
    },
    {
      image: "../image/java-script.png",
      label: "JavaScript",
    },
    {
        image: "../image/NodeJS.png",
        label: "Node JS",
    },
    {
      image: "../image/ReactJs.png",
      label: "React JS",
    },
    {
      image: "../image/database.png",
      label: "My SQL",
    },
    {
      image: "../image/firebase.png",
      label: "Firebase",
    },
    {
      image: "../image/github.png",
      label: "Git-Hub",
    },
    {
      image: "../image/git.png",
      label: "Git",
    },
    {
      image: "../image/tailwind.png",
      label: "Tailwind",
    },
    {
      image: "../image/netlify.png",
      label: "Netlify",
    },
    {
      image: "../image/visual-studio.png",
      label: "Visual Studio",
    },
    {
      image: "../image/wordPress.png",
      label: "WordPress",
    },
    {
      image: "../image/AWS.png",
      label: "AWS",
    },
    {
        image: "../image/bootstrap.png",
        label: "Bootstrap",
    },
  ];
  console.log(data[0]);
  return (
    <div className="techstack-section">
      <h1>Our Toolbox</h1>
      <div className="techstack-main">
        {data.map((val, idx) => (
          <ToolCard key={idx} message={val}/>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
