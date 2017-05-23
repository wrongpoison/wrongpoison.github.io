---
layout: post
title:  "Instacart Insights Part 2"
date:   2017-05-22 22:39:00 -0600
categories: instacart, data
---
This time I wanted to get a bit fancier, so I decided to install Pandas, a Python library and see what I could do.

## Baby Steps and Tables
First off, I decided to compare the items that users were ordering for the first time to those that they had ordered previously.

| Reordered       		| First Order      |
|-----------------------|------------------|
| 619141          		| 429434           |

The largest order in the set is one that contains 127 items.

The most popular departments are as follows:

| Department      		| Items Ordered    |
|-----------------------|------------------|
| personal care   		| 152978           |
| snacks          		| 141200           |
| pantry          		| 128165           |
| beverages       		| 85446            |

The most popular aisles are:

| Aisles                           		| Items Ordered    |
|---------------------------------------|------------------|
| candy chocolate                  		| 30368            |
| packaged cheese                  		| 27854            |
| salad dressing toppings          		| 25908            |
| ice cream                        		| 24818            |
| missing                          		| 23351            |
| chips pretzels                   		| 22922            |
| crackers                         		| 21605            |
| yogurt                           		| 20548            |
| soup broth boullion              		| 18985            |

All data comes from Instacarts publically released dataset found [here](https://www.instacart.com/datasets/grocery-shopping-2017).

“The Instacart Online Grocery Shopping Dataset 2017”, Accessed from https://www.instacart.com/datasets/grocery-shopping-2017 on 5-8-2017