import React, { useState, useRef } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { infoData } from '../data/mocData';
import { motion, useInView } from 'framer-motion';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from './index.module.css';

function NavBar() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 }
  };
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const navigation = [
    { title: 'Experience', path: '#experience' },
    { title: 'Contact', path: '#contact' },
    { title: 'Skills', path: '#skills' },
    { title: 'Projects', path: '#project' }
  ];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {navigation.map((text) => (
          <ListItem key={text?.title} disablePadding>
            <a href={text?.path} className={styles.link}>
              <ListItemButton>
                <ListItemText primary={text?.title} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <motion.h1
          transition={{ type: 'linear', duration: 1 }}
          animate={isInView ? 'enter' : 'hidden'}
          variants={variants}
          initial="hidden"
          exit="hidden"
          ref={ref}>
          {infoData.shortName}
        </motion.h1>
        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)} className="menuSharpBtn">
                <IoMenuSharp class="menuSharp" />
              </Button>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
