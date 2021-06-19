import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { connect } from 'react-redux';
import {
  currentUserName,
  isAuthentificated,
} from '../../redux/auth/auth-selectors';
import { variants } from '../../utils/motionVar';
import s from './DefaultView.module.css';

const DefaultLoggedInView = ({ userName, isAuthentificated }) => {
  return (
    <div className="container">
      <AnimatePresence>
        <motion.h1
          className={s.title}
          initial={variants.hidden}
          animate={variants.visible}
          exit="exit"
          transition={{
            delay: 0.1,
          }}
          variants={variants}
        >
          Welcome 👋
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence>
        <motion.p
          className={s.text}
          initial={variants.hidden}
          animate={variants.visible}
          exit="exit"
          transition="transition"
          variants={variants}
        >
          Now you will exactly not forget your contacts!
        </motion.p>
      </AnimatePresence>

      <AnimatePresence>
        <motion.p
          className={s.info}
          initial={variants.hidden}
          animate={variants.visible}
          exit="exit"
          transition="transition"
          variants={variants}
        >
          Please, <b>Sign up</b> or <b>Log in</b> to have access to the
          Phonebook!
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: currentUserName(state),
  isAuthentificated: isAuthentificated(state),
});

export default connect(mapStateToProps)(DefaultLoggedInView);
