'use strict';
const isUrl = require('is-url');
const minimist = require('minimist');



function Input() {
  //   console.log('this is the row argv', process.argv, process.argv.slice(2));
  // console.log('Addiiiiiiiiiiiiiiiiiiiiiiiing Note:', Object.values(argv));
  // this.action=(Object.keys(argv)).splice(1);
  const argv = minimist(process.argv.slice(2));
  this.action = this.MethodValidator((Object.keys(argv)).splice(1));
  this.payload = this.payLoadValidator(argv.add || argv.a);
  // this.note = this.note(Object.values(argv));
}

/**
 * method = add | a 
 */
Input.prototype.MethodValidator = function (method) {
  const vaildMethods = /(^a$)|(^add$)/i;
  // if (vaildMethods.test(method)) {
  //   // let payload=(Object.values(argv)).splice(1);
  //   // console.log('rrrrrrrrrrrrrr',payload);
  //   // let Action= (Object.keys(argv)).splice(1); 
  //   // console.log('aaaaaaa',method);
  //   // let objec={'action':this.action , 'payloads':this.payload};

  //   // console.log(`Action ${objec}` );
  //   return method;
  // } else {

  //   console.log('error ');
  //   return (undefined);

  // }
    // console.log('vailddddddddddddddddddd ',vaildMethods.test(method));

    return vaildMethods.test(method) ? method : undefined;
};

Input.prototype.payLoadValidator = function (val) {

  if (val === undefined) {
    // console.log('err : empty input')
    return (undefined)
  }
  else {
    // console.log(`Adding Note :`, argv[Object.keys(argv)[1]]);
    return (val)
  }
};

module.exports = Input;