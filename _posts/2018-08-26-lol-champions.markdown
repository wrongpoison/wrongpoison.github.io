---
layout: post
title:  "League of Legends Champion Comparisons"
date:   2018-08-26 9:16:00 -0500
categories: LeagueOfLegends dataviz
---

The first in a series of data analysis posts of different League of Legends Champions' capabilities. 

The data visualized here is taken from [Data Dragon][data dragon] on August 26.

![Champion Stats Box Plot]({{ site.url }}/assets/lol_champs_normalized_boxplot.png){: .center-image }

Let's pick on some outliers. The poor bloke with that high attack speed offset is Graves with 0.3. Kled starts out with the lowest HP at 340. Dr. Mundo, Garen, Mordekaiser, Katerina, Zac, and Riven all start out with 0 MP. And Shen, LeeSin, Kennen, Akali, and Zed make out like bandits with starting MP regen of 50. Many champions start with the low attack range of 125. 

![Champion Stats Box Plot (per level)]({{ site.url }}/assets/lol_champs_normalized_boxplot_per_level.png){: .center-image }

Starting with outliers again:
Thresh never gains any armor with levels. The next lowest is Gnar with 2.50. Miss Fortune gains the least attack damage per level (1.0), while Mordekaier, Yorick, Darius, and Illaoi gain the most (5.0). Alistar gains the highest HP per level at 106. Heimerdinger has the highest HP regen per level (1.75). Jhin never gains any attack speed with level increases, but Gnar grows up by 6.00 attack speed with every level.

![Champion Stats Heat Map]({{ site.url }}/assets/lol_champ_stats_correlation.png){: .center-image }

The strongest correlations appear to be between the following champion stats:

- armor and attack range
- attack damage and attack range
- attack damage per level and attack range
- all hp stats (hp, hp per level, hp regen, hp regen per level) and attack range
- move speed and attack range
- spell block and attack range
- spell block per level and attack range

{% include lol_attack_damage_v_range.html%}


{% include lol_attack_damage_v_armor.html%}

Thanks to Katarina Hoeger's post on [embedding python visualizations][katarinahoeger] in jekyll.

[data dragon]:https://developer.riotgames.com/static-data.html
[katarinahoeger]: http://katarinahoeger.com/2018/03/17/embedding-plots-in-jekyll-blog