# Personal Website
As of October 2023, I've decided to overhaul my website, moving from my ReactJS-based approach to a minimal, statically-generated, bloat-free Next.js-based approach. The primary motivation is to start a blog focusing on documenting my endless homelab tinkering. ReactJS, while pretty, is tedious to use if you'd like to add a brand new page for each blog post (at least, the way I had it set up). Additionally, the `react-router` plugin for ReactJS, which allows routing to different pages, has one large inherent flaw. Say you're viewing a web page that you've created, `www.example.com/test`. If you refresh this page, you will be presented with a 404 error. React client-sided routing is the culprit, and [this](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually) Stack Overflow discussion gives a good overview of why this issue exists.

## Breakdown
### Framework/Tools
- Next.js

### Build/Deploy process
#### Build
`./build.sh`
This will build the production-ready website.
#### Deploy
`./deploy.sh`
    - Copies the entire production-built directory to my webserver's serving directory on my nginx server.
    - Pulls the most recent version of my resume from github.
    - Creates the music library JSON to be interpreted for the music page.
    - The updated website will immediately be available. Since this is a static website, rather than a website that uses a database, system downtime is not a requirement to deploy.

## Content
### Home
This serves a simple home page with my name, picture, job title, and welcome message.
### Resume
This serves an image of my most up-to-date resume from Github, plus a link to download the full PDF.
### Blog
This is a frequently updated blog page about any sort of project that I'm doing. The base page lists all topics that I've written about.
### Music
This is a page dedicated to listing each album I've listened, along with its full average track rating. I've been amassing a collection of music for quite some time, ripping CDs to use on my Plex music server. Once I've rated each track in an album from 1-5, it is eligible to show up on this page. Daily, I run a script which scans my music library, indicates which albums have been fully rated, gives the album a rating (average of each track rating), and puts the information into 
### About
This is a small page with more details about me and the content of this website.
