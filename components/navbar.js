import Head from 'next/head';

export default function Header() {
  return(
          <div>
            <a href="/"><h1>Chris Cohen</h1></a>
             <a href="/">Home</a>
             <a href="/resume">Resume</a>
             <a href="/projects">Projects</a>
             <a href="/music">Music</a>
             <a href="/about">About</a>
          </div>
        )
}
