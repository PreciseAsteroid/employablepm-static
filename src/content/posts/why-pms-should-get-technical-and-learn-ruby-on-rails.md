---
title: "Why PMs Should Get Hands-On Technical and learn Ruby on Rails"
slug: why-pms-should-get-technical-and-learn-ruby-on-rails
excerpt: "80% of PM decisions have technical implications. Learn why Ruby on Rails is the perfect entry point for PMs who want control without developer complexity."
meta_title: "Why PMs Should Learn Ruby on Rails | Employable PM"
meta_description: "80% of PM decisions have technical implications. Learn why Ruby on Rails is the perfect entry point for PMs who want control without developer complexity."
featured: true
draft: true
---

Let me be direct: **PMs in this day and age need technical depth**. 



Not to become junior developers, but to make decisions that actually work. Most PM decisions—80% of them—have technical implications. Roadmaps, priorities, tradeoffs. You can't lead what you don't understand.

But that was true 10 years ago too, right? What's different now?



**AI changes everything**.

 With AI, PMs can discover, define prototype, test, and ship features faster than ever. PMs get closer and closer to the code and in turn would need to know more about it.
On the more extreme side, In this [tweet](https://x.com/OfficialLoganK/status/2018107123599548770?s=20) Logan Kilpatrick from the Google AI Studio says he is giving up his PM title and just join the technical team... 😳


Nobody could tell how the role would change, but here are some benefits you would get either way by knowing more about the tech:



- Technical discussions become conversations between equals (not "make it faster")
- You spot engineering debt before it kills your roadmap  

You can prototype complex features yourself, no handoffs



**Your goal **(at least for now)** isn't becoming a developer**. It's understanding concepts hands-on, simply and I found the perfect stack for you.

Let me introduce...🥁🥁 🥁 **Ruby on Rails.

**it is the perfect entry point—simple, productive, full-stack control without the React/Node complexity.



**Rails vs Big Tech Bloat**



Big Tech stacks mirror their massive org charts. Frontend team builds React + 12 different state managers. Backend team ships Node with 8 competing ORMs. DevOps demands Kubernetes even for a todos app. The result? You can't touch nor understand the code. It is not just the web stack the same goes for mobile (Swift + Combine + MVVM + VIPER anyone?).



**Rails takes the opposite approach**: 



Their slogan is `from Hello world to IPO` is a bit of an exaggeration but the point stands.



Instead of React, you write **HTML + ERB templates**—you can edit views immediately, no webpack config required. 

Instead of 47 JSON configuration files, **ActiveRecord** turns your database into Ruby objects you already understand. 

**Convention over configuration** means predictable structure—no endless debates about "best practices." I also think this is the best recipe for vibe coding, as the coding agent has less options to do the same thing, hence less options to go off track.



**Shopify runs Rails at 1B+ user scale**. If it handles their complexity, your side project is laughably simple.



**Touch Every Layer**



Rails gives you **full stack ownership** without a 6-month ramp. You write frontend ERB templates (HTML with embedded Ruby logic). 

You write backend controllers (pure business logic). 

You write database migrations (add a column in 2 lines). You deploy with `flyctl deploy` (one command).



**Ruby: Beautiful + Rails: Best Practices**

Ruby reads like English prose. Want analytics on every page? Three lines in `ApplicationController`:



> class ApplicationController < ActionController::Base
  before_action :track_page_view
end


**Rails encodes engineering principles**:

**DRY** (Don't Repeat Yourself) eliminates copy-paste across features

**Convention over configuration** creates predictable structure 

**Fat models, skinny controllers** keeps clean separation

**Tasteful defaults**—no npm hell choosing between 17 "best" libraries


**My Workflow **(welcome to copy)



I combine **Perplexity + semi-manual typing with GitHub Copilot** for maximum learning:



First, I ask (ideally with voice) Perplexity: "I want to create a blog and post it to production. I want to use Ruby on Rails and host on fly.io. Instruct me step by step and ask for confirmation after every step to make sure I follow. add explanation to each step. " 



Then I type it (semi) manually, understanding each generated file (`app/models/user.rb`, `app/controllers/users_controller.rb`, `db/migrate/...`). 



BTW, with perplexity I use perplexity spaces, which I think is the equivalent of ChatGPT custom instructions. In other words I set the tone and style of the responses to be more technical and hands-on. I also point it to the Rails Tutorials, and asks it to use the languge of David Heinemeier Hansson (Rails creator). I just like the guy's style.





**Rails App Structure (Quick Guide)**


A Rails app follows predictable conventions: (again, less option for the coding agent to make mistakes)



my-app/

├── app/                    # All your code lives here

│   ├── models/             # Data layer (User, Post) - pure Ruby database objects

│   ├── controllers/        # **Business logic** (UsersController handles all /users requests) 

│   ├── views/              # HTML + ERB templates (what users actually see)

│   └── helpers/            # View utilities (formatting, links)

├── config/                 # App settings (database.yml, routes.rb)

├── db/                     # Migrations (add/remove columns), schema.rb

├── public/                 # Static assets (images, 404.html)

└── content/posts/          # Your blog markdown → renders this very page!



**Here is how it works end to end**



**Browser** hits `/posts` → **Controller** receives request

**Controller** asks **Model**: "Get all published posts"

**Model**** queries **Database** → returns Ruby objects (`Post` instances)

**Controller** passes `@posts` to **View**

**View** loops through `@posts` → generates HTML

**Controller** sends HTML back to **Browser**



**Real Code Example**



**Controller** (`app/controllers/posts_controller.rb`):



```
class PostsController < ApplicationController  def index
@posts = Post.where.not(published_at: nil)  # Model call  endend
```





**Model** (`app/models/post.rb`):



```
class Post < ApplicationRecord
  validates :title, presence: true  # Business rules
end
```





**View** (`app/views/posts/index.html.erb`):



```
<% @posts.each do |post| %>  <h2>
 <%= post.title %></h2>
 <div>
  <%= post.body_html %>
 </div>
<% end %>
```





**Your First Rails App**



No experience? Follow the [Ruby on Rails Tutorial step-by-step](https://guides.rubyonrails.org/getting_started.html) or for a super quick start, try this: 



1. rails new todos --skip-javascript` (no React complexity)
2. rails generate scaffold Task title:string done:boolean` 
3. rails server` → Todos CRUD working locally in 20 minutes
4. fly launch` → Live todos app (free tier, global edge network)



Hetzner VPS ($5/mo) works too if you prefer self-hosting.



I built this blog with Rails from scratch following that very recipe. You can too. 



Here's a challenge for you: build a simple blog with just text posts, deploy and post the link on comments. Would love to see your work + you will get the same feeling as going to the gym for the first time and lifting real weights.

Yes, your muscles will hurt the next day but that is how you grow.



p.s. feel free to DM me with questions on [LinkedIn](https://x.com/the_star_man) or [X](https://x.com/the_star_man)
p.s2 you are welcome to join the mailing list.
