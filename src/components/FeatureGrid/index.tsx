import React from 'react';
import styles from './FeatureGrid.module.css';

export default function FeatureGrid({ features }) {
  return (
    <div className={styles.grid}>
      {features.map((f, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.icon}>{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </div>
  );
}
