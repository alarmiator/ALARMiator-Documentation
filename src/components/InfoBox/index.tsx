import React from 'react';
import styles from './InfoBox.module.css';

interface InfoBoxProps {
  children: React.ReactNode;
  title?: string;
  type?: 'info' | 'tip' | 'warning' | 'danger';
}

const icons = {
  info: '💡',
  tip: 'ℹ️',
  warning: '⚠️',
  danger: '🚨'
};

const titles = {
  info: 'Info',
  tip: 'Tipp',
  warning: 'Achtung',
  danger: 'Wichtig'
};

export default function InfoBox({ children, title, type = 'info' }: InfoBoxProps): JSX.Element {
  const displayTitle = title || titles[type];

  return (
    <div className={`${styles.infoBox} ${styles[type]}`}>
      <div className={styles.header}>
        <span className={styles.icon}>{icons[type]}</span>
        <strong className={styles.title}>{displayTitle}</strong>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
