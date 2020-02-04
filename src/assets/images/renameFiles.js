const fs = require('fs');

const directoriesWithFilesToRename = process.argv.slice(2);
if (directoriesWithFilesToRename.length === 0)
  throw Error('No arguments given!');

const renameFilesInDirectory = directory => {
  const currentDirectory = `${__dirname}/${directory}`;
  const currentDirectoryFilesArray = fs.readdirSync(currentDirectory);
  currentDirectoryFilesArray.forEach((file, index) => {
    if (file.match(/main/)) return;
    const fileExtension = file.match(/\..*$/)[0].toLowerCase();
    fs.renameSync(
      `${currentDirectory}/${file}`,
      `${currentDirectory}/${directory}-${index}${
        fileExtension ? fileExtension : ''
      }`
    );
  });
};

directoriesWithFilesToRename.forEach(renameFilesInDirectory);
