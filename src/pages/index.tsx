import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>ALARMiator wird komplett von ehrenamtlich Tätigen aus Rettungsorganisationen entwickelt. Dem Ziel, eine vollumfängliche Lösung für Feuerwehren und andere BOS-Einheiten anzubieten sind wir schon sehr nah. Egal ob Mitgliederverwaltung, Inventarmanagement, Zusatzalarmierung oder Verwaltung des Ausbildungsstandes, ALARMiator bietet schon heute Module für diese Bereiche einer jeden Organisation. Es entstehen keine Kosten für die Nutzung. Das Projekt finanziert sich durch den Einsatz der Freizeit der beteiligten Entwickler.</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Aus dem Ehrenamt für das Ehrenamt`}
      description="ALARMiator Zusatzalarmierung und Organisationsverwaltung">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
