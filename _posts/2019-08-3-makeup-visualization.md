---
layout: post
title:  Tracking Conversations about Makeup on Reddit (Continued)
date:   2019-08-03 16:05:00 -0600
categories: dataviz makeup
---

I've spent almost a year collecting data from [r/MakeupAddiction][rMakeupAddiction] (despite the ongoing drama there), and I'm ready to update an earlier post with the most frequently discussed and mentioned makeup brands.

Since February 2018, I've been scraping r/MakeupAddiction every night to collect thread and comment data. There was one instance in March 2019 where my raspberry pi got turned off and the scraping jobs didn't run for a month, but otherwise, I've got about a year's worth of data. This post builds on an earlier one [here](https://wrongpoison.github.io/dataviz/makeup/nltk/2018/09/12/makeup-visualization.html)

Here's what I've found: 

### The Top Fifteen

The top most-often discussed brands on r/MakeupAddiction from June 2018 to August 2019 were: 
| Rank | Brand | Total Mentions |
|------|-------|----------------|
|1 | Anastasia Beverly Hills | 4244|
|2 | Mac | 3562|
|3 | Urban Decay | 2977|
|4 | Too Faced | 2817 |
|5 | Morphe | 2765 |
|6| Fenty | 2247 |
|7| Tarte| 2035|
|8|Nyx | 1941|
|9|Kat von D|1905|
|10|Huda | 1616|
|11|Wet n Wild|1279|
|12|Pat Mcgrath|1111|
|13|Jeffree Star Cosmetics|1058|
|14| Elf Cosmetics | 805|
|15|Benefit|791|

![Top 15 most frequently mentioned makeup brands]({{ site.url }}/assets/makeup_graphs/top_fifteen_brands_sum.png "Top 15 most frequently mentioned makeup brands"){: .center-image }

For comparison, here is how the top 10 most-discussed brands trend on a month-to-month basis. ABH looks to continuously dominate, though brands like Too Faced and Urban Decay trend upward in months where they have new releases. 

![Top 10 most frequently mentioned makeup brands month-to-month]({{ site.url }}/assets/makeup_graphs/top_10_over_12_months.png "Top 10 most frequently mentioned makeup brands month-to-month"){: .center-image }

This next graph breaks down mentions on a day-to-day cumulative basis. Again, please excuse the flat lines in March and part of April--the machine that runs the cron job had gotten turned off.

![Top 10 most frequently mentioned makeup brands cumulative view]({{ site.url }}/assets/makeup_graphs/cumulative_makeup_mentions.png "Top 10 most frequently mentioned makeup brands cumulative view"){: .center-image }

### Methods
I run a nightly cron job on a raspberry pi (though any server would do) to query reddit's API and collect posts and comments from r/makeupaddiction. These posts are saved as a (poorly formatted) JSON file. To analyze, I used Python, relying particularly on Pandas and MatplotLib. 

[rMakeupAddiction]:https://www.reddit.com/r/MakeupAddiction/