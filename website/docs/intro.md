---
title: "Introduction"
sidebar_position: 1
---

This repository contains a collection of Jupyter Notebooks that demonstrate how to use the Responsible AI Toolbox to build Responsible AI solutions. 
 - Notebooks here are reproduced from the [Responsible AI Toolnox: Notebook Tutorials](https://github.com/microsoft/responsible-ai-toolbox/tree/main/notebooks) for learning purposes only.
 - Read [this May 2022 Technical Community Blog Post](https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/responsible-ai-dashboard-and-scorecard-in-azure-machine-learning/ba-p/3391068) for a comprehensive overview of the Responsible AI Toolbox.


## 1. What is Responsible AI?
Responsible Artificial Intelligence (Responsible AI) is an approach to developing, assessing, and deploying AI systems in a safe, trustworthy, and ethical way. 

Microsoft has developed a [Responsible AI Standard (Jun 2022)](https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2022/06/Microsoft-Responsible-AI-Standard-v2-General-Requirements-3.pdf). It's a framework for building AI systems according to six principles: fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability.

![Responsible AI Standards](https://learn.microsoft.com/en-us/azure/machine-learning/media/concept-responsible-ai/concept-responsible-ml.png?view=azureml-api-2)

The principles are summarized briefly below, with links to relevant documentation and "assessment" components from the toolbox that help validate compliance.

| Principle | Description | Assessment |
| --- | --- | --- |
| [Fairness and Inclusiveness](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai?view=azureml-api-2#fairness-and-inclusiveness) | AI systems should treat everyone fairly and avoid affecting similarly situated groups of people in different ways. <br/>_Ex: All loan applicants with similar backgrounds should get the same recommendations or outcomes._ | RAI Dashboard - [Fairness Assessment](https://learn.microsoft.com/en-us/azure/machine-learning/concept-fairness-ml?view=azureml-api-2) |
| [Reliability and Safety](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai?view=azureml-api-2#reliability-and-safety) | To build trust, it's critical that AI systems operate as they were originally designed, respond safely to unanticipated conditions, and resist harmful manipulation. | RAI Dashboard - [Error Analysis](https://learn.microsoft.com/en-us/azure/machine-learning/concept-error-analysis?view=azureml-api-2)|
| [Transparency](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai?view=azureml-api-2#transparency) | When AI systems influence decisions that impact people's lives, it's critical that people understand how those decisions were made. A crucial part of transparency is **interpretability**: the useful explanation of the behavior of AI systems and their components  | RAI Dashboard - [Interpretability](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-machine-learning-interpretability?view=azureml-api-2) <br/><br/> RAI Dashboard -  [Counterfacutal What-If](https://learn.microsoft.com/en-us/azure/machine-learning/concept-counterfactual-analysis?view=azureml-api-2)|
| [Privacy and Security](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai?view=azureml-api-2#privacy-and-security) |  With AI, privacy and data security require close attention because access to data is essential for AI systems to make accurate and informed predictions and decisions about people. AI systems must comply with privacy laws on data usage transparency & consumer control over usage. |[Azure ML Governance](https://learn.microsoft.com/en-us/azure/machine-learning/concept-enterprise-security?view=azureml-api-2) support <br/><br/> [SmartNoise](https://github.com/opendifferentialprivacy/smartnoise-core) OSS to build differential privacy solutions<br/> <br/> [Counterfit](https://github.com/Azure/counterfit/) OSS cyberattack simulator |
| Inclusiveness | AI systems should be inclusive and accessible. | |
| Accountability | AI systems should be accountable. | |
| | | |


See: [What is Responsible AI](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai?view=azureml-api-2)


## 2. What is the Responsible AI Toolbox?

It's an [open-source project](https://github.com/microsoft/responsible-ai-toolbox) that provides tools and guidance to help AI practitioners apply _responsible AI principles and practices_ to their work with components and dashboards to help them _design and assess_ their models and decision-making workflows for compliance. 

The core of the toolbox is the [Responsible AI Dashboard](https://github.com/microsoft/responsible-ai-toolbox?tab=readme-ov-file#introducing-responsible-ai-dashboard) that is a _single pane of glass_ to help you flow through the different stages of **model development & debugging** to **decision-making & deployment**. In this context, "single pane of glass" means a **unified display** that integrates and displays information from multiple sources in a single view, for convenience and context.

![Responsible AI Dashboard](https://raw.githubusercontent.com/microsoft/responsible-ai-widgets/main/img/responsible-ai-dashboard.png)

You can use this toolkit to understand your model's behavior, identify and mitigate bias, and explain your model's predictions. You can also use it to _perturb_ model predictions for individual instances, and use that to gain better insight into responsible AI compliance.

The Responsible AI Dashboard integrates several open-source toolkits into a unified platform for developers and data scientists.

| Toolkit | Description |
| --- | --- |
| Fairness Assessment with [Fairlearn](https://github.com/fairlearn/fairlearn) | _identifies cohorts of data with higher error rate than the overall benchmark_|
| Error Analysis with [Error Analysis Tool](https://github.com/microsoft/responsible-ai-widgets/blob/main/docs/erroranalysis-dashboard-README.md) | _identifies which groups may be disproportionately negatively impacted by AI & how._|
| Interpretability with [InterpretML](https://github.com/interpretml/interpret-community) |  _explains blackbox models, helping users understand the reasons behind  predictions.|
| Counterfactual Analysis with [DiCE](https://github.com/interpretml/DiCE) | _shows if/how feature-perturbed versions of same data give different prediction_ |
| Causal Analysis with [EconML](https://github.com/microsoft/EconML) | _focuses on answering What If-style questions to apply data-driven decision-making_ |
| Data Balance with [Responsible AI](https://github.com/microsoft/responsible-ai-toolbox/blob/main/docs/databalance-README.md) | _helps users gain an overall understanding of their data, visualize feature distribution_ |
| | |


## 3. Responsible AI Dashboard Components

The toolbox consists of 4 core dashboards as shown below:

### 3.1 Error Analysis Dashboard

The Error Explorer Dashboard lets you identify cohors with higher error rates, and diagnose root causes behind these errors. Once you load this dashboard, you can explore your model in 2 stages:
 - **Identification** of errors - using the decision tree ("Treemap") or the distribution ("Heatmap") view.
 - **Diagnosis** of errors - by saving cohorts of interest, then exploring them in more detail (e.g., dataset stats & feature distributions) or conducting what-if experiments (perturbation exploration).

![Error Explorer](https://github.com/microsoft/responsible-ai-toolbox/raw/main/docs/img/EA-TreeMap.png)

### 3.2 Explanation Dashboard

This is the interface for [Interpret-Community](https://github.com/interpretml/interpret-community) which provides SDK and notebooks with intepretabilty utility functions and techniques developed by the community at large.

Use this dashboard to evaluate your model, explore your dataset statistics, understanding your model's explanations for various demographics, and debug models by trying perturbations (what-if analysis) to gain insights into your model's behavior.

![Explanation Dashboard](https://github.com/microsoft/responsible-ai-toolbox/raw/main/docs/img/Interpretability-ModelPerformance.png)

The explanation dashboard has 4 tabs as shown:
- Model performance tab - helps observe performance of your model across different cohorts
- Dataset explorer - helps explore dataset by slicing it up by different dimensions for comparisons.
- Aggregate feature importance (global explanation) - helps understand which features are most important for your model's predictions (and how feature impacts predictions).
- Individual feature importance and what-if (local explanation) - helps understand how feature values impact predictions for an individual instance.

### 3.3 Fairness Dashboard

The Fairness dashboard enables you to use common fairness metrics to assess which groups of people may be negatively impacted by your machine learning model's prediction (females vs. males vs. non-binary gender). You can then use Fairlearn's state-of-the-art unfairness mitigation algorithms to mitigate fairness issues in your classification and regression models.

![Fairness Dashboard](https://github.com/microsoft/responsible-ai-toolbox/raw/main/docs/img/Fairness-Intro.png)

### 3.4 Responsible AI Dashboard

The Responsible AI Dashboard is the _unified pane of glass_ that empowers users to design tailored, end-to-end model debugging and decision-making workflows that address their particular needs.

**It's key strength lies in customizability** you put together subsets of components in a way that helps you analyze your model's behavior for different scenarios, in different ways.
 * Below are some examples of use case and workflow thinking - see [this document](https://github.com/microsoft/responsible-ai-toolbox/?tab=readme-ov-file#responsible-ai-dashboard-customization) for the full list.

| _I want to ..._ | RAI Dashboard Flow |
| --- | --- |
| understand model errors & diagnose them  | Model Overview ➡️ Error Analysis ➡️ Data Explorer |
| understand model fairness issues & diagnost them |Model Overview ➡️ Fairness Assessment ➡️ Data Explorer |
| address customer questions about what they can do differently next time to get a different outcome from AI | Data Explorer ➡️ Counterfactuals Analysis and What-If | 
| | | 

## 4. Responsible AI Dashboard Usage

The [Responsible AI Toolbox](https://github.com/microsoft/responsible-ai-toolbox/?tab=readme-ov-file#responsible-ai-dashboard-customization) exists as an open-source project driven by Microsoft Research, and usable as a Python package for research and learning purposes.

However, usage by enterprise customers requires both a seamless integration into their end-to-end workflows, and support for features that are critical to regulatory and business processes. With that in mind, here are the two "flavors" of Responsible AI Dashboard today.


### 4.1 The OSS  `raiwidgets` Python Package

If you are looking to understand the core concepts, and explore the capabilities of the Responsible AI Toolbox, you can use the Responsible AI Notebook Tutorials listed below.

These use the `raiwidgets` Python package (currently v0.32.1 - released Dec 6, 2023) - which  contains the core widgets used for _interactive visualizations_ to assess fairness, explain models, generate counterfactual examples, analyze causal effects and analyze errors in Machine Learning models.

This is an open-source option for interactively visualizing the dashboard components with your data sets and models, _in your local development environment_. It's a good way to get familiar with the concepts, and explore the various capabilities and features interactively - in an environment like GitHub Codespaces, for convenience.

### 4.2 The Azure ML Responsible AI Dashboard

While the Responsible AI Toolbox exists as an open-source project, it is also [integrated into the Azure Machine Learning Service](https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/responsible-ai-dashboard-and-scorecard-in-azure-machine-learning/ba-p/3391068) as of Nov 2022, to simplify integration and usage with _cloud-deployed models_. Using this integration, you can now generate Responsible AI Dashboards for your models using:
 - [Azure Machine Learning Studio](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-responsible-ai-insights-ui?view=azureml-api-2) - no code option
 - [Azure Machine Learning Python SDK](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-responsible-ai-insights-sdk-cli?view=azureml-api-2&tabs=yaml) - code-first option
 - [Azure Machine Learning CLI](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-responsible-ai-insights-sdk-cli?view=azureml-api-2&tabs=yaml) - commandline option

These are the key tools accessible via the Responsible AI Dashboard in the Azure Machine Learning service:
![Azure ML Responsible AI Dashboard](https://learn.microsoft.com/azure/machine-learning/media/concept-responsible-ai-dashboard/dashboard.png?view=azureml-api-2)

And while the initial examples focused on tabular data that is available in a tabular format (e.g., CSV, Parquet, etc.) we can also use the Responsible AI Dashboard (on Azure ML) to assess the performance, fairness and explainability of computer vision and natural language processing models.

 1. [Generate Responsible AI Vision Insights](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-responsible-ai-vision-insights?view=azureml-api-2&tabs=yaml) - for computer vision models (image classification, object detection, etc.)
 1. [Generate Responsible AI Text Insights](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-responsible-ai-text-insights?view=azureml-api-2&tabs=yaml) - for NLP models (multi-label text classification, etc.)

The Azure ML integration also supports the ability to generate [Responsible AI Scorecards](https://learn.microsoft.com/azure/machine-learning/concept-responsible-ai-scorecard?view=azureml-api-2) _which are critical to regulatory and business processes_ that enterprise customers need to comply with.  The Responsible AI Scorecard lets ML professionals _generate and share_ their data and model health records with stakeholders to earn trust or for auditing purposes. 

 1. [Generate a Responsible AI Scorecard using the SDK/CLI](https://learn.microsoft.com/azure/machine-learning/how-to-responsible-ai-insights-sdk-cli?view=azureml-api-2&tabs=yaml#how-to-generate-a-responsible-ai-scorecard-preview)
 2. [Generate a Responsible AI Scorecard using the UI](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-responsible-ai-insights-ui?view=azureml-api-2#how-to-generate-responsible-ai-scorecard-preview)

Want to explore these features further? Check out the [Azure Machine Learning Responsible AI Dashboard & Scorecard](https://github.com/Azure/azureml-examples/tree/main/sdk/python/responsible-ai) repo for a list of Notebooks-based tutorials. You will need an active Azure account (and subscription) to do so.

## 4. Responsible AI Dashboard Notebooks

We can structure our learning journey with Jupyter Notebooks into 3 phases:
1. **Introduction** - Notebooks that explain the concepts and capabilities of the Responsible AI Toolbox without necessarily running any code snippets.
2. **RAI Toolbox** - Notebooks that demonstrate how to use the Responsible AI Toolbox with the `raiwidgets` Python package in Jupyter Notebooks, on GitHub Codesapces.
3. **Azure ML** - Notebooks that demonstrate how to use the Responsible AI Toolbox with the Azure ML Service - using the Studio UI, Python SDK and/or CLI.

In the table below, the "Type" of notebook defines the kind of data and model being analyzed:
 - Tabular = CSV or Parquet datasets
 - Vision = Image classification or object detection models
 - Text = Text classification or NLP models

| Notebook | Type | Description |
| --- | --- | --- |
| **Introduction**| | |
| [Responsible AI Toolbox](/notebooks/tabular/01-tour.ipynb) | -| Tour of the RAI Toolbox as documentation (no code) |
| [Getting Started](/notebooks/tabular/02-getting-started.ipynb) | - | Explains high-level APIs and workflows (setup validation) |
| **[RAI Toolbox](https://github.com/microsoft/responsible-ai-toolbox?tab=readme-ov-file#useful-links)**| | |
| [Census Classification Model Debugging](/notebooks/tabular/03-rai-model-debugging-census-classification.ipynb) | Tabular | |
|[Diabetes Decision Making ](/notebooks/tabular/04-rai-model-debugging-diabetes-regression.ipynb) | Tabular | |
| [Diabetes Regression Model Debugging](/notebooks/tabular/05-rai-decision-making-diabetes-regression.ipynb)| Tabular | |
| Housing Classification Model | Tabular | |
| Housing Decision Making | Tabular | |
| Multiclass DNN Model Debugging | Tabular | |
| Orange Juice Forecasting | Tabular | |
| Hugging Face BLBooks Genre Text Classification |  Text | |
| Covid Event Multilabel Text Classification Model Debugging | Text | |
| DBPedia Text Classification Model Debugging | Text | |
| OpenAI Model Debugging | Text | |
| Question-Answering Model Debugging | Text | |
| Fridge Image Classification Model Debugging | Vision | |
| Fridge Multi-label Image Classification Model Debugging)| Vision | |
| Fridge Object Detection Model Debugging| Vision | |
| Cognitive Services: Speech-to-Text Fairness Testing | Cognitive Services | |
| Cognitive Services: Face Verification Fairness Testing | Cognitive Services | |
| **[Azure ML](https://github.com/Azure/azureml-examples/tree/main/sdk/python/responsible-ai)**| | |
| Diabetes Regression Model Debugging |  Tabular | [sklearn dataset](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_diabetes.html)|
| Programmer Regression Model Debugging |  Tabular | [Programmers MLTable dataset](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-programmer-regression-model-debugging/data-programmer-regression) |
| Finance Loan Classification |  Tabular | [Finance Story dataset](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-finance-loan-classification/Fabricated_Loan_data.csv) |
| Covid Healthcare Classification |  Tabular | [Healthcare Story dataset](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-healthcare-covid-classification/data_covid_classification) |
<!--
| [Education Student Attrition Classification](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-education-student-attrition-classificaton/responsibleaidashboard-education-student-attrition-classificaton.ipynb) |  Tabular | [Education Story dataset](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-education-student-attrition-classificaton/Fabricated_Student_Attrition_Data.csv) |
| [Housing Classification Model](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-housing-classification-model-debugging/responsibleaidashboard-housing-classification-model-debugging.ipynb) |  Tabular | [Kaggle Housing dataset](https://www.kaggle.com/alphaepsilon/housing-prices-dataset) |
| [Housing Decision Making](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-housing-decision-making/responsibleaidashboard-housing-decision-making.ipynb) |  Tabular | [Kaggle Housing dataset](https://www.kaggle.com/alphaepsilon/housing-prices-dataset) |
| [Diabetes Decision Making](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/tabular/responsibleaidashboard-diabetes-decision-making/responsibleaidashboard-diabetes-decision-making.ipynb) |  Tabular | [sklearn Diabetes dataset](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_diabetes.html) |
|[DBPedia Text Classification](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/text/responsibleaidashboard-text-classification-DBPedia.ipynb) | Text | [🤗 DBPedia dataset](https://huggingface.co/datasets/DeveloperOats/DBPedia_Classes) |
|[Multilabel Text Classification Covid Events](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/text/responsibleaidashboard-multilabel-text-classification-covid-events.ipynb) | Text | [ 🤗  Covid Emergency Events dataset](https://huggingface.co/datasets/joelito/covid19_emergency_event ) |
|[Text Classification BLBooks Genre](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/responsibleaidashboard-text-classification-blbooksgenre.ipynb) | Text | [🤗  BLBooks Genre dataset]( https://huggingface.co/datasets/blbooksgenre) |
|[Text Classification Financial News](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/text/responsibleaidashboard-text-classification-financial-news/responsibleaidashboard-text-classification-financial-news.ipynb) | Text | [News Article dataset]( https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/text/responsibleaidashboard-text-classification-financial-news/Text_classification_dataset.xlsx) |
|[Text Question Answering Squad](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/text/responsibleaidashboard-text-question-answering-squad.ipynb) | Text | [🤗 Stanford QA dataset (SQUAD)]( https://huggingface.co/datasets/squad) |
|[AutoML Image Classifier Fridge](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/vision/responsibleaidashboard-automl-image-classification-fridge.ipynb) | Image | [Fridge Images dataset](https://github.com/microsoft/computervision-recipes/tree/master/scenarios/classification) |
|[AutoML Object Detection Fridge](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/vision/responsibleaidashboard-automl-object-detection-fridge-private-data.ipynb) | Image | [MIT Computer Vision dataset](https://github.com/microsoft/computervision-recipes) |
|[Image Classification Fridge](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/vision/responsibleaidashboard-image-classification-fridge.ipynb) | Image | [Fridge Images dataset](https://github.com/microsoft/computervision-recipes/tree/master/scenarios/classification) |
|[Image Multilabel Classification Fridge](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/vision/responsibleaidashboard-image-multilabel-classification-fridge.ipynb) | Image | [Fridge Images dataset](https://github.com/microsoft/computervision-recipes/tree/master/scenarios/classification) |
|[Object Detection MSCOCO](https://github.com/Azure/azureml-examples/blob/main/sdk/python/responsible-ai/vision/responsibleaidashboard-object-detection-MSCOCO.ipynb) | Image | [Object Detection Fridge Images ataset](https://github.com/microsoft/computervision-recipes/tree/master/scenarios/detection) |
| | | |
-->