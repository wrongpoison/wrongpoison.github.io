---
layout: post
title:  Tracking Conversations about Makeup on Reddit
date:   2018-09-3 1:04:00 -0600
categories: dataviz makeup nltk
---

I am a bit of a makeup junkie. Well, I've never mainlined mascara, so maybe more of a makeup addict. Sort of like the folks you will find at [r/MakeupAddiction][rMakeupAddiction], a subreddit for people interested in cosmetics, their application, improving makeup skills, and, occasionally, a bit of beauty industry drama (though most of that is relegated to [r/MUAConspiracy][rMUAConspiracy] and [r/BeautyGuruDiscussion][rBeautyGuruDiscussion]).

![Some YSL for good taste]({{ site.url }}/assets/ysl-lipsticks.jpeg "Some YSL for good taste"){: .center-image }

Since February 2018, I've been scraping r/MakeupAddiction every night to collect thread and comment data. My tentative goals were to see which brands were frequently talked about, both relative to one another and over a period of time. My stretch goal was to eventually try my hand at some sentiment analysis and see if redditor sentiments aligned with events that seemed to resonate throughout the beauty community, e.g., Rihannah's fantastically inclusive foundation selection (yay) or Tarte's rather pale release of Shape Tape Foundation (nay). While I have been scraping data since February, I have made several changes to the collected data's format. As a result, I've selected a smaller snapshot of consistently collected data from the beginning of June to the end of August. 

Here's what I've found: 

### The Top Ten

The top most-often discussed brands on r/MakeupAddiction from June to August are:
1. Anastasia Beverly Hills
2. Mac
3. Too Faced
4. Fenty
5. Tarte
6. Morphe
7. Nyx
8. Urban Decay
9. Kat Von D
10. Jaclyn Hill

![Top 10 most frequently mentioned makeup brands]({{ site.url }}/assets/makeup_graphs/top-ten-brands-june-august.png "Top 10 most frequently mentioned makeup brands"){: .center-image }

### Individual Brands
Lines in green indicate announcements. Lines in gold indicate availability in stores.

#### Anastasia Beverly Hills
- Anastasia Dream Glow Kit
- Anastasia x Norvina Eyeshadow Palette (7/17 online, in stores 8/7)
![Anastasia Beverly Hills mentions]({{ site.url }}/assets/makeup_graphs/abh-mentions-june-august.png "ABH mentions"){: .center-image }

#### Mac
- Oh, Sweetie Lipcolor Collection
- Mac x Aaliyah Collection (available on June 20 online and instores June 21)
- Mac x Selfridges Eye See Eyeshadow Palette
- National Lipstick Day (and free lipstick giveaways) on July 29.
- Mac Dazzleshadow Liquid (launch Aug 9)
![Mac mentions]({{ site.url }}/assets/makeup_graphs/mac-mentions-june-august.png "Mac mentions"){: .center-image }

What is the end of July spike?

#### Too Faced
- Tutti Frutti Collection (released Aug 15)
- Cheers to the 20 Years Collection (released 8/4)
![Too Faced mentions]({{ site.url }}/assets/makeup_graphs/toofaced-mentions-june-august.png "Too Faced mentions"){: .center-image }


#### Fenty
- Moroccan Spice Palette, Flyliner, Pro Filt'r Eye Primer, and brushes (July)
- Diamond Ball-out Killawatt Freestyle Highlighter (released Aug 1)
![Fenty mentions]({{ site.url }}/assets/makeup_graphs/fenty-mentions-june-august.png "Fenty mentions"){: .center-image }


#### Tarte
- Shade extensions for Creaseless Concealer and Amazonian Clay Foundation
- Blush Book Vol IV (launch 8/22)
![Tarte mentions]({{ site.url }}/assets/makeup_graphs/tarte-mentions-june-august.png "Tarte mentions"){: .center-image }

#### Nyx
Nyx doesn't seem to have any major spikes, but is consistently mentioned in the rounds of r/MakeupAddiction.
![Nyx mentions]({{ site.url }}/assets/makeup_graphs/nyx-mentions-june-august.png "Nyx mentions"){: .center-image }


#### Urban Decay
- [Born to Run collection][born-to-run] announced June 6, in stores June 24
- Announcement of Elements Eyeshadow Palette (to be released 9/10)
![Urban Decay mentions]({{ site.url }}/assets/makeup_graphs/urbandecay-mentions-june-august.png "UD mentions"){: .center-image }

What is this spike around early July?

#### Kat Von D

Here's a close-up of discussion for Kat Von D cosmetics. In early June, Kat posted to [Instagram][kvd-antivax] that she did not intend to vaccinate. This prompted backlash against the brand for its owners ostensible anti-vax sentiments. Many redditors shared information about dupes for popular KVD products and posted about how they intended to boycott the brand. I suspect that this accounts for the spike in discussion after June 7.
![Kat Von D mentions]({{ site.url }}/assets/makeup_graphs/katvond-mentions-june-august.png "Kat Von D mentions"){: .center-image }

#### Jaclyn Hill and Morphe
![Jaclyn Hill mentions]({{ site.url }}/assets/makeup_graphs/jaclynhill-mentions-june-august.png "Jaclyn Hill mentions"){: .center-image }
Vault Drama: Jaclyn's Morphe collaboration collection was announced June 11. However, June 20, the brand announced that it would delay the launch of the Jaclyn Hill Morphe Vault due to quality control issues. The Vault Collection was then scheduled for release on August 14.


### Other Notes
While it appears that spikes in brand discussion often coincide with new launches, this does not seem to be the rule. Conspiciously absent is Pat McGrath who had several releases during this time period. However, McGrath Labs never had more than 7 mentions on a given day. I would hypothesize that the nature of the r/MakeupAddiction has something to do with this. While redditors frequently post their excitement for upcoming or imminent releases, more often content revolves around FOTD (face of the day) and practicing makeup techniques. This means that redditors are more likely to talk about their HG (holy grail) products and those which make up their daily routines. While Pat McGrath's quality is frequently lauded, the luxury price puts it out of range for many consumers. The same logic can be applied to Natasha Denona, which also had a number of eyeshadow palette releases in this time, but very little discussion on this subreddit.

### Methodology

I gathered my data with a nightly cron job using the Reddit API. The data was saved to a series of flat files. I used a series of trusty Jupyter notebooks to explore and parse the data, shaping and manipulating it with the usual suspects, Panadas and Numpy. NLTK did the heavy lifting with gram tokenization (read: counting word frequencies). And then I used MatPlotLib for preliminary visualizations and Bokeh for some fancier, interactive ones.

[rMakeupAddiction]:https://www.reddit.com/r_makeupaddiction/
[rMUAConspiracy]:https://www.reddit.com/r_muaconspiracy/
[rBeautyGuruDiscussion]:https://www.reddit.com/r_beautygurudiscussion/
[born-to-run]:https://www.instagram.com/p/BjstdMKDvhy/?taken-by=urbandecaycosmetics
[kvd-antivax]:https://www.instagram.com/p/Bjvkm1gHPPb/?utm_source=ig_embed