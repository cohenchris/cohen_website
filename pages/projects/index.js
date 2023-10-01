import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import styles from "./index.module.css"

export default function Projects() {
  const [fileName, setFileName] = useState("");
  const [directoryInfo, setDirectoryInfo] = useState({});
  const [directoryView, setDirectoryView] = useState([]);

  useEffect(() => {
    const listProjectsFromDir = async () => {
      let isDir = false;
      if (directoryInfo.length > 0) {
        for (const subarray of directoryInfo) {
          if (subarray[0] === fileName && subarray[1])
          {
            isDir = true;
          }
        }
      }

      let name = fileName.replace(/\.[^.]+$/, "");

      if (name === "" || isDir) {
        const endpoint = '/api/listProjectsFromDir' + ((fileName === "") ? "" : "?dirName=" + fileName);
        const response = await fetch(endpoint);
        const data = await response.json();
        setDirectoryInfo(data.valueArray);
        console.log(data.valueArray);
        setDirectoryView(Array.from(data.valueArray.map((item) => item[0])));

        const newPath = window.location.pathname + ((name === "") ? "" : ("/" + name));
        window.history.pushState({}, '', newPath);
      }
      else {
        window.location.href = window.location.pathname + "/" + name;
      }
    }

    listProjectsFromDir();
  }, [fileName]);

  return(
          <div className={styles.projectsPage}>
            <NextSeo
              title="Projects"
              description="A blog documenting my personal projects."
            />

            <table className={styles.directoryTable}>
              <thead>
                <tr>
                  <th><h1>Posts</h1></th>
                </tr>
              </thead>
              <tbody>
                {directoryView.map((file, index) => {
                  return(
                          <tr key={index}>
                            <td className={styles.files}>
                              <a onClick={() => { setFileName(file) }} >
                                {file.replace(/\.[^.]+$/, "")}
                              </a>
                            </td>
                          </tr>
                        );
                })}
              </tbody>
            </table>

          </div>
        )
}
