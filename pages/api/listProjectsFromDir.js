import fs from 'fs';
import path from 'path';

export default function handle(req, res) {
  let { dirName } = req.query;
  dirName = (typeof dirName === 'undefined') ? "" : dirName
  const directoryPath = 'pages/projects/' + dirName; // Replace with the path to the directory you want to list.

  // Files to hide
  const hiddenFiles = ["index.js", "index.module.css"]

  // Filter out only directories.
  let files = fs.readdirSync(directoryPath, { withFileTypes: true });

  // Hide files
  files= files.filter((item) => !hiddenFiles.includes(item.name));

  let valueArray = [];
  for (const file of files) {
    const fileInfo = [file.name, file.isDirectory()];
    valueArray.push(fileInfo);
  }

  res.status(200).json({ valueArray });
}
