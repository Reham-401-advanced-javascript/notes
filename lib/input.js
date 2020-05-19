'use strict';
const minimist = require('minimist');



class Input {
  constructor(){
    //   console.log('this is the row argv', process.argv, process.argv.slice(2));
    const argv = minimist(process.argv.slice(2));
    // console.log('Addiiiiiiiiiiiiiiiiiiiiiiiing Note:',((Object.keys(argv)).splice(1)) );
    this.action = this.MethodValidator((Object.keys(argv)).splice(1));
    this.payload = this.payLoadValidator(argv.add || argv.a);
  }

  MethodValidator (method) {
    const vaildMethods = /(^a$)|(^add$)/i;
    // console.log(`Adding Note :`, argv[Object.keys(argv)[1]]);
    return vaildMethods.test(method) ? method :  console.log('invalid key , it must be add or a');
  }
  
  payLoadValidator (val) {
  
    if (val === true) {
      return ( console.log('invalid input , you forget to insert the note'));
    }
    else {
      return (val);
    }
  }
 
}




module.exports = Input;