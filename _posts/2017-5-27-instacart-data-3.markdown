---
layout: post
title:  "Instacart Insights Part 3"
date:   2017-05-27 12:56:00 -0600
categories: instacart, data
---
In which I freak out and un-freak out about making mistakes. But making mistakes is an important part of the learning process, so I refuse to delete my earlier mistakes.

### Full Disclosure
I'm not exactly sure what I'm doing. Once I transitioned from excel to python and pandas, I had a data crisis where I wasn't sure if I had been doing everything completely wrong. This demonstrates one of the main reason I wanted to isolate my idiotic experimenting away from existing platforms like Kaggle. Who am I? What am I doing? No one really cares. So this is my playground where I'm hoping every entry will be an improvement from the next.

Anyway. I went back to basics. I'm using the main training set for most of my analysis, since it has data on the products that compose specific orders. I think this set can also be correlated (by order ID) to order data that contains the time of day or day of the week. The main training set provided has 104,042 individual orders of 34449 different products.

#### What's the most popular product?

| Product ID | Product       		| Orders    |
|------------|-------------------|----------:|
| 24852 | Banana | 15450    |
| 13176 | Bag of Organic Bananas      | 12409    |
| 21137 | Organic Strawberries           | 8528    |
| 21903 | Organic Baby Spinach           | 7852    |
| 47209 | Organic Hass Avocado            | 6857   |
| 47766 | Organic Avocado            | 5646    |
| 47626 | Large Lemon           | 4928    |
| 16797 | Strawberries           | 4587    |
| 26209 | Limes          | 4526    |
| 27966 | Organic Raspberries           | 4420    |
| 27845 | Organic Whole Milk           | 4362    |

So my crisis from earlier might have been a bit of an overreaction. Sure, there aren't nearly as many banana orders as I initially thought, but *damn*, those bananas are popular.

Also, after some research about avocados, I think it's likely that "Avocado" still refers to the Hass Avocado. According to [wikipedia](https://en.wikipedia.org/wiki/Hass_avocado), the Hass Avocado's taste, size, shelf-life, high harvest yield, and capability for year-round harvesting, the Hass cultivar is the commercially available popular avocado in the world.

#### What's the most popularly reordered product?
#### What product is added to the cart first most frequently?
#### What's the average order length?
#### What's the largest order?
