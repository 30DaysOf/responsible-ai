import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';



const FeatureList = [
  {
    title: '🧰 | Responsbile AI Principles',
    isConcept: true,
    isDebugging: false,
    isDecision: false,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '🧰 | Responsible AI Dashboard',
    isConcept: true,
    isDebugging: false,
    isDecision: false,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '🧰 | Error Analysis Dashboard',
    isConcept: true,
    isDebugging: false,
    isDecision: false,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '🧰 | Interpretability Dashboard',
    isConcept: true,
    isDebugging: false,
    isDecision: false,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '🧰 | Fairness Dashboard',
    isConcept: true,
    isDebugging: false,
    isDecision: false,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '🧰 | Getting Started',
    isConcept: true,
    isDebugging: false,
    isDecision: false,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📒 | Census Classification',
    notebook: 'Tabular',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📒 | Diabetes Regression Pt. 1',
    notebook: 'Tabular',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📒 | Diabetes Regression Pt. 2',
    notebook: 'Tabular',
    isConcept: false,
    isDebugging: false,
    isDecision: true,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📒 | Housing Classification Pt.1',
    notebook: 'Tabular',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📒 | Housing Classification Pt.2',
    notebook: 'Tabular',
    isConcept: false,
    isDebugging: false,
    isDecision: true,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📒 | DNN Multiclass',
    notebook: 'Tabular',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📒 | Orange Juice Forecasting',
    notebook: 'Tabular',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📕 | Blbooksgenre Classification',
    notebook: 'Text',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📕 | Covid Event Classification',
    notebook: 'Text',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📕 | DBPedia Text Classification',
    notebook: 'Text',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📕 | OpenAI Exploration',
    notebook: 'Text',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📕 | Question Answering',
    notebook: 'Text',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📗 | Fridge Image Classification',
    notebook: 'Vision',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-2.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📗 | Fridge Multi Classification',
    notebook: 'Vision',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-2.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '📗 | Fridge Object Detection',
    notebook: 'Vision',
    isConcept: false,
    isDebugging: true,
    isDecision: false,
    img: "img/landing/rai-collection-2.jpeg",
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

function Feature({img, title, description, notebook, isConcept, isDebugging, isDecision}) {
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
              { isConcept &&  <span className="badge badge--secondary margin-left--xs"> Concept </span>}
              { notebook!=null && <span className="badge badge--primary margin-left--xs"> {notebook} </span>}
              { isDebugging && <span className="badge badge--danger margin-left--xs"> Model Debugging </span>}
              { isDecision && <span className="badge badge--success margin-left--xs"> Decision Making </span>}
            </small>
          </div>
          <div className="card__footer">
            {
              notebook==null ?
              <button className="button disabled button--secondary button--block">Learn Concept</button> :
              <button className="button disabled button--info button--block">Launch Notebook</button>               
            }
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
