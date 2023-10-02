import fs from 'fs';
import path from 'path';

export default function handle(req, res) {
  let { dirName } = req.query;
  dirName = (dirName === undefined || dirName === "") ? "projects/" : dirName
  const directoryPath = 'pages/' + dirName; // Replace with the path to the directory you want to list.

  // Files to hide
  const hiddenFiles = ["index.js", "index.module.css"]

  // Filter out only directories.
  let files = fs.readdirSync(directoryPath, { withFileTypes: true });

  // Hide files
  files = files.filter((item) => !hiddenFiles.includes(item.name));

  // Parse the title from each file
  let valueArray = [];
  const titleRegex = /title="([^"]*?)"/;
  for (const file of files) {
    // Parse title (if it exists) from the file (if it is a file, not a directory)
    let title = file.name;
    if (file.isFile())
    {
      let fileContent = fs.readFileSync(directoryPath + "/" + file.name, 'utf-8');
      const match = titleRegex.exec(fileContent);
      if (match) title = match[1];
    }

    let cleanedFilePath = file.path.substring("pages/".length);
    if (!cleanedFilePath.endsWith('/')) cleanedFilePath += "/";

    const fileInfo = {
      "path": cleanedFilePath + file.name,
      "title": title,
      "isDir": file.isDirectory()
    }
    valueArray.push(fileInfo);
  }

  res.status(200).json({ valueArray });
}
