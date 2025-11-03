import React from 'react';
import Link from '@docusaurus/Link';
import styles from './DocCard.module.css';

interface DocCardProps {
  title: string;
  description: string;
  to: string;
  icon?: string;
}

export default function DocCard({ title, description, to, icon = '📄' }: DocCardProps): JSX.Element {
  return (
    <Link to={to} className={styles.docCard}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      <span className={styles.arrow}>→</span>
    </Link>
  );
}
