import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experienceData, workExperienceData } from '../data/mocData';
import styles from './index.module.css';

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 }
  };
  return (
    <div className={styles.experience} id="experience">
      <div className={styles.line}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.lineStyling}></div>
      </div>
      <div className={styles.experienceContainer}>
        <motion.h2
          transition={{ type: 'linear', duration: 1 }}
          animate={isInView ? 'enter' : 'hidden'}
          variants={variants}
          initial="hidden"
          exit="hidden"
          ref={ref}>
          {experienceData.title}
        </motion.h2>
        <h3>{experienceData.description}</h3>
        <ul className={styles.listWork}>
          {workExperienceData.map((el) => {
            return (
              <li key={el?.number}>
                <div className={styles.year}>
                  <h3>{el?.number}</h3>
                  <span>{el?.year}</span>
                </div>
                <p>{el?.vocation}</p>
                <span>{el?.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Experience;
