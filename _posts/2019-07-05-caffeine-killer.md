---
layout: post
title:   Death by Coffee
date:   2019-07-05 10:20:00 -0600
categories: dataviz reddit 
published: true
---

This month's [r/DataIsBeautiful](https://www.reddit.com/r/dataisbeautiful/) visualization contest uses a table with caffeine contents for several different items. I used the dataset to depict the number of servings someone would need to consume for the caffeine to kill them. These estimates are based off an estimation that 10g (10,000mg) would cause an overdose in the average human being.

{% include caffeine.html%}

While the Chameleon Cold Brew is _probably_ a typo, energy drinks are probably the most dangerous. 30-40 of some of them will cause cardiac arrest. And while 50 Excedrin are probably going to cause many other medical problems, they will also contain enough caffeine to knock over the average adult. However, you should be safe enough with sodas, as it's unlikely you'll be able to consume the 185-250 necessary to OD on their caffeine. 

I used pandas for data wrangling and created the visualization with Bokeh.