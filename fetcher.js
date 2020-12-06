const request = require('request');
const fs = require('fs');

const url = process.argv.splice(2, 1).toString();
const path = process.argv.splice(2, 1).toString();

const fetch = (url, callback) => {
  request.get(url, (error, response) => {
    if (error) {
      callback (error, null);
      return;
    }
    callback(null, response);
    console.log(response)
    return;
  });
}

fetch(url, data => {
  fs.writeFile(path, data, function(error) {
    console.log(data)
    if (error) throw error;
    console.log(`Saved to ${path}`)
  })
});