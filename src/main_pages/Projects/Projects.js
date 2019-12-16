import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projectsBackground">
        <NavigationBar color="black" />

        <div className="projectsStyle">
          <h1 style={{ color: "teal" }}>PROJECTS</h1>
          <ul>
            <li>
              <strong>Terminal Shell in C</strong>
            </li>
            <div>
              <p>
                - This month-long project covered an absurd amount of content.
                We were tasked to create what is essentially a bash clone. The
                lexical analysis was done using <strong>flex and bison</strong>,
                where I tokenized certain inputs using regular expressions,
                executing different code based on what was inputted.
              </p>
              <p>
                - <strong>File redirection</strong> was one of the first things
                that I tackled, so I learned all about juggling file descriptors
                to do so. <strong>Piping</strong> was a bit different than file
                descriptors - we had to use the pipe() system call and
                read/write to/from the pipe to communicate between different
                parts of the command.
              </p>
              <p>
                - The next section covered{" "}
                <strong>signals and signal handling</strong>. Specifically, we
                set up handlers for ctrl-C (terminate command), ctrl-R (search
                command history), and SIGCHLD (zombie process elimination).
              </p>
              <p>
                - One of the most challenging parts of this project was
                implementing <strong>subshells</strong>. For this, we had to
                fork a new process, and use two different pipes to communicate
                with it in order to get the output of the desired command. This
                proved difficult to debug because of the fact that two processes
                were being run.
              </p>
              <p>
                - We also used regular expressions and directory browsing to
                implement <strong>wildcarding</strong>. We handled wildcarding
                for '*' and '?'.
              </p>
              <p>
                - One smaller part of this project was{" "}
                <strong>decoding raw input</strong>, rather than canonical
                input. I was able to allow the user to type as they normally
                would with bash. Specifically, I handled left arrow, right
                arrow, delete (and ctrl-D), backspace (and ctrl-H), home (and
                ctrl-A), and end (and ctrl-E).
              </p>
              <p>
                - The last part of this project was to implement{" "}
                <strong>command history and ctrl-R searching</strong>. Command
                history was pretty straightforward, and I ended up imitating
                bash's ctrl-R searching mode.
              </p>
            </div>
            <li>
              <strong>Memory Allocator in C</strong>
            </li>
            <p>
              - This large project taught me the inner workings of memory
              allocation. I created a program that has functionality for
              malloc(), free(), realloc(), and calloc(). The main, most
              difficult parts were managing large blocks of heap memory obtained
              by sbrk() to avoid over-allocation and fragmentation of memory.
              Multiple different block-finding methods were implemented - first
              fit, best fit, worst fit, and next fit.
            </p>
            <li>
              <strong>HTTP/HTTPS Multithreaded Web Server in C</strong>
            </li>
            <p>
              - This assignment gave me valuable introductory networking
              information. We first learned about HTTP request/response formats.
              To give my server some security, I learned about basic
              authentication using the 'Authorization' header. I also ended up
              being able to serve static and executable files to the client.
            </p>
            <p>
              - One of the more important parts of this server was learning
              about different types of <strong>concurrent processing</strong>.
              The server that I created supported concurrency through forking,
              threading, and using a thread pool for each request. Using mutexes
              I made sure that the server was thread safe.
            </p>
            <p>
              - Due to this project,{" "}
              <strong>
                I am very comfortable with semaphores, mutexes, forking, and
                threading.
              </strong>
            </p>
            <li>
              <strong>Unix Task Manager in C</strong>
            </li>
            <p>
              - During this group project, I was assigned to explore and
              understand what goes on in /proc on a Unix system, and pulled
              information such as system information, process name, PID, process
              resources, disk size, and disk usage. From there, I put the
              information into easily-accessible structs for the front-end team
              to handle.
            </p>
            <li>
              <strong>
                Twistter (Twister + Reddit Crossover) in Javascript (ReactJS)
              </strong>
            </li>
            <p>
              - This group project focused on the SCRUM philosophy of software
              development and making a full-fledged application. I was assigned
              to the front end team, since I already knew ReactJS, and did an
              extremely large majority of the work for the front end. I learned
              how to communicate with the back end Python Flask API using
              'axios' GET/POST calls, and made a dynamically-updated GUI for the
              user. I am most proud of creating a login/logout functionality, as
              well as a Direct Messaging system between users. The most
              difficult part was updating the GUI based on who is logged in.
            </p>
            <li>
              <strong>NLP Database Parsing in Python</strong>
            </li>
            <p>
              - During the Summer of 2019, I had the pleasure of working for the
              Naval Surface Warfare Center, Crane Division. I improved US Navy
              missile sustainment efforts by upgrading an existing natural
              language processing algorithm to process failure databases. The
              work that I contributed to has a patent pending as well.
            </p>
            <li>
              <strong>printf() from scratch in ARM Assembly</strong>
            </li>
            <p>
              - In my Computer Architecture course, we had to implement
              functionality for{" "}
              <strong>printf()'s %c, %s, %d, and %x in ARM Assembly</strong>. %c
              and %s were accomplished using looping and putchar(). %x was a bit
              more difficult - I used bit shifting to isolate 4 bits, translated
              into a hex digit, and print the hex digit. %d was the toughest. I
              isolated each base 10 digit and printed it, but it was much
              tougher than %x since base 10 is not a multiple of 2, so bit
              shifting is not possible.
            </p>
            <li>
              <strong>Ubuntu Tweaking</strong>
            </li>
            <p>
              - One of my main hobbies is tweaking and maintaining Ubuntu on my
              laptop, which is a great way for me to learn more about how Unix
              works. I have written numerous bash scripts to automate some
              mundane tasks, and heavily customized my .vimrc and .bashrc. I
              enjoy customizing my workflow for efficiency, using a tiling
              window manager (i3) and a task bar (polybar). The dot files for
              these are on my GitHub.
            </p>
            <li>
              <strong>DNS-Level Adblocker</strong>
            </li>
            <p>
              - Once I completed my Computer Architecture course, I had a
              Raspberry PI 3B+ left over, so I decided to download a program
              called PiHole. This program functions as a DNS server for your
              home network, so I redirected all of my router's traffic to the
              Pi. It uses a database of malicious/intrusive host names to block
              them before they even reach your device. I particularly like it
              because it blocks advertisements AND trackers.
            </p>
          </ul>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
