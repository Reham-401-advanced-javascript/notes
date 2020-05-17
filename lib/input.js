'use strict';
const isUrl = require('is-url');
const minimist = require('minimist');

/**
 *  sample input would be
 *  node index.js --m "GET" --u "https://www.google.com"
 *
 */
function Input() {
//   console.log('this is the row argv', process.argv, process.argv.slice(2));
  const argv = minimist(process.argv.slice(2));
//   console.log('Adding Note:', argv[Object.keys(argv)[1]]);
  
  this.method = this.getMethod(argv.add || argv.a);
//   this.url = this.getURL(argv.u);
}
/**
 * method = GET | POST |PUT|PATCH |DELETE |(asdasd => GET)
 */
Input.prototype.getMethod = function (method) {
  const vaildMethods = /add|a/i;
// const vaildMethods = /get|post|put|patch|delete/i;
  if (vaildMethods.test(method)){
    //   console.log(method);
  const argv = minimist(process.argv.slice(2));
  let num=Math.floor(Math.random() * 10);   
    console.log(`Adding Note ${num}:`, argv[Object.keys(argv)[1]]);
  }else{

    console.log('error method');

  }
//   return vaildMethods.test(method) ? method : 'error method';
};
// Input.prototype.getURL = function (url) {
//   return isUrl(url) ? url : undefined;
// };

module.exports = Input;