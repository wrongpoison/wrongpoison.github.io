---
layout: post
title:  "Game of Thrones Discussions on Reddit"
date:   2019-03-31 18:08:00 -0600
categories: dataviz television GoT
---

With the final season of _Game of Thrones_ approaching, I decided to collect Reddit threads and comments and try my hand at some sentiment analysis. The goal was to identify the most liked and disliked characters in GoT canon. Feel free to skip to the [bottom](#Results) for results. 

#Data Acquisition
Reddit provides an API service for any developer who registers their application and receives and authentication token. For this work, I created a nightly scheduled job (a cron job) to run every night at midnight to make a request to Reddit’s servers and request the last thousand threads that had made the front page of [r\GameOfThrones](https://reddit.com/r/gameofthrones). The front page contains those posts which have been highly ranked, according to user input and Reddit’s own algorithm. The scheduled job ran on a raspberry pi at the same time every day to try and account for discrepancies in how many people might be commenting, upvoting or downvoting, or otherwise engaging in the subreddit. This job ran from February 20 to March 13, collecting 23 different collections of documents. 
Once collected, the data cleaning was done primarily by tokenizing the corpus using NLTK. Punctuation, hyperlinks, and emojis were left, but ignored in analysis. 

#Analysis
Because there is a finite number of GoT characters, I used a hard-coded list 
primary and secondary characters from the show’s Wikipedia page 

, I created a frequency distribution for the entire corpus and searched for each Game of Thrones character

#Results
VADER (Valence Aware Dictionary and sEntiment Reader) is a lexicon and rule-based sentiment analysis tool that is specifically attuned to sentiments expressed in social media, and works well on texts from other domains (Hutto, 2014/2019). I searched the corpus, associating documents containing a character’s name with that character and appending the VADER positive, negative, and neutral values. Then I averaged the positive, negative, and neutral scores for each character to create a single value. 
To discover whether a character was viewed with a net positive or negative sentiment, I subtracted the average negative score from the average positive score.
One drawback of this approach is that it assumes every document containing a character’s name is necessarily focusing on that character. As Reddit documents tend to be short (only a few words or sentences), I thought this broader approach would be acceptable for an initial approach, though ideally a more granular tactic would be preferred. This approach also confounds sentiments expressed about one character if another is included in the document. For instance, Jaime tends to be positively received, but he is often mentioned in conjunction with his sister, Cersei, who tends to be disliked by fans. 
Clearly Jon Snow is the most frequently discussed character on this particular group of message boards, with over 30,000 discrete mentions. This volume appears promising and diverse enough for some preliminary conclusions. Most characters have over 1000 mentions as well. However, after performing sentiment analysis it is difficult to draw straightforward conclusions. Despite Jon’s inarguable popularity, his VADER scores present a more ambiguous result. For instance, his negative score (0.0923) is slightly higher than his positive score (0.0902). If he were an anti-hero, this might be expected, but Jon is largely viewed as the protagonist of the show. Perhaps this is a conflation of negative events that happen around Jon, rather than the internet community’s perception of Jon. If we examine another frequently-discussed character, Cersei, our expectations are more closely matched. Cersei is frequently viewed as a villain, and she is mentioned over 18,000 distinct times. As a contrast to Jon, her negative VADER score (0.1210) is higher than her positive VADER score (0.0923), suggesting an overall more negative perception from r/GameOfThrones members. 
These results match expectations on the surface level, and the data set collected is robust, but the size of the data collected makes it difficult to work with. Future analyses should focus on cleaning the data and paring it down to a smaller size to verify the adequacy and efficacy of analytic methods. 


![GoT Character Counts]({{ site.url }}/assets/got_graphs/got_character_counts.png){: .center-image }


![GoT Negative VADER Scores]({{ site.url }}/assets/got_graphs/got_negative_vader_scores.png){: .center-image }


![GoT Neutral VADER Scores]({{ site.url }}/assets/got_graphs/got_neutral_vader_scores.png){: .center-image }


![GoT Positive VADER Scores]({{ site.url }}/assets/got_graphs/got_positive_vader_scores.png){: .center-image }