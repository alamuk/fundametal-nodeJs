// WRITE EVERY SINGLE LINE OF CODE EXPLAINING WHAT IT DOES, EVERY SINGLE COMMAND, EVERY SINGLE PROPERTY AND OBJECTS.


## node js - completely design around callbacks
``` 
every single treaded as a modul
```
### node modules = all kind of additional functionality store in a module. 
to read the file = we need to use = Node File Modules 
to use it - we need require function store in a fs  variable. to use in the file. 

### fs = File System
* this is use for reading data and writing data right to the file system.
* its return an object with many functionalities which we can use. 
* storing the object in to fs variable. 
* The fs.readFileSync() method is an inbuilt application programming interface 
 of the fs module which is used to read the file and return its content.
* This method returns the content of the file.

### How to read the file
 ~ readFileSync(), readFileAsync(),
How to real the file : sync version/ Async file reading: this function take two arguments 
1. path of the file which it is going to read
2. charactor encode - UTF-8

3. #### What Is UTF-8?
   UTF-8 stands for “Unicode Transformation Format - 8 bits.” 
4. Encoding is the process of converting characters in human languages into binary sequences that computers can process.


### How to write the file 
${} = inside we can write any js expression 
.\n = new line 

writeFileSync = take two arguments 
1. where we want to write = path for new file - it creates new file automatically 
2. what we want to show in this file 

### synchronous = blocking, Asynchronous =  non-blocking code 
```
synchronous = each statement/ code line by line/ one after another Async
/ wait for the result for previous line
/ block the exicution of the rest of the code 
Asynchronous = each statement/ code line by line/ one after another Async 
```


```
the code work in the background 
we register a call-bacck function to handle the result of the code
other code can executed still without blocking the code. 
readfile() = will accepts call back function 
when the file or completely read then call-back function will call for execution 
```

### callback hell 
* one function  call another and it has multi levels 
* this problems can be escape / sorted by asynchronous code 

```
Async readFile() will have three arguments - new file path ( file already exit), UTF-8,  and callback function
on Callback function will have two arguments - 
1. (err, data)=> 
error will be always first one 
```

### HTTP MODULE - networking capability -server
The http.createServer() method creates an HTTP Server object.
The http.createServer() method turns your computer into an HTTP server.
* The HTTP Server object can listen to ports on your computer and 
execute a function, a requestListener, each time a request is made.
* this is a web server module that is capable of accepting 
* 


1. request and sending back responses 
2. http.createServer() accept callback function
   * create server is a method here. 
3. this callback function receives two fundamental variable - req, res
4. req and res are objects 
5. end = sending back respond to the clint 
6. clint server model. 
7. HTTP status code = 
8. 404 = page not found 
9. 200 = ok ( success )

### listen() = method 
its receive couple of parameters = 
* port = 8000
* local host = 127.0.0.1
* and optional callback function.

it is an request from local server by listening from the port 8000

### Routing 
meaning - implementing different actions for different URLs 

### URL MODULE 
* this will help to parsing the parameters and value and into formated a object.
* req.url = will bring different request from url 
* we can create a variable as a pathName = base on different pathName we can send different respond for those requests. 
* '/' root of the url

### HTTP Header -
```
a piece of information about the respond that we are sending back as a respond. 
```
### res.writehead() meathod
* http status code, {
* 'Content-type': 'text/html' }
* always need to send back before respond file. will be top of the response. 

### res.end()
is a method used to end the response process when handling HTTP requests.

res.end() properly ensures that your HTTP server handles requests efficiently and correctly, 
providing a complete and well-formed response to clients.

### API
```
is a service from which requests  some data

```

### data here is an Array and it has different objects-
### data has to be in string here for keys and its value. 

### " . " = refer the the directory from where we run the node command in the terminal = represent current folder. 

### --dirname 
* its a node global variable that contains the directory name of the current module
* its always translates to the directory in which the script that is currently executing is located. 
`${__dirname} = where is the current file located. 
* It provides the absolute path to the directory containing the current module file.


### JSON.parse
```
this code the json code which is string and atumatically turn into the javaScripts code. 
here - it will make js object. 
it will read data from JSON file to data then it will parse that into an object.
used to convert a JSON string into a JavaScript object. 

```

### replace function 
instate use the code we can use the / /g = to use all the variables. 

### %name% = placeholder 

### query string in object 
after ? in url - which is call query string. 
need to true in the parse function to make query into object. 

### export property from module
** anonymous function = function does not have any name
this is assigned to export property on the module.
require(. = meaning current location of the module )
it is exception with require(. )  meaning where this module is in. 


### Slugify
it is a string involves converting it to a URL-friendly SLUGS - easy to read, typically by making it lowercase, 
replacing spaces with hyphens, and removing special characters.


## HTTP 
HTTP status codes are issued by a server in response to a client's request made to the server. 
They indicate whether the request was successful, and if not, what type of error occurred. 
Here are the categories and some of the common HTTP status codes:

### 1xx Informational
100 Continue: The server has received the request headers, and the client should proceed to send the request body.
101 Switching Protocols: The requester has asked the server to switch protocols and the server is acknowledging that it will do so.

### 2xx Success
200 OK: The request has succeeded.
201 Created: The request has been fulfilled, resulting in the creation of a new resource.
202 Accepted: The request has been accepted for processing, but the processing has not been completed.
204 No Content: The server successfully processed the request, but is not returning any content.

### 3xx Redirection
301 Moved Permanently: The requested resource has been permanently moved to a new URL.
302 Found: The requested resource is temporarily available at a different URL.
304 Not Modified: There is no need to retransmit the requested resources, as they have not been modified since the last request.

### 4xx Client Errors
400 Bad Request: The server cannot or will not process the request due to a client error (e.g., malformed request syntax).
401 Unauthorized: The request requires user authentication.
403 Forbidden: The server understood the request, but refuses to authorize it.
404 Not Found: The server cannot find the requested resource.
405 Method Not Allowed: The request method is not supported for the requested resource.
409 Conflict: The request could not be processed because of a conflict in the current state of the resource.

### 5xx Server Errors
500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
501 Not Implemented: The server does not support the functionality required to fulfill the request.
502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
503 Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance of the server.
504 Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
These status codes help both the client and the server communicate the outcome of HTTP requests and understand the type of response that is expected or the type of error that occurred.
