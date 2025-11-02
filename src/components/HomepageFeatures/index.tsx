import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import FeatureGrid from '@site/src/components/FeatureGrid';


type FeatureItem = {
  title: string;
  icon: string; // using images instead of SVG imports
  description: ReactNode;
};


export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">

        <FeatureGrid
          features={[
            {
              icon: <i className="fa fa-laptop txt-pink" />,
              title: "Zusatzalarmierung",
              description: "Mit unserer iPhone und Android App alarmierst Du Deine Kräfte im Einsatzfall schnell und intuitiv."
            },
            {
              icon: <i className="fa fa-building txt-pink" />,
              title: "Eine oder viele Organisationen",
              description: "ALARMiator kann eine einzelne Organisation verwalten oder beliebig viele."
            },
            {
              icon: <i className="fa fa-cogs txt-pink" />,
              title: "Organisationsverwaltung",
              description: "Mitglieder, Inventar, Termine – alles zentral verwaltet."
            },
            {
              icon: <i className="fa fa-bullhorn txt-pink" />,
              title: "Ausgehende Alarmierung",
              description: "Alarmierung über Apps, DIVERA, SMS, Sprachanruf oder E-Mail."
            },
            {
              icon: <i className="fa fa-puzzle-piece txt-pink" />,
              title: "Maximal flexibel",
              description: "Plugins ermöglichen Anpassungen und Erweiterungen."
            },
            {
              icon: <i className="fa fa-bullhorn txt-pink" />,
              title: "Eingehende Alarmierung",
              description: "Alarmzugang über KatSys, ILS Fax oder REST-API."
            },
     
            {
              icon: <i className="fa fa-plug txt-pink" />,
              title: "Automatisierung",
              description: "Steuert MQTT-Systeme und Gebäudetechnik im Alarmfall."
            },
            {
              icon: <i className="fa fa-forumbee txt-pink" />,
              title: "Community",
              description: "Treffe Anwender und Entwickler in unserer Community."
            },
            {
              icon: <i className="fa fa-map-marker txt-pink" />,
              title: "Hydrantenverwaltung",
              description: "Hydrantenübersicht in App und Einsatzinformationen."
            },
            {
              icon: <i className="fa fa-fax txt-pink" />,
              title: "Alarmdepesche 2.0",
              description: "Automatisch generierte und druckbare Alarmdepesche."
            },
            {
              icon: <i className="fa fa-tv txt-pink" />,
              title: "Wallboards",
              description: "Unbegrenzte Alarmmonitore für jeden Standort."
            },
            {
              icon: <i className="fa fa-calendar txt-pink" />,
              title: "Terminverwaltung",
              description: "Termine und Erinnerungen direkt in der ALARMiator App."
            },
          ]}
        />

      </div>
    </section>
  );
}
