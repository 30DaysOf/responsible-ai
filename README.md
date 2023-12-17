# Responsible AI in #30Days

This project provides a guided roadmap and hands-on exercises to learn about Responsible AI. Content is structured for self-paced learning with a focus on skilling up from core concepts to applied techniques and tools for real-world applications in production - in 30 days.

## Prerequisites

To work through the exercises, you will need:
 - A GitHub account
 - Familiarity with Python (language)
 - Familiarity with Jupyter Notebooks (usage)
 - Familiarity with Data Science concepts

This is a beginner-friendly series of exercises so you don't need to be an expert in any of the above. 

I've found it helpful to use GitHub Copilot to get inline explainers and help as I go. The development environment should have Copilot extensions installed in Visual Studio Code - but you will need a paid subscription (or be in the 30-day free trial) to use it.

## Learning Objectives

By the end of the #30Days you should be able to:
 - Explain what Responsible AI is and why it matters
 - Describe the core principles of Responsbile AI
 - Describe the Responsible AI Toolbox & components.
 

## Get Started

The repository is configured with a [dev container](https://containers.dev) to provide a consistent and reproducible environment for learning. Launch it with [Docker Desktop](https://www.docker.com/products/docker-desktop/) (in your local environment) or [GitHub Codespaces](https://github.com/30daysof/responsible-ai) (in the cloud). 

Using GitHub Codespaces is the easiest way to get started. Click on the button below, review the default configuration and click the _Create Codespace_ environment to confirm.

[![Open in GitHub Codespaces](https://img.shields.io/badge/Open%20in-GitHub%20Codespaces-orange?logo=github)](https://codespaces.new/30daysof/responsible-ai)

The development container is based on the default [codespaces-jupyter](https://github.com/github/codespaces-jupyter/blob/main/.devcontainer/devcontainer.json) template - this is meant for convenience in exploration (e.g., has support for Node.js, Python and related tools) and is not optimized for production usage. You can always _refactor_ the `devcontainer.json` configuration to use more optimized base images and remove unused or unnecessary tools in your own fork.

## Learning Objectives



### 2. Documentation

For now, the documentation is captured in simple Markdown files under the `docs/` directory, which can be served directly by GitHub Pages. I plan to migrate this to a static site generator (e.g. Astro or Docusaurus) in the future.


## Content

| Article | Description |
|:---------|:-------------|
| [Responsible AI Dashboard: Lab](docs/rai-dashboard-lab.md) | Walkthrough of the Responsible AI Dashboard Module on Microsoft Learn |
| [Responsible AI Dashboard: Module](docs/rai-dashboard-learn.md) | Walkthrough of the Responsible AI Dashboard Module on Microsoft Learn |