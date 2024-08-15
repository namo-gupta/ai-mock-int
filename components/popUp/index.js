import React from 'react';
import styles from './style.module.css'; 

const Popup = ({ title,  children, description }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.popupHeader}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.popupContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
