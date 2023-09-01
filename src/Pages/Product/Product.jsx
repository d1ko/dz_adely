import React from 'react';
import styles from './styles.module.css'; // Импортируйте стили

export const Product = () => {
  return (
    <div className={styles.productContainer}>
      <h1 className={styles.productTitle}>Наш Продукт</h1>
      <p className={styles.productDescription}>
        Наш продукт - это инновационное решение для ваших задач. Мы создали его с учетом ваших потребностей.
      </p>

      <div className={styles.productFeatures}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Высокое качество</h2>
          <p className={styles.featureDescription}>
            Мы гарантируем высокое качество нашего продукта и надежную поддержку.
          </p>
        </div>

        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Простота использования</h2>
          <p className={styles.featureDescription}>
            Наш продукт легко освоить и начать использовать в работе.
          </p>
        </div>

        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Техническая поддержка</h2>
          <p className={styles.featureDescription}>
            Наша команда готова помочь вам в решении любых технических вопросов.
          </p>
        </div>

        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Актуальные обновления</h2>
          <p className={styles.featureDescription}>
            Мы регулярно выпускаем обновления, чтобы ваш опыт использования продукта был еще лучше.
          </p>
        </div>
      </div>

      <div className={styles.productBenefits}>
        <h2 className={styles.productBenefitsTitle}>Преимущества нашего продукта</h2>
        <ul className={styles.benefitList}>
          <li className={styles.benefitItem}>Повышенная производительность</li>
          <li className={styles.benefitItem}>Гибкость и настраиваемость</li>
          <li className={styles.benefitItem}>Безопасность и конфиденциальность данных</li>
          <li className={styles.benefitItem}>Интеграция с другими системами</li>
        </ul>
      </div>

      <div className={styles.productCTA}>
        <h2 className={styles.productCTATitle}>Готовы начать?</h2>
        <p className={styles.productCTADescription}>
          Свяжитесь с нами, чтобы узнать больше о наших продуктах и начать сотрудничество.
        </p>
        <button className={styles.ctaButton}>Связаться с нами</button>
      </div>
    </div>
  );
};

