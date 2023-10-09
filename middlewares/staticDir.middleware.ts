import express from 'express';
import { STATIC_FILE_DIR } from "./../configs/server.config";

// const options = {
//     dotfiles: 'ignore', // ignore dotfiles
//     etag: false, // disable etag generation
//     extensions: false, // try these extensions if file not found
//     fallthrough: true, // respond with 404 if file not found
//     immutable: false, // enable immutable directive
//     maxAge: '1d', // set max-age to 1 day
//     // setHeaders: function (res, path, stat) {
//     //     res.set('x-timestamp', Date.now()) // set custom header
//     // }
// }

// export default express.static(STATIC_FILE_DIR, options);
export default express.static(STATIC_FILE_DIR);