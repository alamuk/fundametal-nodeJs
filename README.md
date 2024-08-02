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
