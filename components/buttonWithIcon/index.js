import React from 'react';
import styles from './style.module.css'; 

const SocialButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.buttonWithIcon}>
      {children}
    </button>
  );
};

export default SocialButton;
