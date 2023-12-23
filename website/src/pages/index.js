import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';



const FeatureList = [
  {
    title: 'Responsbile AI Principles',
    tag: 'Concepts',
    tagColor: 'badge badge--primary',
    img: "img/landing/rai-collection-1.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Responsible AI Dashboard',
    tag: 'Concepts',
    tagColor: 'badge badge--primary',
    img: "img/landing/rai-collection-1.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 3',
    tag: 'Tabular Model',
    tagColor: 'badge badge--warning',
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 4',
    tag: 'Tabular Model',
    tagColor: 'badge badge--warning',
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 5',
    tag: 'Tabular Model',
    tagColor: 'badge badge--warning',
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 6',
    tag: 'Text Model',
    tagColor: 'badge badge--success',
    img: "img/landing/rai-collection-6.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 7',
    tag: 'Text Model',
    tagColor: 'badge badge--success',
    img: "img/landing/rai-collection-6.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 8',
    tag: 'Text Model',
    tagColor: 'badge badge--success',
    img: "img/landing/rai-collection-6.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 9',
    tag: 'Vision Model',
    tagColor: 'badge badge--danger',
    img: "img/landing/rai-collection-7.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: 'Exercise 10',
    tag: 'Vision Model',
    tagColor: 'badge badge--danger',
    img: "img/landing/rai-collection-7.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
];


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

function Feature({img, title, description, tag, tagColor}) {
  return (
    <div className={clsx('col col--3')}>
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
              <span className={tagColor}>{tag}</span>
            </small>
          </div>
          <div className="card__footer">
            <button className="button disabled button--info button--block">Open Notebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`#30DaysOf Responsible AI`}
      description="Learn Responsible AI Principles and see them in practice using open-source Responsible AI Toolbox components with a Responsible AI Dashboard.">
      <PageHeader />
      <main>
        <PageFeatures />
      </main>
    </Layout>
  );
}
