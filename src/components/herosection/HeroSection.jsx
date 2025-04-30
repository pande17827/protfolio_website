import React from "react";
import styles from "./HeroSection.module.css";
import RobotModel from "../robotmodel/RobotModel";
import VisualGraph from "../visualgraph/VisualGraph";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* VisualGraph - Left */}
      {/* <div className={styles.visualGraphContainer}>
        <VisualGraph />
      </div> */}

      {/* Text Content - Center */}
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          Transforming <span className={styles.highlight}>data</span> into decisions
        </h1>
        {/* <p className={styles.subheading}>
          AI-powered insights turning raw data into meaningful decisions for your business.
        </p> */}
        
      </div>

      {/* RobotModel - Right */}
      {/* <div className={styles.robotContainer}>
        <RobotModel />
      </div> */}
    </section>
  );
}