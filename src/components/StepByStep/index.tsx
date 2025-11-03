import React from 'react';
import styles from './StepByStep.module.css';

interface Step {
  title: string;
  children: React.ReactNode;
}

interface StepByStepProps {
  children: React.ReactElement<Step>[];
}

export function Step({ title, children }: Step): JSX.Element {
  return (
    <div className={styles.step}>
      <div className={styles.stepTitle}>{title}</div>
      <div className={styles.stepContent}>{children}</div>
    </div>
  );
}

export default function StepByStep({ children }: StepByStepProps): JSX.Element {
  return (
    <div className={styles.stepByStep}>
      {React.Children.map(children, (child, index) => (
        <div className={styles.stepWrapper}>
          <div className={styles.stepNumber}>{index + 1}</div>
          <div className={styles.stepBody}>
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
