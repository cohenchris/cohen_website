import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';

export default function Projects() {

  const [directoryTree, setDirectoryTree] = useState([]);

  useEffect(() => {
    const fetchDirectoryTree = async () => {
    const response = await fetch('/api/hello');
    }

    fetchDirectoryTree();
  }, []);

  return(
          <>
            <NextSeo
              title="Projects"
              description="A blog documenting my personal projects."
            />
          </>
        )
}
