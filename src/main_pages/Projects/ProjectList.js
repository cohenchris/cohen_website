/* PROJECT POST TEMPLATE

{
    fulltitle:    "", 
    title:        "",
    subtitle:     "",
    desc:         "",
    body:         `<p>
                  </p>`,
    timestamp:    ""
  },

*/
/*

*/
const ProjectList = [
  {
    /* HONEYPOT */
    fulltitle: "HTTPS Webserver Honeypot in Python",
    title: "Webserver Honeypot",
    subtitle: "Extracurricular",
    desc:
      "An HTTPS honeypot designed to lure attackers and study attack methodology.",
    body: `<p>
              Realizing that I lacked experience in cybersecurity, I decided to 
              take the plunge with a large personal project. A honeypot is a term 
              used in cybersecurity describing a network entity that purposefully 
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
    /* SHELL */
    fulltitle: "Shell Interpreter In C",
    title: "Shell",
    subtitle: "",
    desc:
      "A shell interpreter written in C to combine behavior from common shells.",
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
    /* SUDOKU SOLVER */
    fulltitle: "Sudoku Solver in C++",
    title: "Sudoku Solver",
    subtitle: "Extracurricular",
    desc:
      "A sudoku solver with 4 specialized solving algorithms. Uses recursive brute-forcing to help when needed.",
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
    fulltitle: "Kernel Instrumentation and Completely Fair Scheduling in XINU",
    title: "Completely Fair Scheduling",
    subtitle: "",
    desc:
      "A scheduling algorithm that attempts to efficiently juggle CPU and I/O bound processes based on typical behavior.",
    body: `<p>
              The ideology behind this algorithm, currently used in Linux as of 2007, is relatively simple.
              CPU-bound processes need the CPU as much as possible, so that they can finish
              any needed calculations as quickly as they can. However, I/O-bound processes are not
              bottlenecked by the CPU, but rather, the user. Therefore, whenever an I/O-bound process is running,
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
    fulltitle:
      "Asynchronous Inter-Process Communication with Callback Functions",
    title: "Asynchronous IPC and Callbacks",
    subtitle: "",
    desc:
      "Implementation of a responsive callback function using  ways for processes to communicate and return-oriented programming.",
    body: `<p>
              This lab was used as both illustration for how callback functions work, and training for return-oriented programming.
              IPC (inter-process communication) is used for a processe to signal another process, which would then execute the callback
              function once the receiver is running.
          </p>
          <p>
              The sender process first puts a message into the receiver's inbox. It will stay there until the receivier has been
              context-switched back in. Once that happens, the receiver checks the inbox. If there is a message, return-oriented
              programming is used to maniuplate the stack. The address of the callback function overwrites the original return address,
              and the original return address is moved down one space. This cases the callback function to first be executed, then the
              original place in the receiver's code.
          </p
          <p>
              This is not the most responsive way to implement a callback function, but there are advantages with this method.
              XINU is meant to be run on a single-core machine, and on a relatively weak back end. If we simply ran the callback
              function immedately when a receiver receives a message, the overhead involved in doing so could slow down execution
              significantly. XINU's single-core approach means that only one process holds the CPU at a given time, so there's no
              advantage in doing it that way in the first place, since the sender can never send a message while the receiver runs.
          </p>`,
    timestamp: "April 2020",
  },
  {
    fulltitle: "A Personal Website written using ReactJS",
    title: "This Website",
    subtitle: "Extracurricular",
    desc:
      "A personal website written using ReactJS. Emphasis on learning hooks and sleek, modern design.",
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
              using the command 'npm run build.' From there, it is deployed using GitHub pages.
              The build files are uploaded to another specially-named repository, located
              <a href="https://github.com/cohenchris/cohenchris.github.io">here</a>.
              GitHub takes care of the rest, after I mapped 'chriscohen.dev' to resolve to
              'cohenchris.github.io'.1
          </p>`,
    timestamp: "December 2020 - Present",
  },

  {
    /* MALLOC */
    fulltitle: "Memory Allocation Library in C, Replacement for 'stdlib.c'",
    title: "Memory Allocation Library",
    subtitle: "",
    desc:
      "A memory allocation library written in C, helping me learn how traditional UNIX memory allocation works.",
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
    /* TWISTTER */
    fulltitle: "Twistter (Twitter + Reddit Crossover) in Javascript (ReactJS)",
    title: "Twistter",
    subtitle: "",
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
    /* TASK MANAGER */
    fulltitle: "UNIX Task Manager in C",
    title: "Task Manager",
    subtitle: "",
    desc:
      "A task manager for UNIX written to learn about the structure of '/proc'",
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
    /* CRANE NLP PROJECT */
    fulltitle: "NLP (Natural Language Processing) Database Parsing in Python",
    title: "NLP on Databases",
    subtitle: "Internship at NSWC Crane",
    desc:
      "I used NLP to parse navy databases, making problem diagnosis significantly faster.",
    body: `<p>
              During the Summer of 2019, I had the pleasure of working for the
              Naval Surface Warfare Center, Crane Division. I improved US Navy
              missile sustainment efforts by upgrading an existing natural
              language processing algorithm to process failure databases. The
              work that I contributed to has a patent pending as well.
          </p>`,
    timestamp: "",
  },

  {
    /* PRINTF */
    fulltitle: "printf() Replacement in ARM Assembly",
    title: "printf()",
    subtitle: "",
    desc: "A functional replacement for printf() written in ARM Assembly.",
    body: `<p>
              In my Computer Architecture course, we had to implement
              functionality for{" "}
              <strong>printf()'s %c, %s, %d, and %x in ARM Assembly</strong>. %c
              and %s were accomplished using looping and putchar(). %x was a bit
              more difficult - I used bit shifting to isolate 4 bits at a time, translated
              into a hex digit, and print the hex digit. %d was the toughest. I
              isolated each base 10 digit and printed it, but it was much
              tougher than %x since base 10 is not a multiple of 2, so bit
              shifting is not possible.
          </p>`,
    timestamp: "April 2019",
  },

  {
    /* LINUX TWEAKING */
    fulltitle: "Linux Tweaking and Exploration",
    title: "Linux",
    subtitle: "Extracurricular",
    desc:
      "I primarily run Linux since it's efficient for programming. I heavily customize my workflow.",
    body: `<p>
              One of my main hobbies is tweaking and maintaining Ubuntu on my
              laptop and desktop, which is a great way for me to learn more about how Unix
              works. I enjoy customizing my workflow for efficiency, using a
              tiling window manager (i3) and a task bar (polybar). The dotfiles
              for these are on my <a href="https://github.com/cohenchris/dotfiles">GitHub</a>.
          </p>
          <p>
              I have written numerous bash scripts to automate some mundane
              tasks, and heavily customized my .vimrc and .bashrc. I currently use  
              <a href="https://yadm.io/"> YADM</a> (Yet Another Dotfiles Manager) to 
              keep track of all of my dotfiles. With such a heavily customized workflow,
              It makes it easy to transition between computers when needed. It even
              features a bootstrapping script that takes a fresh install of Linux and 
              changes the settings to exactly what I want them to, an exact copy of my
              normal workstation.
          </p>`,
    timestamp: "August 2017 - Present",
  },

  {
    /* PIHOLE */
    fulltitle: "Raspberry Pi DNS-Level AdBlocker - PiHole",
    title: "Pi-Hole",
    subtitle: "Extracurricular",
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
];

export default ProjectList;
