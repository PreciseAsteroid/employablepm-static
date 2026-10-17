---
title: "Working with (coding) agent as PM; My mental model"
date: 2026-02-14
slug: mental-model-agent-pm
excerpt: "Skip vague AI hype—here’s my battle-tested mental model for PMs wielding coding agents like Github copilot. Hands-on: prompts, iterations, tech stack wins. No BS"
meta_title: "PM Mental Model: Mastering Agents Without Losing Control for PM assets"
meta_description: "Practical framework for product managers using AI coding agents for Product Management Assets . From prompts to production—code it yourself"
---

In the previous [post](https://employablepm.com/posts/pm-sweet-spot-copilot-vscode) I claimed that a coding agent (e.g. Github Copilot, Cursor, Claude Code, Codex,etc) is the sweet spot for PMs. I focused on what makes that environment better than the alternative chat / agent UI experiences (e.g. MSFT copilot, Confluence Rovo). 

In this post I will take you through my mental model of working with the coding agent so you could put that setup to test. 


# What is it good for?

Coding agent is where I start most of my activities these days. It could be a strategy document, product discovery brainstorming, product analytics requirements, writing presentations and preparing for a meeting with an executive. Basically... everything.

It is also important to pick the right model for the task at hand and to keep your budget under control. 
With simple tasks you will be fine with the free models (e.g. GPT-4.1) but with the more involved tasks you want models that can reason. You can't go wrong with Claude Sonnet 4.5. Claude Opus 4.5 and 6 are overkill for PM tasks imho.


# The Mental Model

The model has 4 components:

- Persona(s) / Agent
- Product and Org Context
- Template(s)
- Super Prompt(s)


And here is how the components are tied together or pointing to each other using the DRY approach.

![Mental Model Components](/images/mental-model-agent-pm/MentalModel.png)

These components are nothing but markdown files I keep in an organized fashion under folders that carry the same name. It is advised to keep these in a git repo, to be able to share efficiently with others.

Let's start with the leafs of that structure as they are very trivial.

**Templates** are structured definition of the output you are interested with: It could be the desired structure of your strategy doc, product definition or performance review. I hold these mostly in markdown file, but I suggest using json in case the output is to be written back to a database with MCP.

**Product / Org context** is also straight forward. Just markdown files that describe the portfolio, products, domains, vision, high level strategy and KPIs. I also keep the org structure of the real but also the virtual (more on that later) org. The context does not change often. At least not dramatically.

**Personas / Agents **are the most interesting and fun components. I started calling them agents, but since agent is now an overloaded term, I started referring to them as personas, as I think that is most important aspect of them.

It turns out that role-playing is a very effective method when dealing with LLMs. It is not till I saw my (virtual) Data Analyst persona, debate and scrutinize my (virtual) Product Manager's views while discussing how to analyze a certain prediction model, that I realized how important that aspect is.
 
They now all have names, beliefs and sometimes even attitude.

I create a virtual persona for every real or imaginary role I would like to consult with. I have platform PM, experiences PM, GPM, Designer, Data Analysis, Data Scientist, Engineering Manager, HRBP and Executives. But I also create ones that do not exist in my real org, such as the creator of [Death by Powerpoint](https://youtu.be/Iwpi1Lm6dFo?si=8iu2tXmsXiKlKykV) to help me with creating a compelling presentation. 

Here are the headers of the each persona (not a final list. feel free to experiment. it's fun)

- # Name
- # Role
- # Scope 
- # Attitude & Mindset
- # Core Responsibilities
- # Core beliefs


I let the coding agent itself create these, but I give it help with linkedin profiles of people I want the persona to resemble, or links to influencers or techniques I would like that persona to follow.
Notice that scope could point to the product context and there is no need to redefine it here (again **DRY** - don't repeat yourself).

**Super Prompt** is also an interesting component. In retrospect perhaps the term **meeting** is a better fit. In the super prompt I "invite" the different personas to the "room" where the room is the context of the coding agent's chat conversation.
I let the coding agent play the role of this persona or that persona, and instruct them to interview me based on the topic at hand.
Finally I ask the agent to generate a document based on a known template (again DRY) or write directly with MCP to the DB.

Here is a structure of exploratory data analysis exercise.

**Step 1**: Agent asks guiding questions about your analysis need
**Step 2:** Agent (as Alex, Product Analyst) challenges metrics, data quality, and rigor
**Step 3:** Agent (as Alexia Ford, Group PM) challenges strategic alignment and business impact
**Step 4:** Agent (as Casey Morgan, UX Designer) challenges user context and design implications (if relevant)
**Step 5:** Agent guides refinement and consensus-building
**Step 6:** Agent generates final Exploratory Data Analysis Document (ready to write into Jira with MCP)
**No manual back-and-forth needed.** The agent asks follow-ups, captures responses, and auto-refines until complete

Each of these steps is captured in great detail with lots of examples, but also here I did not write anything by hand. I use the help of the coding agent for creating these. Mainly by imagining how that real ideal process should look like.

By now you could see how a different flows could be tailored for strategy brainstorming, product discovery, etc.

**The magic starts here** All the user has to do, is to invoke the super prompt by referring to it with #superPromptName, and start answering questions the agent will ask, every-time role playing a different persona.

I highly recommend using dictation and answering by talking. Context is king and your best context / second ratio is while talking. Forget about order, structure or typos. the more you talk the better

![Invoking the process](/images/mental-model-agent-pm/SuperPromptInvoking.png)


Try it and I promise it will be fun discovering your new virtual colleagues.  

More importantly, I see a great opportunity here for raising the bar and creating high standards for every assets your team generates. It is also a great way for juniors to get unlimited access to the seniors' knowledge, as a lot of it is now encoded in these flows. 

Since you now have these new virtual friends available, you can invite them to a quick chat outside of the formal meeting / super prompt process. They are already aware of your org and product context and could be of great help.

You could share all these components  with your team, through github repos, so you could all hone them and make them better (through the process of pull requests). 

Try it and let me know how it worked. Don't hesitate to DM if you need some more guidance.
