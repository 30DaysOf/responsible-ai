import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';


/**
 * TODO: Refactor to be more efficient later.
 *  Each feature is a card with the following properties:
 * - title: 2-3 workd title for card
 * - description: 1 line description for card
 * - img: link to static/img/landing/XXX image
 * - link: link to relevant resource
 * - isConcept: use if item is conceptual (not notebook exercise)
 * - isDebugging: use if RAII objective is model debugging
 * - isDecision: use if RAI objective is decision making
 * - isAzure: use if Notebook requires Azure ML
 * - notebook: use "Text", "Tabular", "Vision" to define model type
 * 
 * Specify a boolean property only if true (defaults to false)
 * Specify a string property only if not null (defaults to null)
 * title, description, img are mandatory
 */
const FeatureList = [
  {
    title: '#01 | Learn RAI Principles',
    isConcept: true,
    img: "img/landing/rai.jpeg",
    link: "https://www.microsoft.com/en-us/ai/principles-and-approach/",
    description: (
      <>
        Learn the 6 core principles for guiding AI development and usage: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, and Accountability.
      </>
    ),
  },

  /*
  {
    title: '#02 | Explore RAI Toolbox',
    isConcept: true,
    img: "img/landing/rai.jpeg",
    link: "https://responsibleaitoolbox.ai/",
    description: (
      <>
        Explore the open-source suite of tools providing model and data exploration and assessment UI libraries to help debug and understand AI systems.
      </>
    ),
  },
  {
    title: '#03 | Responsible AI Dashboard',
    isConcept: true,
    img: "img/landing/rai.jpeg",
    link: "https://responsibleaitoolbox.ai/introducing-responsible-ai-dashboard/",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#04 | Error Analysis Dashboard',
    isConcept: true,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#05 | Interpretability Dashboard',
    isConcept: true,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#06 | Fairness Dashboard',
    isConcept: true,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#07 | Explore RAI Mitigations',
    isConcept: true,
    img: "img/landing/rai.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#08 | Census Classification',
    notebook: 'Tabular',
    isDebugging: true,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#09 | Diabetes Regression Pt. 1',
    notebook: 'Tabular',
    isDebugging: true,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#10 | Diabetes Regression Pt. 2',
    notebook: 'Tabular',
    isDecision: true,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#11 | Housing Classification Pt.1',
    notebook: 'Tabular',
    isDebugging: true,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#12 | Housing Classification Pt.2',
    notebook: 'Tabular',
    isDecision: true,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#13 | DNN Multiclass',
    notebook: 'Tabular',
    isDebugging: true,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#14 | Orange Juice Forecasting',
    notebook: 'Tabular',
    isDebugging: true,
    img: "img/landing/rai-collection-3.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#15 | Blbooksgenre Classification',
    notebook: 'Text',
    isDebugging: true,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#16 | Covid Event Classification',
    notebook: 'Text',
    isDebugging: true,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#17 | DBPedia Text Classification',
    notebook: 'Text',
    isDebugging: true,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#18 | OpenAI Exploration',
    notebook: 'Text',
    isDebugging: true,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#19 | Question Answering',
    notebook: 'Text',
    isDebugging: true,
    img: "img/landing/rai-collection-5.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#19 | Fridge Image Classification',
    notebook: 'Vision',
    isDebugging: true,
    img: "img/landing/rai-collection-2.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#20 | Fridge Multi Classification',
    notebook: 'Vision',
    isDebugging: true,
    img: "img/landing/rai-collection-2.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#21 | Fridge Object Detection',
    notebook: 'Vision',
    isDebugging: true,
    img: "img/landing/rai-collection-2.jpeg",
    description: (
      <>
        This notebook will walk you through the process of ..... with the Responsible AI Toolkit.
      </>
    ),
  },
  {
    title: '#22 | Azure RAI Dashboard - Overiew',
    isConcept: true,
    isAzure: true,
    link: "https://learn.microsoft.com/azure/machine-learning/concept-responsible-ai-dashboard?view=azureml-api-2",
    img: "img/landing/rai-collection-1.jpeg",
    description: (
      <>
      Generate a Responsible AI dashboard and scorecard for your ML models on Azure. Learn the core components supported and how to generate a dashboard with a pipeline job, to debug & explore registered models.
      </>
    ),
  },
  {
    title: '#23 | Azure RAI Dashboard - Tabular',
    isConcept: true,
    isAzure: true,
    link: "https://aka.ms/mslearn-responsibleai-dashboard",
    img: "img/landing/rai-collection-1.jpeg",
    description: (
      <>
      Learn how to train a model and debug it with the Responsible AI Dashboard (using a built-in Azure Sandbox - no subscription needed) for a tabular dataset for Diabetes Patient Readmission Prediction.
      </>
    ),
  },
  {
    title: '#24 | Azure RAI Dashboard - Text (Preview)',
    isConcept: true,
    isAzure: true,
    link: "https://learn.microsoft.com/azure/machine-learning/how-to-responsible-ai-text-dashboard?view=azureml-api-2",
    img: "img/landing/rai-collection-1.jpeg",
    description: (
      <>
      The RAI toolbox for text data is customizable & interoperable. Select components to perform analytical functions for Model Assessment and Debugging, then identify & diagnose issues to improve them.
      </>
    ),
  },
  {
    title: '#25 | Azure RAI Dashboard - Image (Preview)',
    isConcept: true,
    isAzure: true,
    link: "https://learn.microsoft.com/azure/machine-learning/how-to-responsible-ai-image-dashboard?view=azureml-api-2",
    img: "img/landing/rai-collection-1.jpeg",
    description: (
      <>
      The Responsible AI image dashboards are linked to your registered computer vision models in Azure Machine Learning. While some steps are common to all scenarios, some features are unique to image scenarios.
      </>
    ),
  },
  {
    title: '#26 | Azure RAI Scorecard - PDF',
    isConcept: true,
    isAzure: true,
    link: "https://learn.microsoft.com/azure/machine-learning/how-to-responsible-ai-text-dashboard?view=azureml-api-2",
    img: "img/landing/rai-collection-1.jpeg",
    description: (
      <>
      Generate a Responsible AI dashboard and scorecard for your ML models on Azure - via a pipeline job by using core & helper Responsible AI components.
      </>
    ),
  },

  /**
   * Azure ML Samples Are Here
   * https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/README.md
   * 
   * 4 core components supported in RAI Dashboard
   * Explanation
   * Error Analysis
   * Counterfactuals
   * Causal Analysis
   * 
   * Configuration:
   * Azure Subscription
   * Azure Resource Group 
   * Azure ML Workspace 
   *
  {
    title: '#26 | ProgrammersML Regression',
    notebook: 'Tabular',
    isAzure: true,
    isDebugging: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-programmer-regression-model-debugging/responsibleaidashboard-programmer-regression-model-debugging.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis, Causal analysis, Counterfactuals
      </>
    ),
  },
  {
    title: '#27 | Finance Classification',
    notebook: 'Tabular',
    isAzure: true,
    isDebugging: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-finance-loan-classification/responsibleaidashboard-finance-loan-classification.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis, Causal analysis, Counterfactuals
      </>
    ),
  },
  {
    title: '#28 | Healthcare Classification',
    notebook: 'Tabular',
    isAzure: true,
    isDebugging: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-healthcare-covid-classification/responsibleaidashboard-healthcare-covid-classification.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis, Causal analysis, Counterfactuals
      </>
    ),
  },
  {
    title: '#29 | Education Classification',
    notebook: 'Tabular',
    isDebugging: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-education-student-attrition-classificaton/responsibleaidashboard-education-student-attrition-classificaton.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis, Causal analysis, Counterfactuals
      </>
    ),
  },
  {
    title: '#30 | Kaggle Housing Classification',
    notebook: 'Tabular',
    isDebugging: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-housing-classification-model-debugging/responsibleaidashboard-housing-classification-model-debugging.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis, Causal analysis, Counterfactuals
      </>
    ),
  },
  {
    title: '#31 | Kaggle Housing Decision Making',
    notebook: 'Tabular',
    isDecision: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-housing-classification-model-debugging/responsibleaidashboard-housing-classification-model-debugging.ipynb",
    description: (
      <>
        This notebook covers the following components: Causal analysis, Counterfactuals
        
      </>
    ),
  },
  {
    title: '#32 | SKLearn Decision Making',
    notebook: 'Tabular',
    isDecision: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-diabetes-decision-making/responsibleaidashboard-diabetes-decision-making.ipynb",
    description: (
      <>
        This notebook covers the following components: Causal analysis, Counterfactuals
      </>
    ),
  },
  {
    title: '#33 | DBPedia Dataset Classification',
    notebook: 'Text',
    isDebugging: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/text/responsibleaidashboard-text-classification-DBPedia.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis
      </>
    ),
  },
  {
    title: '#34 | SQuAD Explanation',
    notebook: 'Text',
    isDebugging: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/text/responsibleaidashboard-text-question-answering-squad.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis
      </>
    ),
  },
  {
    title: '#35 | Fridge Images AutoML Classification',
    notebook: 'Image',
    isDebugging: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/vision/responsibleaidashboard-automl-image-classification-fridge.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis
      </>
    ),
  },
  {
    title: '#36 | MIT Computer Vision Datasets',
    notebook: 'Image',
    isDebugging: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/vision/responsibleaidashboard-automl-object-detection-fridge-private-data.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis
      </>
    ),
  },
  {
    title: '#37 | Fridge Image Classification',
    notebook: 'Image',
    isDebugging: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/vision/responsibleaidashboard-image-classification-fridge.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis
      </>
    ),
  },
  {
    title: '#38 | Fridge Image Multilabel Classification',
    notebook: 'Image',
    isDebugging: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/vision/responsibleaidashboard-image-multilabel-classification-fridge.ipynb",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis
      </>
    ),
  },
  {
    title: '#39 |  Classification',
    notebook: 'Text',
    isDebugging: true,
    isAzure: true,
    img: "img/landing/rai-collection-1.jpeg",
    link: "",
    description: (
      <>
        This notebook covers the following components: Explanation, Error Analysis
      </>
    ),
  },
  */
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
//  Notebooks at /notebooks/tabular/01-tour.html
function Feature({img, title, description, notebook, isConcept, isDebugging, isDecision, isAzure, link}) {
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
            <small>
              { link!=null && <span><Link className="badge badge--secondary margin-right--xs" to={link}> Source </Link></span>}
              { isConcept &&  <span className="badge badge--warning margin-left--xs"> Concept </span>}
              { isAzure &&  <span className="badge badge--info margin-left--xs"> Azure ML </span>}
              { notebook!=null && <span className="badge badge--primary margin-left--xs"> {notebook} </span>}
              { isDebugging && <span className="badge badge--danger margin-left--xs"> Model Debugging </span>}
              { isDecision && <span className="badge badge--success margin-left--xs"> Decision Making </span>}
            </small>
            <h4 className="padding-top--md">{title}</h4>
            <small>{description}</small>
          </div>
          <div className="card__footer">
            {
              notebook==null ?
              <button className="button disabled button--secondary button--block">
                Article Deep-Dive
              </button> :
              <button className="button disabled button--info button--block">
                Tutorial Walkthrough
              </button>               
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
      title={`Responsible AI For Developers`}
      description="Learn Responsible AI Principles and see them in practice using open-source Responsible AI Toolbox components with a Responsible AI Dashboard.">
      <PageHeader />
      
      <main>
        <PageFeatures />
      </main>
    </Layout>
  );
}
