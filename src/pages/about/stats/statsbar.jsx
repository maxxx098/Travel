import React from "react";
import "./statsBar.css";

const StatsBar = () => {
  const stats = [
    { value: "10", label: "World Of Experiences" },
    { value: "2K+", label: "Fine Destinations" },
    { value: "10K+", label: "Customer Reviews" },
    { value: "4.8", label: "Overall Rating" },
  ];

  return (
   <section className="statsBar_section ">
     <div className="stats-bar container">
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
   </section>
  );
};

export default StatsBar;
