import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/mocData';
import styles from './index.module.css';

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 }
  };
  return (
    <div className={styles.project} id="project">
      <div className={styles.projectContainer}>
        <motion.h2
          transition={{ type: 'linear', duration: 1 }}
          animate={isInView ? 'enter' : 'hidden'}
          variants={variants}
          initial="hidden"
          exit="hidden"
          ref={ref}>
          Projects
        </motion.h2>
        <ul className={styles.projectList}>
          {projects.map((el) => {
            return (
              <li key={el?.name}>
                <a href={el.path}>
                  <div className={styles.imgContainer}>
                    <img src={el?.img} />
                  </div>
                  <div className={styles.projectDescription}>
                    <h3>{el?.name}</h3>
                    <p>{el?.text}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Project;
