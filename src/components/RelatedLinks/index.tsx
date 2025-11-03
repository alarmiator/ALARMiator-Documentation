import React from 'react';
import Link from '@docusaurus/Link';
import styles from './RelatedLinks.module.css';

interface RelatedLink {
  title: string;
  to: string;
  description?: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
}

export default function RelatedLinks({ links, title = '📚 Siehe auch' }: RelatedLinksProps): JSX.Element {
  return (
    <div className={styles.relatedLinks}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <Link to={link.to} className={styles.link}>
              <span className={styles.linkTitle}>{link.title}</span>
              {link.description && (
                <span className={styles.linkDescription}>{link.description}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
