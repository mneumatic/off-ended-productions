const fs = require('fs');

// Fetch the JSON data
// fetch(`https://api.github.com/users/mneumatic`)
//   .then(response => response.json())
//   .then(data => {
//     // Convert JSON object to string
//     const jsonString = JSON.stringify(data, null, 2);
//
//     // Write JSON string to a file
//     fs.writeFile('./data/gituser.json', jsonString, (err) => {
//       if (err) {
//         console.error('Error writing file:', err);
//       } else {
//         console.log('File successfully written!');
//       }
//     });
//   })
//   .catch(error => console.error('Error fetching JSON:', error));
//
// fetch(`https://api.github.com/users/mneumatic/repos`)
//   .then(response => response.json())
//   .then(data => {
//     // Convert JSON object to string
//     const jsonString = JSON.stringify(data, null, 2);
//
//     // Write JSON string to a file
//     fs.writeFile('./data/gitrepos.json', jsonString, (err) => {
//       if (err) {
//         console.error('Error writing file:', err);
//       } else {
//         console.log('File successfully written!');
//       }
//     });
//   })
//   .catch(error => console.error('Error fetching JSON:', error));

// export const updateRss = (fs) => {
//   fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://anchor.fm/s/f71e47c0/podcast/rss`)
//     .then(response => response.json())
//     .then(data => {
//       // Convert JSON object to string
//       console.log(data);
//       const jsonString = JSON.stringify(data, null, 2);
//
//       // Write JSON string to a file
//       fs.writeFile('./data/rss.json', jsonString, (err) => {
//         if (err) {
//           console.error('Error writing file:', err);
//         } else {
//           console.log('File successfully written!');
//         }
//       });
//     })
//     .catch(error => console.error('Error fetching JSON:', error));
// }
