import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { motion, useInView } from 'framer-motion';
import sendToTg from '../../api';
import contactsOrange from '../assets/icon/contactsOrange.svg';
import styles from './index.module.css';
function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 }
  };
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState({});
  const [success, setSuccess] = useState(false);
  const [errorsTg, setErrorsTg] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const onChange = (name, value) => {
    setLoading(false);
    setState({ ...state, [name]: value });
  };
  const isValid = () => {
    let errors = {};
    const isValidEmail = emailRegex.test(state?.email);

    //name
    if (!state?.name) {
      errors.name = 'This field is required';
    } else if (state?.name?.length < 3) {
      errors.name = 'Field must contain at least 3 letters';
    } else if (state?.name?.length > 25) {
      errors.name = 'Field must contain no more than  25 letters';
    }
    //email
    if (!state?.email) {
      errors.email = 'This field is required';
    } else if (!isValidEmail) {
      errors.email = 'The mail was entered incorrectly';
    }
    //message
    if (!state?.message) {
      errors.message = 'This field is required';
    }
    if (Object.values(errors).length) {
      setHasError(errors);
      return false;
    }
    return true;
  };
  console.log(hasError);

  const onSubmit = async (e) => {
    const isValidEmail = emailRegex.test(state?.email);
    e.preventDefault();
    isValid(true);
    if (isValidEmail && !!state?.name && !!state?.message) {
      setLoading(true);
      try {
        const resp = await sendToTg({
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: state
        });
        if (resp.status !== 200) {
          throw resp;
        } else {
          setLoading(false);
          setState({ name: '', email: '', message: '' });
          setSuccess(true);
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
        setState({ name: '', email: '', message: '' });
        setErrorsTg(true);
      }
    }
  };
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contactForm}>
        <form className={styles.form} onSubmit={onSubmit}>
          <motion.h2
            transition={{ type: 'linear', duration: 1 }}
            animate={isInView ? 'enter' : 'hidden'}
            variants={variants}
            initial="hidden"
            exit="hidden"
            ref={ref}>
            Let’s talk business
          </motion.h2>
          <div className={styles.formLabel}>
            <label>Name * </label>

            <input
              className={styles.input}
              value={state?.name}
              onChange={(e) => onChange('name', e?.target?.value)}
            />
            <span className={styles.error}>{hasError?.name}</span>
          </div>
          <div className={styles.formLabel}>
            <label>Email *</label>
            <input
              className={styles.input}
              value={state?.email}
              onChange={(e) => onChange('email', e?.target?.value)}
            />
            <span className={styles.error}>{hasError?.email}</span>
          </div>
          <div className={styles.formLabel}>
            <label>Message *</label>
            <input
              className={styles.input}
              value={state?.message}
              onChange={(e) => onChange('message', e?.target?.value)}
            />
            <span className={styles.error}>{hasError?.message}</span>
          </div>
          <div className={styles.sendBtn}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              class="contactBtn"
              disabled={loading}
              onClick={onSubmit}>
              Send
            </Button>
          </div>
        </form>
        <img src={contactsOrange} />
      </div>
      {success && (
        <div className={styles.preloader}>
          <span>I will contact you shortly</span>
          <button type="button" onClick={() => setSuccess(false)} className={styles.btnResend}>
            resend
          </button>
        </div>
      )}
      {errorsTg && (
        <div className={styles.preloader}>
          <span>
            Ops... Something went wrong. Contact me in a way convenient for you or try again.
          </span>
          <button type="button" onClick={() => setErrorsTg(false)} className={styles.btnResend}>
            resend
          </button>
        </div>
      )}
    </div>
  );
}
export default Contact;
