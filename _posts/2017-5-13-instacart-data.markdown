---
layout: post
title:  "Instacart Insights Part 1"
date:   2017-05-13 1:16:00 -0600
categories: instacart, data
---
Instacart recently released an anonymized data set of its customers purchases. I'm a complete n00b when it comes to data analytics, but I think it's fascinating, so I figured this might be a neat opportunity to break out tableau, excel, and some python.

*Full disclosure: this post is a riff off of [3 Million Instacart Orders, Open Sourced](https://tech.instacart.com/3-million-instacart-orders-open-sourced-d40d29ead6f2).*

### Some Tentative Analysis
Here's a [PDF]({{ site.url }}/assets/most_popular_items_ordered.pdf) of the top 30ish (my excel skills are not yet there) most-ordered products. Holy snap! Bananas are off the chain! Both the humble regular banana (472,565 orders) and its fancier sibling, the bag of organic bananas (379,450) are the products purchased most frequently by Instacart users. I suppose bananas are pretty popular, generally speaking. They keep for a decent amount of time. They're pretty much the pinnacle of foods designed for commercial transportation. But the next most popular product, organic strawberries (coming in at 264,683 orders) doesn't even come close. Maybe all the banana-munchers know something I don't.

#### Organic vs <del>Inorganic</del> Non-organic
One last thing I wanted to do was examine those products that customers seemed to have the biggest preferences for the organic or non-organic version. This is instacart data, so I expected that my fellow millenial yuppies would stray organic more often than not when it was available. I wonder if one of the draws of instacart is that customers who prefer organic food have significantly greater access via Instacart, compared to their nearby grocery options. This idea is even cooler when I imagine how Instacart might penetrate food deserts and bring nutritious options to areas otherwise cut off. Though these places are likely food deserts in the first place because companies do not find them profitable enough to set up shop, so perhaps it's unlikely that Instacart would change any of that.

Anyway, here's a nifty chart showing the relative organic and non-organic purchases of a given food item. I only included products with greater than 20,000 purchases of both, and ones that had a clear organic analog. I wasn't sure how to treat sets of items like "raspberries," "red raspberries," and "organic raspberries;" or "banana" and "bag of organic bananas," so those were exluded.

[Organic and non-organic food bubble chart](http://triboluminescent.com/independent_pages/organic-vs-inorganic-instacart.html)

Notably, lemons are the only product that the non-organic version seems to take strong preference among Instacart customers. Organic limes also don't seem to be that popular, not even making the cut for 20,000 purchases. I would hazard a guess that citrus might be more of an afterthought than a meal centerpiece like spinach, or that as a garnish to a cocktail, customers might be less discerning. However, when I considered the recipes lemons frequently feature, the other ingredients' orgnanic versions remained popular. Citrus goes in salad dressing, on fish or poultry. Perhaps bakers don't head straight for organic options?

### My Crapshoot of a Methodology
I grabbed a subset of products purchased more than 20,000 times and used that as my analytic squeaky toy. Initially I thought I'd use Tableau Public for most of this, since I'd heard it was incredibly powerful for data visualizations. However, Tableau is very expensive and Tableau Public is not particularly full-featured. I have no idea how to optimize quantities of data, so I kept running into the row limits. I also couldn't figure out how to export any of the pretty visualizations. I copy/pasted the interesting data straight into excel, and started going from there. That was definitely not the most efficient way to go about things (think, copy/pasting like a doofus for an hour), but at least I gained confidence with every cell I filled. And fat-fingered. Definitely can't argue about the benefits of using the raw csvs when it comes to avoiding silly typo mistakes.

I used Google's bubble chart for the organic/non-organic visualization.

All data comes from Instacarts publically released dataset found [here](https://www.instacart.com/datasets/grocery-shopping-2017).

“The Instacart Online Grocery Shopping Dataset 2017”, Accessed from https://www.instacart.com/datasets/grocery-shopping-2017 on 5-8-2017