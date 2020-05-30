# LAB - Class 01
Project: Notesy
Author: Reham AL-Sobh

## Links and Resources

- [submission PR](https://github.com/Reham-401-advanced-javascript/notes/pull/2)
- [lab 4 : submission PR ](https://github.com/Reham-401-advanced-javascript/notes/pull/2)


## Setup
.env requirements (where applicable)
i.e.

PORT - Port Number
MONGODB_URI - URL to the running mongo instance/db

### How to initialize/run your application (where applicable)

 1- Add a new note :
    - e.g. `node index.js --add 'your note' --category 'category'`
    - e.g. `node index.js -a or --a 'your note' --category 'category'`
     
 2- list of :
 
 * all your note in the Database :
    - e.g. `node index.js --list`

 * all note in specifice categoery :
    - e.g. `node index.js --list --category 'category'`

 3-  Update note :
    - e.g. `node index.js --update 'valid id' --edit 'updated note' `

 4- Delete  note :
    - e.g. `node index.js --delete 'valid id' `


### How do you run tests?

- ` npm run lint` to test the indentation errors(eslint).
- ` npm test ` to test  modules note.js and input.js

## UML

[UML Diagrame ](assest/IMG_20200518_093054.jpg)
