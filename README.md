### npm is open source node package manager- automatically comes node js
### whenever we start a new project we do - npm init
``` 
this will create package.json file -
which is configuration of our project file 
all kind of data about the project store here

```

### TWO type of packages we install here
1. simple / regular dependencies—it includes our own code 
2. development dependencies 

* it is a regular dependencies 
slugify = more readability for URL out of name. 

* development dependencies—debugger tools, Webpack, testing library—they do not need it for production. 
* our code is not depending on oit 
### to install this dependencies we also need to write --save-dev 

## nodemon 
this tool automatically re-starts the server whenever any change happened 

## we should install as a global dependencies. then it will work entire / any project in this computer. --g 
npm i nodemon --global

### semantic version notation 
"nodemon": "^3.1.4"
major - version = huge new release which can have breaking changes
minor - version = new features in the current version / not break our code. 
patch - version = fix the bugs
^ = means we accept patch and minor releases."^3.1.4" (ideally use this version )
~ = means we accept only patch releases. "~3.1.4" (safer version)
* = means we accept all versions of releases. "*3.1.4" (not good idea)


## to check outdated version 
* npm init - automatically node module comes with it 
* npm outdated 
* npm update 
* npm i express
* n uninstall express 
* for project dependencies = npm i express
* for development dependencies locally = npm i nodemon --save-dev 
* for development dependencies globally = npm i nodemon --global 
* ### never share node_modules or checkin to git rep
* ### but definitely share the package.json and package-lock.json file 
* after uploading a new project without a node module
—to upload the node in a new project which has package.json file already  
* = npm install 
* package-lock.json file - shows all the packages we are using in our project 

[//]: # (other packages for dev- help )
### image preview 
### pug beautify 
### tab nine
### TODO highlight 
### ESLint
### prettier 
### .prettierrc
``` 
formating code: 
setting; 
prettier => prettier config 
New file we can add to prettier config
.prettierrc 

```
## words:
```
Assign a variable:
Declare
Initialize
Define a variable
Instantiate a variable:
Set a variable:
Create a variable:
Allocate a variable:
Bind a variable: To link a variable to a specific value or reference.
Introduce a variable:
Declare and assign a variable: To both declare a variable and assign it a value in a single statement.
Provision a variable: To prepare and allocate resources for a variable.

```

### Git 
``` 
Making new repository in machine: 
~ git init 
~ git add *
~ git commit -m ‘initializing’
~ git status 
~ git branch 
~ git branch -M main 
~ git branch
~ git remote add origin http//
~ git push -u origin main 

```
###
1. Server 
2. clint: browser- google
3. IP address -127.0.0.1 
4. Port number - 8000 
5. DNS server  
6. TCP/IP socket connection 
7. http request = HyperText Transfer Protocol
8. https = tls/ ssl = encrypted 
9. URL = use url to communicate with server.
### HTTP METHOD: 
* http request / http respond 
1. GET - requesting data
2. POST - sending data
3. PUT/ Patch  = modify data

### HTTP request / respond 
* status code 
* httm req header 
* Body : usually contain - HTML - of the website
* / JSON data coming from an API / Other data 

### TCP/IP socket connection 

### DYNAMIC WEBSITE = WEB APPLICATION
### STATIC WEBSITES
### API BASED WEBSITES 


### single thread
``` 
not blocking the thread 
1. initialise the program 
2. excute "top level" code
3. requre modules 
4. Register event callbacks 
5. start running event loop 
event loop = this is the heart of the entire node architecture. where most of the work is done in our app
= heavy tasks done by 'THREAD POOL'

```
### thread pool
``` 
it bring addition 4 threads or more 
- offload work from the event loop 
- handle heavy ("expensive") tasks: 
example - File System API, cryptography, Compression, DNS lookups. 
```

### Event loop
1. New Http request 
2. Timer expired
3. finishing file reading 
4. it has many phases 
```
- all the application code that is inside callback function(non-top-level code)
- Node.js is build around callback functions
- Event-driven architecture: 
a. events are emitted
b. event loop picjs them up 
c. callbacks are called
- Event loop does orchestration. 
```

## Don't Block the event loop 
``` 
- dont use sync version of functions int he fs , crypto and zlip modules in callback functions.
- dont perform complex calculations ( e.g. loops inside loops)
- Be carefull with JSON in large objects 
- dont use too complex regular expressions. (e.g. nested quantufiers) 

```

## Tick 




