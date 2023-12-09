# Responsible AI in #30Days

This project captures  my learning journey into Responsible AI - from core principles to applied techniques and tools for real-world applications in production. While I plan to explore these topics in a random order based on my immediate requirements, I will organize the content into _Collections_ that bundle together related topics in a sequential manner that is suitable for self-paced learning.

## Setup

### 1. Dev Container
This repository is setup to use Dev Containers. You can open this either in GitHub Codespaces (cloud) or with Docker Desktop (local). The Dev Container is instrumented for convenience, not efficiency. In other words, I'm using the default _Universal_ image that can support most popular languages and tools (Python, Node, .NET) and is likely cached on your local Docker Desktop. If you want to optimize for efficiency, you can create a custom image that only includes the tools you need.

The dev container is also setup to activate GitHub Copilot Chat out of the box. This is primarily used for productivity in terms of getting inline explainers to new concepts, or helping simplify or test code snippets on demand. Usage of Copilot requires a paid subscription - and is optional for those using this repository simply for learning purposes.

### 2. Documentation

For now, the documentation is captured in simple Markdown files under the `docs/` directory, which can be served directly by GitHub Pages. I plan to migrate this to a static site generator (e.g. Astro or Docusaurus) in the future.


## Content

| Article | Description |
|:---------|:-------------|
| [Responsible AI Dashboard: Lab](docs/rai-dashboard-lab.md) | Walkthrough of the Responsible AI Dashboard Module on Microsoft Learn |
| [Responsible AI Dashboard: Module](docs/rai-dashboard-learn.md) | Walkthrough of the Responsible AI Dashboard Module on Microsoft Learn |