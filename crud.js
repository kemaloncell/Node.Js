const fs = require('fs');

// Write file and Create Data

fs.writeFile('employees.json', '{ "name": "John", "salary": "2000" }', 'utf-8', (err) => {
  if (err) console.log(err);
  console.log('Data is added');
});

// Read File

fs.readFile('employees.json', 'utf-8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log('file was read');
});

// Update file
fs.appendFile('employees.json', '\n { "name": "Jimmy", "salary": "3500" }', 'utf-8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log('file was uptdated');
});

// deleted file

fs.unlink('employees.json', (err) => {
  if (err) console.log(err);
  console.log(err);
  console.log('file was deleted');
});
