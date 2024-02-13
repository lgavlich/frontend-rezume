import React, { useRef } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { infoData } from '../data/mocData';
import { motion, useInView } from 'framer-motion';
import Avatar from 'avataaars';
import { Button } from '@mui/material';
import styles from './index.module.css';
// import avatar from '../assets/image/avatar.webp';
function Banner() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 }
  };
  return (
    <div className={styles.banner} id="home">
      <div className={styles.bannerContainer}>
        <div className={styles.bannerLeft}>
          <ul>
            <li className={styles.socialLink}>
              <a href="https://www.linkedin.com/in/lyudmila-pryshchepa-552261232/">
                <FaLinkedin />
              </a>
            </li>
            <li className={styles.socialLink}>
              <a href="#">
                <FaGithub />
              </a>
            </li>
            <li className={styles.socialLink}>
              <a href="https://www.instagram.com/prishchepa_liudmila/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.bannerRight}>
          <Avatar
            avatarStyle="Circle"
            topType="LongHairBob"
            accessoriesType="Blank"
            hairColor="Blonde"
            facialHairType="Blank"
            clotheType="BlazerShirt"
            eyeType="Default"
            eyebrowType="Default"
            mouthType="Twinkle"
            skinColor="Pale"
            className={styles.bannerAvatar}
          />
          <motion.div
            transition={{ type: 'linear', duration: 1 }}
            animate={isInView ? 'enter' : 'hidden'}
            variants={variants}
            initial="hidden"
            exit="hidden"
            ref={ref}
            className={styles.bannerRightContent}>
            <h6>{infoData.name}</h6>
            <h1>{infoData.title}</h1>
            <p>{infoData.description}</p>
            <Button class="contactBtn">
              <a href="#contact">Contact</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
