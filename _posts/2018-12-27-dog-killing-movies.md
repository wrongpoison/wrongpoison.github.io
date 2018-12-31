---
layout: post
title:  What Movie Genre Kills the Most Dogs (or Other Critters)?
date:   2018-12-27 2:11:00 -0600
categories: dataviz movies dogs animals
published: true
---

I'm pretty picky when it comes to movies. Most of the time, I fall into the-book-was-better camp. And really, I think television tends to be a better narrative vehicle. But one thing is guaranteed to make me resent a movie: killing off the dog. I still resent Homeward Bound, and Shadow didn't even die. But while I view it as a cruel surprise, one of my friends was a bit less willing to play passive victim to these murders. When watching previews for John Wick, she didn't just think "I bet the dog dies." She thought "I bet somewhere in the internet will tell me if the dog dies. And if any dog ever dies." And lo, she found (and introduced me to)
[Does The Dog Die?][DoesTheDogDie]. This is a website where interneteers can let you know if the dog dies in any given movie. Or if a cat dies. Or really any animal you can think of. It'll also tell you if there are needles, strobe effects, or any number of triggering phenomena. And before you get self-righteous about how sensitive millennial snowflakes are, take just a second to think about how fascinating it is to live in a world where people go around volunteering this kind of knowledge for things they want other people to enjoy. 

I scraped all of the movies tagged with dog deaths. One important note is that I think these tags really include a lot more animals than dogs. I dug into a few (Sucker Punch, for instance) and noticed that animal deaths are likely to fall under the dog label. I suspect that initially there were fewer categories to describe movies and that many things fell into the original "does the dog die" label. Additionally, any depiction of a dog death is included, for instance, even if a dog dies of old age, or if the animal death is relatively peripheral to the rest of the film. At any rate, I think it's a fair representation, though not a perfect data set. 

After gathering a list of movies from Does the Dog Die, I queried [The Movie Database's API][TheMovieDatabase] to retrieve genre categories for each movie in my list. Again, this is fairly subjective. Most movies return multiple genre classifications. Ideally, I think I should have tried to weight the different genres based off the movie, but at present I don't have a satisfactory way to programmatically do this. 

The dataset includes 1768 different movies. However, a single movie can have multiple genres. We can see in the graph below that Dramas kill the most dogs by a substantial margin. However, Comedy movies rank 4th in the number of dog/animal deaths. Family movies rank in the upper half as well.

{% include animal_death_movies.html%}

I also tried to determine which actors (or actresses) were most likely to appear in a movie with a dog death. It appears that [Mel Blanc][MelBlanc] and [Frank Welker][FrankWelker] have seen the most dogs done in by the big screen. Other action heroes such as Morgan Freeman, Samuel L. Jackson, and Bruce Willis have seen a notoriously high number as well.

![Actors who have seen the most dog deaths]({{ site.url }}/assets/dogkillers.png "Actors who have seen the most dog deaths"){: .center-image }

In the future, I'd like to examine which actors or directors are most likely to make movies where the dog dies. Alternatively, it could be interesting to look at the financial performance of movies where the dog dies (compared to those where the dog doesn't). 

I used Python to make this project. Libraries of note include BeautifulSoup (scraping), Requests (web requests), pandas (data manipulation), and Bokeh (visualizations).


[DoesTheDogDie]:https://doesthedogdie.com
[MelBlanc]:https://en.wikipedia.org/wiki/Mel_Blanc
[FrankWelker]:https://en.wikipedia.org/wiki/Frank_Welker
[TheMovieDatabase]:https://developers.themoviedb.org/3/getting-started/introduction