---
slug: twain-apr01-2024
title: "Responsible AI On Azure"
description: "Last week, we saw the announcement about a new set of #ResponsibleAI tools in Azure AI, to build more secure and trustworthy generative AI applications. In this post, we'll take a tour of the tools announced with links for deeper dives" 
authors: [nitya]
keywords: [azure, ai-studio, responsible-ai, generative-ai, rai-dashboard, rai-evaluation, rai-content-safety, rai-cookbook]
tags: [responsibleai, principles, tools, practices, recipes]
---

<head>
  <link rel="canonical" href="e-ai-tools-to-help-operationalize-responsible-ai-for-generative-ai-apps-11ig" />
</head>

![Banner](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F202dnkp100nlo2eoe41v.png)

_This post was originally publishd on dev.to as part of my This Week In AI News series_.

---

We've talked about #ResponsibleAI in two contexts before - [Model Debugging](https://dev.to/azure/train-debug-ml-models-for-responsible-ai-join-the-aiskillschallenge-3pb3) for predictive AI apps (MLOps), and [AI-Assisted Evaluation](https://dev.to/azure/fuel-your-intelligent-apps-with-azure-ai-3j4b) for generative AI (LLMOps). Then late last week, I shared [this exciting announcement](https://azure.microsoft.com/blog/announcing-new-tools-in-azure-ai-to-help-you-build-more-secure-and-trustworthy-generative-ai-applications/) about new Responsible AI tools coming to Azure AI!


In today's post, I want to dig a little deeper into the announcement to learn what the tools do, why they matter, and how developers can get started using them in their generative AI application workflows.

---

## 1 | The Azure AI Platform

The [Azure AI Studio](https://ai.azure.com) provides a browser-based UI/UX for exploring the rich capabilities of the Azure AI plaform as shown below. It also supports [a code-first experience](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/a-code-first-experience-for-building-a-copilot-with-azure-ai/ba-p/4058659) for developers who prefer working with an SDK or command-line tools.

![Azure AI Studio](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mq4e73jqikkj2bnbnpv4.png)

It streamlines your end-to-end development workflow for generative AI applications - from exploring the model catalog, to building & evaluating your AI application, to deploying and monitoring the application in production. With built-in support for _operationalizing Responsible AI_, developers can go from evaluating their applications for quality, to configuring them for content safety in production.

---

## 2 | New Azure AI Tools for Responsible AI

The [recent announcement](https://azure.microsoft.com/blog/announcing-new-tools-in-azure-ai-to-help-you-build-more-secure-and-trustworthy-generative-ai-applications/) from the Responsible AI team highlights a number of new tools and capabilities that are available (or coming soon) to Azure AI, to further improve the quality and safety of generative AI application on Azure. This short video gives you a quick preview of how these tools are put to use to create safeguards for generative AI apps on Azure. In the rest of this post, we'll dive briefly into each of these tools to understand what they do, and why it matters.

<iframe width="600" height="400" frameborder="0" src="https://www.youtube.com/embed/BnGmozWvsOo" title="How to Safeguard your generative AI applications in Azure AI" frameborder="0"></iframe>

---

## 3 | Prompt Shields

![Prompt Shields](https://azure.microsoft.com/en-us/blog/wp-content/uploads/2024/03/image-5.webp) 

The first new capability comes in the form of [Prompt Shields](https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/azure-ai-announces-prompt-shields-for-jailbreak-and-indirect/ba-p/4099140) that can **detect and block prompt injection attacks** to safeguard the _integrity_ of your LLM system. These attacks work by tricking the system into harmful or unplanned behaviors, "injecting" unauthorized instructions into the default user prompt at runtime.

In a **direct attack** (jailbreak) the user is the adversary. The user prompt attempts to get the model to disregard developer-authored system prompts and training in favor of executing potentially harmful instructions. In an **indirect attack** (cross-domain prompt injection) the adversary is a third-party and the attack occurs via untrusted external data sources that may be embedded in the user prompt, but not authored by user or developer.

Prompt Shields work proactively to detect suspicious inputs in real-time and block them before they reach the LLM. This can use techniques like [Spotlighting](https://arxiv.org/abs/2403.14720) that transform the input to mitigate these attacks while preserving the semantic content of the user prompt.

🔖 | [**Learn more in this post**](https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/azure-ai-announces-prompt-shields-for-jailbreak-and-indirect/ba-p/4099140)
🔖 | [**Review the main announcement**](https://azure.microsoft.com/blog/announcing-new-tools-in-azure-ai-to-help-you-build-more-secure-and-trustworthy-generative-ai-applications/)


---

## 4 | Groundedness Detection

![Groundedness Detection](https://azure.microsoft.com/en-us/blog/wp-content/uploads/2024/03/Groundednes-Detection.webp) 

The second capability involves [**Groundedness Detection**](https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/detect-and-mitigate-ungrounded-model-outputs/ba-p/4099261) to combat the familiar problem of _"Hallucinations"_. Here, models fabricate a response that may look valid but is not grounded in any real data. Identifying and remediating this is critical to improve **trustworthiness** of generative AI responses.

Previously developer options included manual checks (not scalable) and chaining requests (to have an LLM evaluate if the previous response was grounded with respect to a reference document) with mixed results. The new tool uses a custom-built fine-tuned language model that detects _ungrounded claims_ more accurately - giving developers multiple options to mitigate the behavior, from pre-deployment testing to post-deployment rewriting of responses.

🔖 | [**Learn more in this post**](https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/detect-and-mitigate-ungrounded-model-outputs/ba-p/4099261)
🔖 | [**Review the main announcement**](https://azure.microsoft.com/blog/announcing-new-tools-in-azure-ai-to-help-you-build-more-secure-and-trustworthy-generative-ai-applications/)

---

## 5 | Safety System Messages

The third capability recognizes that prompt engineering is a powerful way to improve the reliability of the generative AI application, along with services like Azure AI Content Safety. Writing **effective system prompts** (metaprompts) can have a non-trivial impact on the quality of responses - and system messages that can "guide the optimal use of grounding data and overall behavior" are ideal.

![Safety System Messages](https://learn.microsoft.com/en-us/azure/ai-services/openai/media/concepts/system-message/template.png#lightbox)

With the new [system message framework and template recommendations for LLMs](https://learn.microsoft.com/azure/ai-services/openai/concepts/system-message), developers now get example templates and recommendations to help them craft more effective messages. For instance, the system message framework describes four concepts (define model capabilities, define model output format, provide examples, provide behavioral guardrails) you can apply in crafting the system message. The screenshot above shows an example of how this is applied in a retail chatbot app.

🔖 | [**Learn more from the documentation**](https://learn.microsoft.com/azure/ai-services/openai/concepts/system-message)
🔖 | [**Review the main announcement**](https://azure.microsoft.com/blog/announcing-new-tools-in-azure-ai-to-help-you-build-more-secure-and-trustworthy-generative-ai-applications/)


---

## 6 | Automated Safety Evaluations

![Safety Evaluations](https://azure.microsoft.com/en-us/blog/wp-content/uploads/2024/03/image-4.webp)

The fourth capability recognizes that most developers lack the resources and expertise to conduct rigorous safety evaluations on their generative AI applications - which would involve curating high-quality datasets for testing, and interpreting evaluation results for effective mitigation.

Previously, Azure AI supported pre-built [generation quality metrics](https://learn.microsoft.com/azure/ai-studio/concepts/evaluation-metrics-built-in?tabs=warning#generation-quality-metrics) like _groundedness_, _relevance_, _coherence_ and _fluency_ for AI-assisted evaluations. With the new capability, this now includes additional [risk and safety metrics](https://learn.microsoft.com/azure/ai-studio/concepts/evaluation-metrics-built-in?tabs=warning#risk-and-safety-metrics) like _hateful and unfair content_, _sexual content_, _violent content_, _self-harm-related content_, and jailbreaks.

![Safety Evaluation Workflow](https://techcommunity.microsoft.com/t5/image/serverpage/image-id/565820iA1D8020BB82AD593/image-size/large?v=v2&px=999)

To conduct a safety evaluation on your generative AI application, you need a test dataset and some way to simulate adversarial interactions with your application so you can evaluate the resulting responses for the relevant safety metrics. The new Azure AI **automated safety evaluations** capability streamlines this for you in four steps: 
 - Start with targeted prompts (created from templates)
 - Use AI-assisted simulation (for adversarial interactions)
 - Create your test datasets (baseline & adversarial)
 - Evaluate the test datasets (for your application)
 
Outcomes can now be used to configure or adapt other elements of the application's risk mitigation system.

🔖 | [**Learn more in this post**](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/introducing-ai-assisted-safety-evaluations-in-azure-ai-studio/ba-p/4098595)
🔖 | [**Review the main announcement**](https://azure.microsoft.com/blog/announcing-new-tools-in-azure-ai-to-help-you-build-more-secure-and-trustworthy-generative-ai-applications/)

---

## 7 | Risk & Safety Monitoring

![Risk and Safety Monitoring](https://azure.microsoft.com/en-us/blog/wp-content/uploads/2024/03/image-6.webp)

The final new capability announced was around [Risk & Safety Monitoring in Azure Open AI](https://learn.microsoft.com/azure/ai-services/openai/how-to/risks-safety-monitor) - adding a new Dashboard capability described as follows:

> In addition to the detection/ mitigation on harmful content in near-real time, the risks & safety monitoring help get a better view of how the content filter mitigation works on real customer traffic and provide insights on potentially abusive end-users.

To use the feature, you need an Azure OpenAI resource in a supported region, and a model deployment with a content filter configured. Once setup, simply open the **Deployments** tab, visit the model deployment page, and select the **Risks & Safety** tab as shown in this figure from the announcement post below.

![Filter tab](https://techcommunity.microsoft.com/t5/image/serverpage/image-id/565909i547F8DDB0124F9BC/image-dimensions/554x621?v=v2)

The resulting dashboard provides two kinds of insights into content filter effectiveness. The first focuses on **Content Detection** with visualized insights into metrics like _Total blocked request count and block rate_, _Blocked requests by category_, _Severity distribution by category_ and more. The second focuses on **Abusive User Detection** to highlight how regularly the content filters safeguards are abused by end users and identify the severity and frequency of those occurrences.

🔖 | [**Learn more in this post**](https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/introducing-risks-amp-safety-monitoring-feature-in-azure-openai/ba-p/4099218)
🔖 | [**Review the main announcement**](https://azure.microsoft.com/blog/announcing-new-tools-in-azure-ai-to-help-you-build-more-secure-and-trustworthy-generative-ai-applications/)

---

## 8 | Get Started Exploring

This was a lot - and it is still just the tip of the iceberg when it comes to actively understanding and applying responsible AI principles in practice. Want to get started exploring this topic furthere? Bookmark and revisit these three core resources:

| Resource | Description |
|:---|:---|
| 1️⃣ [Blog Post](https://azure.microsoft.com/en-us/blog/announcing-new-tools-in-azure-ai-to-help-you-build-more-secure-and-trustworthy-generative-ai-applications/) | Official Announcement of New Tools |
| 2️⃣ [Collection](https://aka.ms/rai-hub/collection)| My Responible AI For Developers Collection |
| 3️⃣ [Collection](https://aka.ms/ai-studio/collection)| My Azure AI For Developers Collection|

---
