import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

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

function Feature({img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card-demo">
        <div className="card">
          <div className="card__image">
            <img
              src={img}
              alt={description}
              title={title} />
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
    title: 'Exercise 1',
    img: "img/landing/rai-collection-1.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 2',
    img: "img/landing/rai-collection-2.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 3',
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 4',
    img: "img/landing/rai-collection-4.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 5',
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 6',
    img: "img/landing/rai-collection-6.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 7',
    img: "img/landing/rai-collection-7.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 8',
    img: "img/landing/rai-collection-8.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 9',
    img: "img/landing/rai-collection-9.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 10',
    img: "img/landing/rai-collection-10.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
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
