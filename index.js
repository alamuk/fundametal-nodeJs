// Require
/*
 * `require` is used in the CommonJS module system, which was primarily designed for server side JavaScript.
 * Specifically in nodejs.
 * CommonJS modules ARE loaded synchronously, meaning that the entire module needs to be available before it can be used.
 * syntax
 * const module = require('module-name')
 *
 * `import` is part of the ES6 (ECMAScript 2015) module system, designed to be used both in the browser and server-side JavaScript
 *
 * ES modules can be loaded Asynchronously, which can improve performance, by allowing the code to load and execute in non-blocking ways.
 * Syntax
 * import module from 'module-name;
 * */

// const myModule = require('./oscar/module');
// myModule();
//
// import helloEsModuleFunction from './oscar/module';
// chiuaua();

// core module
const fs = require('fs');
const http = require('http');
const url = require('url');
// third-party module
const slugify = require('slugify');
// my own module - its from our local file system
const replaceTemplate = require('./modules/replaceTemplate');

////////
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8',
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8',
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8',
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataJsObj = JSON.parse(data);

// slugify

const slugifyData = dataJsObj.map((el) =>
  slugify(el.productName, { lower: true }),
);

console.log(slugifyData);

// server //
const server = http.createServer((req, res) => {
  console.log(req);
  // the url.parse => parses a string and returns an object
  // the object represents the components of the URL
  const { query, pathname } = url.parse(req.url, true);
  /*
   * protocol
   * host
   * port
   * pathname: '/pathname'
   * query: { name: 'Shah', age: 25 },
   *
   *
   * */
  // console.log(pathname);

  // console.log(query);
  // overview page//////

  // switch (pathname) {
  //   case '/':
  //   case '/overview': {
  //     res.writeHead(200, { 'Content-type': 'text/html' });
  //     const cardsHtml = dataJsObj
  //       .map((el) => replaceTemplate(tempCard, el))
  //       .join('');
  //     const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
  //     res.end(output);
  //     break;
  //   }
  //   case '/product': {
  //     const product = dataJsObj[query.id];
  //     res.writeHead(200, { 'Content-type': 'text/html' });
  //     const output = replaceTemplate(tempProduct, product);
  //     res.end(output);
  //     break;
  //   }
  //   case '/api' : {
  //     res.writeHead(200, { 'Content-type': 'application/json' });
  //     res.end(data);
  //     break;
  //   }
  //   default: {
  //     res.writeHead(404, {
  //       'Content-type': 'text/html',
  //       'my-own-header': 'hello world',
  //     });
  //     res.end('<h1> page not found </h1>');
  //     break;
  //   }
  // }

  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataJsObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);
  }

  // product page//////
  else if (pathname === '/product') {
    const product = dataJsObj[query.id];
    res.writeHead(200, { 'Content-type': 'text/html' });
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }
  //API page//////
  else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  }

  // Not found page//////
  else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello world',
    });
    res.end('<h1> page not found </h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('server is listening port 8000');
});
