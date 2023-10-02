import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import styles from "./index.module.css"

const root = { "path": "projects/", "displayedName": "Projects" }

export default function Projects() {
  const [currDir, setCurrDir] = useState(root);
  const [selectedFile, setSelectedFile] = useState("");
  const [directoryInfo, setDirectoryInfo] = useState([]);

  useEffect(() => {
    // Determine whether or not the clicked file is a directory.
    // A file is a directory if we're at the projects root OR it exists in the current directory (and is marked as a directory itself)
    let isDir = (selectedFile === "");
    for (const fileMap of directoryInfo) {
      if (fileMap.path === selectedFile && fileMap.isDir)
      {
        isDir = true;
      }
    }

    // Handle click
    if (isDir) { // Update current directory info
      // Beautify the directory name for nicer display
      let displayedDirName = beautifyDirName(selectedFile);

      // Update current directory info
      setCurrDir({"path": selectedFile, "displayedName": displayedDirName});
    }
    else { // Route page directly to file
      // Remove extensions from file name
      let fileName = selectedFile.replace(/\.[^.]+$/, "");
      window.location.href = fileName;
    }

  }, [selectedFile]);

  // When changing directories, update to show that directory's contents
  useEffect(() => {
    const updateDirectoryView = async () => {
      // Get directory contents via API
      const endpoint = "/api/listProjectsFromDir?dirName=" + currDir.path;
      console.log(endpoint);
      const response = await fetch(endpoint);
      const data = await response.json();
      setDirectoryInfo(data.valueArray);
      console.log(data.valueArray);
    }

    updateDirectoryView();
  }, [currDir]);

  const handleSelectFile = (name) => {
    if (name === "../") { // Handle back traversing
      const lastIndex = currDir.path.lastIndexOf("/");
      const oneDirUp = (lastIndex !== -1) ? currDir.path.slice(0, lastIndex) : "";
      setCurrDir({"path": oneDirUp, "displayedName": beautifyDirName(oneDirUp)});
    }
    else { // The file that was clicked is now the selected file
      console.log("name = " + name);
      setSelectedFile(name);
    }
  }

  const beautifyDirName = (dirName) => {
    let beautifiedDirName = dirName 
                              .substring("projects/".length)
                              .split("/")
                              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                              .join("/")
    if (beautifiedDirName !== "") beautifiedDirName += "/";

    return beautifiedDirName;
  }

  return(
          <div className={styles.projectsPage}>
            <NextSeo
              title="Projects"
              description="A blog documenting my personal projects."
            />

            <table className={styles.directoryTable}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>
                    <h1 className={styles.tableTitle}>Posts</h1>
                    <button
                      className={styles.backButton}
                      style={{display: (currDir.path === root.path || currDir.path === "") ? "none" : "initial"}}
                      onClick={() => { handleSelectFile("../") }}
                    >
    {console.log(currDir)}
                      &lt;- Back
                    </button>
                  </th>
                </tr>
                  <tr>
                    <th><h3>{currDir.displayedName}</h3></th>
                  </tr>
              </thead>
              <tbody>
                {directoryInfo.map((file, index) => {
                  let beautifiedFileName = file.title;
                  beautifiedFileName = beautifiedFileName.charAt(0).toUpperCase() + beautifiedFileName.slice(1);
                  if (file.isDir) beautifiedFileName += "/";

                  return(
                          <tr key={index}>
                            <td className={styles.files}>
                    {console.log(file)}
                              <a onClick={() => { handleSelectFile(file.path) }} >
                                {beautifiedFileName}
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
