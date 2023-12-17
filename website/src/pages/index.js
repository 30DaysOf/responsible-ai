import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function SectionCard() {
  return (
    <div className="card-demo">
      <div className="card">
        <div className="card__image">
          <img
            src="/img/landing/rai.jpeg"
            alt="Image alt text"
            title="Logo Title Text 1" />
        </div>
        <div className="card__body">
          <h4>Quaco Lighthouse</h4>
          <small>
            The Quaco Head Lighthouse is a well maintained lighthouse close to St.
            Martins. It is a short, beautiful walk to the lighthouse along the
            seashore.
          </small>
        </div>
        <div className="card__footer">
          <button className="button button--primary button--block">Visit</button>
        </div>
      </div>
    </div>
  );
}


function PageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/*
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
        */}
      </div>
    </header>
  );
}


function PageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

/*
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
*/

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card-demo">
        <div className="card">
          <div className="card__image">
            <img
              src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="Image alt text"
              title="Logo Title Text 1" />
          </div>
          <div className="card__body">
            <h4>{title}</h4>
            <small>
              {description}
            </small>
          </div>
          <div className="card__footer">
            <button className="button button--primary button--block">Visit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
];


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <PageHeader />
      <main>
        <PageFeatures />
      </main>
    </Layout>
  );
}
