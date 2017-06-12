---
layout: post
title:  "SSL and Chrome"
date:   2017-05-9 21:50:13 -0600
categories: https, chrome, development
---
With the latest version (58), Chrome makes another push for HTTPS, adding warning pages to more and more pages. I first experienced this problem when a javascript bookmarklet unexpectedly stopped working and we had to trace the problem back to an invalid SSL certificate.

### What's HTTPS?
The S at the end of HTTPS stands for "secure," and indicates that an HTTP page has a valid SSL certificate.

### What's SSL?

### Why Does Any of this Matter?
If you want your site to show up in Google's top search results, you need to use HTTPS. Customers are deterred by the warning pages and less likely to continue when Google calls into question a site's safety.

It's also important to note that effective as of 2018, SSL certificates will have reduced maximum lifetimes of 825 days, or two years and a three-month buffer.

#### Some other changes:
-Chrome 56 (Jan 2017) enabled warning by default. The impacts pages with insecure login sites and warns that a page may contain insecure instances of password or credit card data. To avoid errors, the site needs to be changed to include HTTPS or redirect the browser to a secure page for entering data.
-Later this year, in Chrome 61,  the Notifications API will also exclusively require HTTPS.
-It is anticipated that in Chrome 62 (expected around October) that this warning page will appear on any HTTP site that a user enters data into. This includes sites with any feature like a search bar, contact form, or other text entry.
-Later this year, all HTTP sites will be marked as insecure when accessed in Incognito mode.

#### Further Reading
-[Avoiding the Not Secure Warning in Chrome](https://developers.google.com/web/updates/2016/10/avoid-not-secure-warn)
-[Browser Watch: SSL/Security Changes in Chrome](https://www.thesslstore.com/blog/security-changes-in-chrome-58/)
-[Chrome HTTP Warning Spreading](https://www.thesslstore.com/blog/chrome-http-warning-spreading/)
-[Reduced SSL Certificate Lifetimes](https://www.thesslstore.com/blog/reduced-ssl-certificate-lifetimes/)
