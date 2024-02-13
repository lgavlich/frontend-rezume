import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './index.module.css';

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 }
  };
  return (
    <div className={styles.footer}>
      <motion.p
        transition={{ type: 'linear', duration: 1 }}
        animate={isInView ? 'enter' : 'hidden'}
        variants={variants}
        initial="hidden"
        exit="hidden"
        ref={ref}>
        Made with <FavoriteIcon /> by Pryshchepa Lyudmyla
      </motion.p>
    </div>
  );
}
export default Footer;
