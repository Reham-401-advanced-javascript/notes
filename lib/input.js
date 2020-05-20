'use strict';
const minimist = require('minimist');



class Input {
  constructor(){
    // console.log('this is the row argv', process.argv, process.argv.slice(2));
    const argv = minimist(process.argv.slice(2));
    // console.log('Addiiiiiiiiiiiiiiiiiiiiiiiing Note:',argv[Object.keys(argv)[0]]);
    this.action = this.MethodValidator((Object.keys(argv)).splice(1));
    this.payload = this.payLoadValidator(argv.add || argv.a);
    this.cat=argv[Object.keys(argv)[0]];
    this.category=this.categoryValidator(this.cat);
  }

  MethodValidator (method) {
    const vaildMethods = /(^a$)|(^add$)|(^list$)|(^delete$)/i;
    // console.log(`Adding Note :`, argv[Object.keys(argv)[1]]);
    return vaildMethods.test(method) ? method :  console.log('invalid key , it must be add or a or list or delete');
  }
  
  payLoadValidator (val) {
  
    if (val === true) {
      return ( console.log('invalid input , you forget to insert the note'));
    }
    else {
      return (val);
    }
  }
  categoryValidator(val){
    if (val === true) {
      return (console.log('invalid category , you forget to insert the category')) ;
    }
    else {
      console.log('nnnnnnnnnnnn',val);
      return (val);
    }
  }
 
}




module.exports = Input;