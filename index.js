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
  const { query, pathname } = url.parse(req.url, true);

  // console.log(pathname);
  // console.log(query);
  // overview page//////
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
