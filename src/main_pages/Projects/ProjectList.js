/* PROJECT POST TEMPLATE

  {
    fullTitle:    "", 
    title:        "",
    subtitle:     "",
    categories:   [],
    desc:         "",
    body:         `<p>
                  </p>`,
    timestamp:    ""
  },

*/

/*
  CURRENT CATEGORIES:
    - linux
    - networks
    - web dev
    - extracurricular
    - android
    - security
    - professional
    - school
 */

// KEEP PROJECTS IN CHRONOLOGICAL ORDER - OLDEST FIRST

const ProjectList = [
  {
    /* Linux Tweaking */
    fullTitle: "Linux Tweaking and Exploration",
    title: "Linux",
    subtitle: "Extracurricular",
    categories: ["linux", "extracurricular"],
    desc: "I primarily run Linux since it's efficient for programming. I heavily customize my workflow.",
    body: `<p>
              One of my main hobbies is tweaking and maintaining Ubuntu on my
              laptop and desktop, which is a great way for me to learn more about how Linux
              works. I enjoy customizing my workflow for efficiency, using a
              tiling window manager (i3) and a taskbar (polybar). The dotfiles
              for these are on my <a href="https://github.com/cohenchris/dotfiles">GitHub</a>.
          </p>
          <p>
              I have written numerous bash scripts to automate some mundane
              tasks, and heavily customized my .vimrc and .bashrc. I currently use  
              <a href="https://yadm.io/">YADM</a> (Yet Another Dotfiles Manager) to 
              keep track of all of my dotfiles. With such a heavily customized workflow,
              It makes it easy to transition between computers when needed. It even
              features a bootstrapping script that takes a fresh install of Linux and 
              changes the settings to exactly what I want them to, an exact copy of my
              normal workstation.
          </p>`,
    timestamp: "August 2017 - Present",
  },

  {
    /* printf() */
    fullTitle: "printf() Replacement in ARM Assembly",
    title: "printf()",
    subtitle: "",
    categories: ["linux", "school"],
    desc: "A functional replacement for printf() written in ARM Assembly.",
    body: `<p>
              In my Computer Architecture course, we had to implement
              functionality for{" "}
              <strong>printf()'s %c, %s, %d, and %x in ARM Assembly</strong>. %c
              and %s were accomplished using loops and the function putchar(). %x was a bit
              more difficult - I used bit shifting to isolate 4 bits at a time, translated
              into a hex digit, and print the hex digit. %d was the toughest. I
              isolated each base 10 digit and printed it, but it was much
              tougher than %x since base 10 is not a multiple of 2, so bit
              shifting is not possible.
          </p>`,
    timestamp: "April 2019",
  },

  {
    /* Crane NLP Project */
    fullTitle: "NLP (Natural Language Processing) Database Parsing in Python",
    title: "NLP on Databases",
    subtitle: "Internship at NSWC Crane",
    categories: ["professional"],
    desc: "I used NLP to parse navy databases, making problem diagnosis significantly faster.",
    body: `<p>
              During the Summer of 2019, I had the pleasure of working for the
              Naval Surface Warfare Center, Crane Division. I improved US Navy
              missile sustainment efforts by upgrading an existing natural
              language processing algorithm to process failure databases. The
              work that I contributed to has a patent pending as well.
          </p>`,
    timestamp: "May 2019 - August 2019",
  },

  {
    /* Pi-Hole */
    fullTitle: "Raspberry Pi DNS-Level AdBlocker - PiHole",
    title: "Pi-Hole",
    subtitle: "Extracurricular",
    categories: ["networks", "security"],
    desc: "A DNS-level adblocker hooked up to my router.",
    body: `<p>
              Once I completed my Computer Architecture course, I had a
              Raspberry PI 3B+ left over, so I decided to download a program
              called PiHole. This program functions as a DNS server for your
              home network, so I redirected all of my router's traffic to the
              Pi. It uses a database of malicious/intrusive host names to block
              them before they even reach your device. I particularly like it
              because it blocks advertisements AND trackers.
          </p>`,
    timestamp: "August 2019 - Present",
  },

  {
    /* malloc() */
    fullTitle: "Memory Allocation Library in C, Replacement for 'stdlib.c'",
    title: "Memory Allocation Library",
    subtitle: "",
    categories: ["linux", "school"],
    desc: "A memory allocation library written in C, helping me learn how traditional UNIX memory allocation works.",
    body: `<p>
              This large project taught me the inner workings of memory
              allocation. I created a program that has functionality for
              malloc(), free(), realloc(), and calloc(). The main, most
              difficult parts were managing large blocks of heap memory obtained
              by sbrk() to avoid over-allocation and fragmentation of memory.
              Multiple different block-finding methods were implemented - first
              fit, best fit, worst fit, and next fit.
          </p>`,
    timestamp: "September 2019",
  },

  {
    /* Shell */
    fullTitle: "Shell Interpreter In C",
    title: "Shell",
    subtitle: "",
    categories: ["linux", "school"],
    desc: "A shell interpreter written in C to combine behavior from common shells.",
    body: `<p>
              This month-long project covered an absurd amount of content.
              We were tasked to create what is essentially a bash clone. The
              lexical analysis was done using <strong>flex and bison</strong>,
              where I tokenized certain inputs using regular expressions,
              executing different code based on what was inputted.
          </p>
          <p>
              <strong>File redirection</strong> was one of the first things
              that I tackled, so I learned all about juggling file descriptors
              to do so. <strong>Piping</strong> was a bit different than file
              descriptors - we had to use the pipe() system call and
              read/write to/from the pipe to communicate between different
              parts of the command.
          </p>
          <p>
              The next section covered{" "}
              <strong>signals and signal handling</strong>. Specifically, we
              set up handlers for ctrl-C (terminate command), ctrl-R (search
              command history), and SIGCHLD (zombie process elimination).
          </p>
          <p>
              One of the most challenging parts of this project was
              implementing <strong>subshells</strong>. For this, we had to
              fork a new process, and use two different pipes to communicate
              with it in order to get the output of the desired command. This
              proved difficult to debug because of the fact that two processes
              were being run.
          </p>
          <p>
              We also used regular expressions and directory browsing to
              implement <strong>wildcarding</strong>. We handled wildcarding
              for '*' and '?'.
          </p>
          <p>
              One smaller part of this project was{" "}
              <strong>decoding raw input</strong>, rather than canonical
              input. I was able to allow the user to type as they normally
              would with bash. Specifically, I handled left arrow, right
              arrow, delete (and ctrl-D), backspace (and ctrl-H), home (and
              ctrl-A), and end (and ctrl-E).
          </p>
          <p>
              The last part of this project was to implement{" "}
              <strong>command history and ctrl-R searching</strong>. Command
              history was pretty straightforward, and I ended up imitating
              bash's ctrl-R searching mode.
          </p>`,
    timestamp: "September 2019 - October 2019",
  },

  {
    /* Twistter */
    fullTitle: "Twistter (Twitter + Reddit Crossover) in Javascript (ReactJS)",
    title: "Twistter",
    subtitle: "",
    categories: ["web dev", "school"],
    desc: "A twitter/reddit hybrid. I worked on front-end using ReactJS.",
    body: `<p>
              This group project focused on the SCRUM philosophy of software
              development and making a full-fledged application. I was assigned
              to the front end team, since I already knew ReactJS, and did an
              extremely large majority of the work for the front end. I learned
              how to communicate with the back end Python Flask API using
              'axios' GET/POST calls, and made a dynamically-updated GUI for the
              user. I am most proud of creating a login/logout functionality, as
              well as a Direct Messaging system between users. The most
              difficult part was updating the GUI based on who is logged in.
          </p>`,
    timestamp: "August 2019 - December 2019",
  },

  {
    /* Task Manager */
    fullTitle: "UNIX Task Manager in C",
    title: "Task Manager",
    subtitle: "",
    categories: ["linux", "school"],
    desc: "A task manager for UNIX written to learn about the structure of '/proc'",
    body: `<p>
              During this group project, I was assigned to explore and
              understand what goes on in /proc on a Unix system, and pulled
              information such as system information, process name, PID, process
              resources, disk size, and disk usage. From there, I put the
              information into easily-accessible structs for the front-end team
              to handle.
          </p>`,
    timestamp: "November 2019 - December 2019",
  },

  {
    /* Sudoku Solver */
    fullTitle: "Sudoku Solver in C++",
    title: "Sudoku Solver",
    subtitle: "Extracurricular",
    categories: ["extracurricular"],
    desc: "A sudoku solver with 4 specialized solving algorithms. Uses recursive brute-forcing to help when needed.",
    body: `<p>
              During my 2019-2020 Winter break, I decided to teach myself
              C++, and challenge myself with a project that I had no idea
              how to start. The full source code of this project can be found 
              on <a href="https://github.com/cohenchris/sudoku_solver">GitHub</a>.
          </p>
          <p>
              I bought a sudoku book and began completing puzzles to get a
              good idea of how these puzzles could be solved algorithmically
              with as little guessing as possible - I ended up implementing
              5 different algorithms, which helped me complete around 40-50%
              of boards that I threw at it. The challenge, though, was the
              rest of the boards
          </p>
          <p>
              To finish everything else off, I implemented a recursive
              brute force algorithm. Basically, the idea was, when the
              program got stuck, solve a random Cell with a random
              candidate, then go on as usual. If the program got stuck
              again, it would recurse again, choosing another random value
              for another random Cell. If there were any unsolved Cells with
              no candidates, that brute force attempt failed, and another
              random candidate from the original Cell was chosen. If all
              candidates from that Cell failed, the board is unsolvable.
          </p>`,
    timestamp: "December 2019 - January 2020",
  },

  {
    /* Kernel Scheduling */
    fullTitle:
      "Kernel Instrumentation and Completely Fair Scheduling in XINU OS",
    title: "Completely Fair Scheduling",
    subtitle: "",
    categories: ["linux", "school"],
    desc: "A scheduling algorithm that attempts to efficiently juggle CPU and I/O bound processes based on typical behavior.",
    body: `<p>
              The ideology behind this algorithm, currently used in Linux as of 2007, is relatively simple.
              CPU-bound processes need the CPU as much as possible, so that they can finish
              any needed calculations as quickly as they can. However, I/O-bound processes are not
              bottle necked by the CPU, but rather, the user. Therefore, whenever an I/O-bound process is running,
              we should context-switch it out until it's ready. When it's finally ready, it's immediately given
              control of the CPU.
          </p>
          <p>
              Since, in this case, priority of a process clearly changes throughout its lifetime, we cannot use
              XINU's default static priorities. A new field for each process is created, which increases in parallel
              to the time that it's been running. This makes it easy to balance all CPU-bound processes and make sure
              they get equal control of the CPU.
          </p>
          <p>
              First, on creation of a process, it is created a priority value equal to the lowest priority value
              in the ready list. This helps make sure that a newly created process doesn't starve any existing processes.
              Just completing this simple step already makes sure that every process in the queue gets equal share of
              the CPU, without starving any other process. This means that CPU-bound process scheduling is complete.
          </p>
          <p>
              Secondly, we need to handle I/O-bound processes. There are many cases when a process would be I/O-bound,
              but for simplicity in this lab, we were instructed to only handle the case of a sleeping process.
              When a process is put to sleep, it is taken out of the ready list, so we don't have to worry about anything
              there. However, when the process is woken up, it is given a priority value equal to the maximum priority
              in the ready list. This makes it so that a woken process immediately gets the CPU. Setting the priority
              value equal to the max in the list, rather than the max total, makes sure that it doesn't starve other
              processes.
          </p>`,
    timestamp: "February 2020 - March 2020",
  },

  {
    /* Async IPC and Callbacks */
    fullTitle:
      "Asynchronous Inter-Process Communication with Callback Functions",
    title: "Asynchronous IPC and Callbacks",
    subtitle: "",
    categories: ["linux", "school"],
    desc: "Implementation of a responsive callback function using  ways for processes to communicate and return-oriented programming.",
    body: `<p>
              This lab was used as both illustration for how callback functions work, and training for return-oriented programming.
              IPC (inter-process communication) is used for a process to signal another process, which would then execute the callback
              function once the receiver is running.
          </p>
          <p>
              The sender process first puts a message into the receiver's inbox. It will stay there until the receiver has been
              context-switched back in. Once that happens, the receiver checks the inbox. If there is a message, return-oriented
              programming is used to manipulate the stack. The address of the callback function overwrites the original return address,
              and the original return address is moved down one space. This cases the callback function to first be executed, then the
              original place in the receiver's code.
          </p
          <p>
              This is not the most responsive way to implement a callback function, but there are advantages with this method.
              XINU is meant to be run on a single-core machine, and on a relatively weak back end. If we simply ran the callback
              function immediately when a receiver receives a message, the overhead involved in doing so could slow down execution
              significantly. XINU's single-core approach means that only one process holds the CPU at a given time, so there's no
              advantage in doing it that way in the first place, since the sender can never send a message while the receiver runs.
          </p>`,
    timestamp: "April 2020",
  },

  {
    /* Honeypot */
    fullTitle: "HTTPS Webserver Honeypot in Python",
    title: "Webserver Honeypot",
    subtitle: "Extracurricular",
    categories: ["networks", "security", "web dev", "extracurricular"],
    desc: "An HTTPS honeypot designed to lure attackers and study attack methodology.",
    body: `<p>
              Realizing that I lacked experience in cyber security, I decided to 
              take the plunge with a large personal project. A honeypot is a term 
              used in cyber security describing a network entity that purposefully 
              lures attackers away from some more important part of a network. Among 
              other functionalities, I decided to implement this. The full project proposal, 
              source code, and final analysis/report can be found on 
              my <a href="https://github.com/cohenchris/webserver_honeypot">GitHub</a>.
          </p>
          <p>
              I began by creating a robust, legitimate-looking HTTP web server. The
              final product implemented 14 different response codes, and support for 10 
              different file types. There is also full-fledged graphical directory browsing,
              starting at the 'server_root' folder.
          </p>
          <p>
              Each request made to the server is stored in a local MySQL database, recording the
              number of the request, time requested, source IP, source port, and hostname if the 
              IP is known. This logging proved to be extremely useful for later analysis.
          </p>
          <p>
              Parsing the server logs, I wrote a blacklisting program that would automatically ban
              any IP that attempted to connect 10 or more times in 3 seconds, and returned a specialized
              HTTP response code to the client. This helped decrease any excess load on the honeypot.
          </p>
          <p>
              I temporarily mapped the subdomain 'webserver.chriscohen.dev' to the IP of the server that was
              running the honeypot. In just a few days, I got hundreds of requests. The full analysis and breakdown
              of the requests can be read in its GitHub repository, linked above. If you'd like to test it for yourself,
              an interactive script is available that installs all dependencies, sets up the local MySQL server to log,
              and creates a script that starts the server that serves the IP of your choosing.
          </p>`,
    timestamp: "April 2020 - May 2020",
  },

  {
    /* Personal Web Server */
    fullTitle: "A Web Server Deployed Using Docker-Compose and Nginx",
    title: "Web Server",
    subtitle: "Extracurricular",
    categories: ["networks", "extracurricular", "web dev"],
    desc: "A web server deployed using Nginx and docker-compose, serving multiple different services for my personal use.",
    body: `<p>
              I used to deploy my website on GitHub Pages, but it was quite limiting.
              If I ever wanted to make some part of my website non-static, there would be
              a complete roadblock. I decided to take the opportunity to convert over to
              a real web server using Nginx, and learn along the way.
          </p>
          <p>
              Right now, this web server hosts 5 different sites:
              <a href="https://chriscohen.dev">Main Website</a>,
              <a href="https://searx.chriscohen.dev">SearX</a>,
              <a href="https://rss.chriscohen.dev"/>FreshRSS</a>,
              <a href="https://privatebin.chriscohen.dev"/>PrivateBin</a>, and
              <a href="https://nextcloud.chriscohen.dev"/>NextCloud</a>
              The main portion of my website is meant to be a portfolio of sorts, and a place that I can experiment
              and keep up-to-date with ReactJS. Another portion, Searx, is an open-source, metasearch engine that you can find on <a href="https://github.com/asciimoo/searx">GitHub</a>.
              It uses proxies to prevent your privacy from being compromised. It seemed like a fun project to learn about proxies.
              FreshRSS is for my personal RSS feed. I use this to centralize all of my news.
              PrivateBin is a convenient, self-hosted, <strong>encrypted</strong> alternative to PasteBin, featuring self-destruct capability.
              NextCloud is my personal cloud server, away from the prying eyes of Google. Check out the NextCloud tile among my other projects.
          </p>
          <p>
            I have this Nginx web server deployed on a <a href="https://njal.la/">Njalla</a> VPS.
            I would highly recommend Njalla - it's a fantastic privacy-oriented provider that is not based in the United States (and most importantly, outside of the <a href="https://en.wikipedia.org/wiki/Five_Eyes#Other_international_cooperatives">9 eyes</a)
          </p>`,
    timestamp: "June 2020 - Present",
  },

  {
    /* Personal Website */
    fullTitle: "A Personal Website written using ReactJS",
    title: "This Website",
    subtitle: "Extracurricular",
    categories: ["web dev", "extracurricular"],
    desc: "A personal website written using ReactJS. Emphasis on learning hooks and sleek, modern design.",
    body: `<p>
              The inspiration for this website began after working on the front
              end of 'Twistter', another project listed on the page. Twistter
              was rushed, so I really enjoyed being able to take my time to
              make the site how I wanted. I decided to buy a custom domain, too,
              since it was only $12 per year!
          </p>
          <p>
              I primarily use this website as a learning platform, keeping myself
              loosely up-to-date on current practices. When I started, <strong>ReactJS hooks</strong>
              were just introduced, so I targeted that. When hooks are needed, they are
              used in favor in classes throughout the source code, located on
              <a href="https://github.com/cohenchris/cohen_website">GitHub</a>.
          <p>
          <p>
              For deployment, the website is compiled into an efficient build-ready state
              using the command 'npm run build.' From there, I automatically pull down
              the latest version of my resume and deploy it to my Nginx web server.
              More information on Nginx in the next tile.              
          </p>`,
    timestamp: "December 2020 - Present",
  },

  {
    /* Weekly Budget App - F-Droid */
    fullTitle: "A Minimalist Weekly Budgeting App available on F-Droid",
    title: "WeeklyBudget Android App",
    subtitle: "Extracurricular",
    categories: ["android", "extracurricular"],
    desc: "A minimalist budgeting app designed for people who have a set weekly budget.",
    body: `
          <img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" height="75">
          <p>
            For this project, I forked <a href="https://github.com/GittyMac/WalletCount">WalletCount</a>.
            Since I am graduating college shortly, I wanted a simple budgeting app that suited my needs.
            Personally, I give myself a set budget each week. If I go over the budget for the week, the
            next week's budget is lessened. If I stay under, the available funds are carried over for the
            next week. This project was the closest to what I wanted (a minimalistic, slim budgeting app).
            The core functionality had to be changed for my purposes, though, so I set out to do it.
          </p>
          <p>
          If you set your weekly spending budget to $100, $100 would be added to your
          available funds. Every time that you make a purchase, you subtract that
          amount from your available funds. Every Sunday, another $100 would be added into
          your available funds. I designed this for my purposes specifically, but I
          hope that somebody else will find it useful!
          </p>
          <p>
          The GitHub link for this project can be found <a href="https://github.com/cohenchris/WeeklyBudget">here</a>.
          </p>
          <p>
          The Android app is fully open-source software, and is available on F-Droid <a href="">here</a>.
          </p>`,
    timestamp: "April 2021",
  },

  {
    /* TRACE - Senior Project */
    fullTitle: "TRACE - a digital footprint tracker",
    title: "TRACE",
    subtitle: "",
    categories: ["web dev", "security", "school"],
    desc: "A privacy-conscious service to track and manage your digital footprint",
    body: `
          <p>
          <a href="https://tracedigital.tk/">Try TRACE!</a>
          </p>
          <p>
          <a href="">My Public Profile</a>
          </p>
          
          <p>
          For our senior project, myself and 5 friends decided to make a privacy-conscious, automated way to analyze your
          digital footprint. We pulled inspiration from websites like <a href="https://linktr.ee/">linktr.ee</a> and 
          <a href="https://campsite.bio/">campsite.bio</a>. The Github repositories are located <a href="https://github.com/TRACE-Digital/">here</a>.
          </p>
          </p>
          <p>
          With the increasing popularity of social media, e-commerce, and countless other services, the average person
          creates accounts on dozens of websites: a situation that can quickly become hard to keep track of. While existing
          tools like password managers solve the issue of storing these accounts, none are tailored to gaining an understanding
          of a user’s digital footprint. Our project seeks to provide users with a convenient account tracking solution
          and information security learning tool by automatically discovering and presenting a comprehensive view of their digital footprint.
          </p>
          <p>
          We decided use a "thick client", meaning that a large majority of the data processing happens on the user's computer.
          Our intention was to completely contain the user's data to their machine unless they opt to synchronize their data with our servers.
          A incredibly useful system combining <a href="https://pouchdb.com/">PouchDB</a> and <a href="https://couchdb.apache.org/">CouchDB</a>
          enables this. Essentially, everything that the user does is stored in the local PouchDB database. If the user enables syncing on our website,
          the local PouchDB replicates to the remote CouchDB. Then, if the user logs in on another device, all of their data will be available.
          All data is securely end-to-end encrypted, ensuring that your data is always safe from prying eyes.
          </p>
          <p>
          Here are some features available:
            <ul>
              <li>Automated username search with support for 300+ websites</li>
              <li>Add custom websites</li>
              <li>Profile page editor</li>
              <li>Public profile page</li>
              <li>Public profile page analytics</li>
            </ul>
          </p>
          <p>
          Unfortunately, many websites disable CORS (Cross-Origin Resource Sharing), which is a huge part of our project. To remedy this issue,
          we developed a Chrome extension that intercepts each network request and acts like any other CORS-blocking extension, like
          <a href="https://mybrowseraddon.com/access-control-allow-origin.html">this one</a>. It also acts like a password manager, detecting any
          credentials entered on the web page. If you have not added the current website to your TRACE data, it gives you the option to do so.
          There are also tabs available for generating secure passwords, testing your current passwords, and checking if your usernames or emails
          have been implicated in any data breach.

          Our browser extension is available on <a href="https://chrome.google.com/webstore/detail/trace/klhmocgplcpemcdfeefpaikihedmikgk">Chrome</a>
          and <a href="https://addons.mozilla.org/en-US/firefox/addon/trace-digital/">Firefox</a> web stores.
           </p>`,
    timestamp: "January 2021 - May 2021",
  },

  {
    /* NextCloud Server */
    fullTitle: "Personal Nextcloud Instance",
    title: "Nextcloud",
    subtitle: "Extracurricular",
    categories: ["linux", "web dev", "extracurricular", "security"],
    desc: "A personal cloud server that I host myself - goodbye Google Drive!",
    body: `<p>
          In an effort to move away from my Google-reliant digital life, and free myself from having to pay a yearly fee for storage, I decided
          to set up my own cloud storage system. Nextcloud is an open-source cloud storage system that you can host yourself. It is under very
          active development, and is estimated to have over 20 million users worldwide. I can access my instance from anywhere in the world, with
          all of the functionality of Google Drive. The obvious caveat of this solution is that you must manage it yourself. Google Drive is incredibly
          convenient - there are no worries of data loss, and <strong>it just works</strong>. Using Nextcloud, I've had to set up lots of functionality
          for myself. I currently use it for cloud storage, a TODO list (Nextcloud Tasks), Find My Phone (Nextcloud PhoneTrack), and video chatting (Nextcloud Talk). 
           </p>
           <p>
           All of this data is at risk of loss at any time, whether it be a fire, drive failure, power surge, or anything else. I've decided to practice
           the tried-and-true 3-2-1 system of backing up data. This states the following:
            <ul>
              <li>Keep 3 copies of your data</li>
              <li>Stored on 2 different media</li>
              <li>With 1 copy off-site for disaster recovery</li>
            </ul>
            Right now, I have my Nextcloud server running in my own home. Every 2 days, I send a zipped, encrypted copy of my data to my desktop computer, which
            retains the most recent 14 copies. I also send one to my <a href="https://www.backblaze.com/">Backblaze</a> bucket storage, which retains
            the most recent 7 copies. Therefore, I have 3 copies (one production copy and 2 backup copies), stored on 2 different media
            (2 different physical hard drives), and one off-site disaster recovery copy (Backblaze). All of this is automated using bash scripts and cron jobs,
            so I don't have to worry about micro-managing everything. If I ever need to recover my data, I simply decrypt it with my passphrase and start the docker
            containers with the docker-compose files.
           </p>`,
    timestamp: "January 2021 - Present",
  },
];

export default ProjectList.reverse(); // reverse() because we want newest displayed first
