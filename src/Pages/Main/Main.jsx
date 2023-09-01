import React from 'react';
import styles from './styles.module.css'; 

export const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>Добро пожаловать на наш сайт!</h1>
      <p className={styles.mainDescription}>
        Мы предлагаем инновационные решения для ваших потребностей.
      </p>

      <div className={styles.mainFeatures}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Качество</h2>
          <p className={styles.featureDescription}>
            Мы гарантируем высокое качество наших продуктов и услуг.
          </p>
        </div>

        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Профессионализм</h2>
          <p className={styles.featureDescription}>
            Наша команда состоит из опытных профессионалов в области разработки и дизайна.
          </p>
        </div>

        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Инновации</h2>
          <p className={styles.featureDescription}>
            Мы всегда следим за последними технологическими трендами и инновациями.
          </p>
        </div>
      </div>
    </div>
  );
};

