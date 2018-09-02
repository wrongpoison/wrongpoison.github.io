---
layout: post
title:  "Text Analytics From Shakespeare"
date:   2018-08-05 10:22:03 -0500
categories: nltk shakespeare dataviz
---

Here is a visualization of all the colors mentioned in *The Complete Works of William Shakespeare*, found [here][shakespeare-gutenberg] on Project Gutenberg. I used [this list of colors][colors] for examples and guidance for distinct color names. As I was going through the list, however, I was forced to ask "well, what is a color anyway?" Would a red by any other name look quite as vibrant? Is "claret" a color? Or a metaphor for red using a dark-hued wine? Is "wine" a color? Red is certainly a color, since there is no noun object "red" outside of the color. As a result, I tried to avoid colors that might be interchangeable with an actual noun, such as "lemon" or "salmon." This felt fairly hypocritical when it came to "orange," since I was treating one citrus fruit as a color and the rest as strictly noun-based metaphors for variations of green and yellow, but the solution seemed sufficient for the task at hand.

[shakespeare-gutenberg]: https://www.gutenberg.org/files/100/100-0.txt
[colors]: http://www.two4u.com/color/big-table.html

![Shakespeare colors]({{ site.url }}/assets/shakespeare_viz.png){: .center-image }
