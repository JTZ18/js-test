// const imageUrl = "https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU";

// const axios = require('axios')

// const func = async url => {
//   const response = await axios(url, { responseType: 'arraybuffer' })
//   const buffer64 = Buffer.from(response.data, 'binary').toString('base64')
//   return buffer64
// }

// func(imageUrl).then(data => {
//   console.log(data)
// }   );

/* by Kindacode.com */
const fs = require('fs');
const path = require('path');
const axios = require('axios').default;
const fetch = require('node-fetch');
// import fetch from './node-fetch'


// fileUrl: the absolute url of the image or video you want to download
// downloadFolder: the path of the downloaded file on your machine
// const downloadFile = async (fileUrl, downloadFolder) => {
//   // Get the file name
//   const fileName = path.basename(fileUrl);

//   // The path of the downloaded file on our machine
//   const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
//   try {
//     const response = await axios({
//       method: 'GET',
//       url: fileUrl,
//       responseType: 'stream',
//     });

//     const w = response.data.pipe(fs.createWriteStream(localFilePath));
//     w.on('finish', () => {
//       console.log('Successfully downloaded file!');
//     });
//   } catch (err) { 
//     throw new Error(err);
//   }
// }; 

// Testing
// const IMAGE_URL =
//   'https://www.kindacode.com/wp-content/uploads/2021/01/test.jpg';
// downloadFile(IMAGE_URL, 'download');

// const VIDEO_URL =
//   'https://www.kindacode.com/wp-content/uploads/2021/01/example.mp4';
// downloadFile(VIDEO_URL, 'download');


const BASE_URI = 'https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/';
const url = BASE_URI + 5;
// GET request for remote image in node.js
// axios({
//   method: 'get',
//   url: url,
//   responseType: 'stream'
// })
//   .then(function (response) {
//     console.log(response.data);
//   });

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser(url) {
//   try {
//     const response = await axios.get(url);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUser(url)

async function loadNames() {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json.image); 
}
loadNames();






