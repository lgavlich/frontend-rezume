import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { skillsIcon } from '../utils/skillsIcon';
import { motion, useInView } from 'framer-motion';
import { skillsData, skillsAll } from '../data/mocData';
import styles from './index.module.css';
function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 }
  };
  return (
    <div className={styles.skills} id="skills">
      <motion.h1
        transition={{ type: 'linear', duration: 1 }}
        animate={isInView ? 'enter' : 'hidden'}
        variants={variants}
        initial="hidden"
        exit="hidden"
        ref={ref}
        className={styles.title}>
        Skills
      </motion.h1>
      <div className={styles.skillsContainer}>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          delay={0}
          play={true}
          direction="left">
          {skillsData.map((skill, id) => {
            return (
              <div key={id} className={styles.skillBox}>
                <img src={skillsIcon(skill)} alt="skill" />
                <h3>{skill}</h3>
              </div>
            );
          })}
        </Marquee>
      </div>
      <ul className={styles.skillsList}>
        {skillsAll.map((el) => {
          return (
            <li key={el}>
              <span>{el}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
