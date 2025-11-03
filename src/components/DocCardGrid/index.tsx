import React from 'react';
import styles from './DocCardGrid.module.css';

interface DocCardGridProps {
  children: React.ReactNode;
  cols?: 2 | 3;
}

export default function DocCardGrid({ children, cols = 2 }: DocCardGridProps): JSX.Element {
  return (
    <div className={`${styles.docCardGrid} ${styles[`cols${cols}`]}`}>
      {children}
    </div>
  );
}
