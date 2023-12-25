# Responsible AI in #30Days

This project provides a guided roadmap and hands-on exercises to learn about Responsible AI. Content is structured for self-paced learning with a focus on skilling up from core concepts to applied techniques and tools for real-world applications in production - in 30 days.

> [!NOTE]  
> This repository focuses on using the open-source [Responsible AI Toolbox](https://responsibleaitoolbox.ai/) to learn and implement responsible AI practices in your AI solutions.

The [Responsible AI Dashboard](https://responsibleaitoolbox.ai/introducing-responsible-ai-dashboard/) is a _single pane of glass_ that gives you a holistic, integrated view of these tools - enabling an end-to-end assessment of responsible AI practices in your AI solution for model debugging or decision making.

We'll focus on the open-source [rai-widgets Python package](https://pypi.org/project/raiwidgets/) in this repository. It covers the widgets used for the primary tools in the dashboard, and lets us explore the capabilities within a Jupyter Notebook environment in GitHub Codespaces.

You can also use the Responsible AI Dashboard [within Azure Machine Learning Studio](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-responsible-ai-dashboard?view=azureml-api-2) for operationalizing and scaling usage in production environments. Check out the [Responsible AI Developer Hub](https://aka.ms/rai-hub/website) for hands-on workshops to learn more about usage with Azure, and bookmark the [Responsible AI Collection](https://aka.ms/rai-hub/collection) for an evolving set of resources.


## Prerequisites

To work through the hands-on exercises in this series, you will need:
 - A GitHub account
 - Familiarity with Python (language)
 - Familiarity with Jupyter Notebooks (usage)
 - Familiarity with Data Science concepts

This series is meant to be beginner-friendly. If, like me, you have expertise in a different programming language (e.g., JavaScript or Java) but are relatively new to Python - you should be able to follow along and pick up what you need to know, as you go.

I've setup the dev container to have [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) installed as a VS Code extension by default. I've found it helpful to use that on-demand, to get explainers or help fixing or writing code to experiment with ideas. You will need a paid subscription (or be in the 30-day free trial) to use it - but it is optional. You should be able to still get value from this series without it.


## Learning Objectives

By the end of the #30Days you should be able to:
 - Explain what Responsible AI is and why it matters
 - Describe the core principles of Resposible AI
 - Describe the Responsible AI Toolbox & components.
 - Assess your own AI models using the Responsible AI toolbox interactively.
 

## Get Started

The repository is configured with a [dev container](https://containers.dev) to provide a consistent and reproducible environment for learning. Launch it with [Docker Desktop](https://www.docker.com/products/docker-desktop/) (in your local environment) or [GitHub Codespaces](https://github.com/30daysof/responsible-ai) (in the cloud). 

Using GitHub Codespaces is the easiest way to get started. Click on the button below, review the default configuration and click the _Create Codespace_ environment to confirm.

[![Open in GitHub Codespaces](https://img.shields.io/badge/Open%20in-GitHub%20Codespaces-orange?logo=github)](https://codespaces.new/30daysof/responsible-ai)

The development container is based on the default [codespaces-jupyter](https://github.com/github/codespaces-jupyter/blob/main/.devcontainer/devcontainer.json) template - this is meant for convenience in exploration (e.g., has support for Node.js, Python and related tools) and is not optimized for production usage. You can always _refactor_ the `devcontainer.json` configuration in your own fork to use a streamlined base image for production usage.

