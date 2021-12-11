## backend

30 hours

nodeJS include js

### lesson 1 listened 3 times: 10h

listened 3 times

ES
ECMA Script European Computer Manufacturer’s Association: ECMA
ECMA international

ES5 ES2009
ES6 ES2015
ES7 ES2016
ES12 ES2021

ES6+

Babel: compile ES6+ to ES5

var vs let and const

For es6, only use let and const

1 function scope, block scope and global scope

```js
var apple = "apple";
function foo() {
  var pear = "pear";
  console.log(apple); // apple
  console.log(pear); //pear
}

foo();
console.log(apple);
// console.log(pear); // ReferenceError: pear is not defined
```

2 Re-declared and update

```js
var fruit = "apple";
var fruit = "pear";
console.log(fruit);
fruit = "grape";
console.log(fruit);
```

Hoisting

```js
console.log(fruit); // undefined
var fruit = "apple";
```

equals

```js
var fruit;
console.log(fruit); // undefined
fruit = "apple";
```

function hoisting

```js
foo();

function foo() {
  var pear = "pear";
  console.log(pear); //pear
}
```

compare why use let and not use var, var can be changed, let cannot

```js
var fruit = "apple";
if (true) {
  // think in another file
  var fruit = "pear";
}
console.log(fruit);

let fruit = "apple";
if (true) {
  // think in another file
  let fruit = "pear";
}
console.log(fruit);
```

Hoisting for let is different

```js
console.log(fruit); // Cannot access 'fruit' before initialization
let fruit = "apple";
```

pass by value or reference

```js
const fruit = { name: "apple", color: "red" };
// fruit = { name: "apple", color: "green" }; // Assignment to constant variable.
fruit.color = "green";
console.log(fruit);

const fruits = [];
// fruits = ["apple"]; // Assignment to constant variable.
fruits.push("apple");
console.log(fruits);
```

// quiz 3

```js
var arr = [10, 12, 15, 21, 1];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 1000);
}
```

### lesson 2 10h

listened 3 times

array operations

//reduce

```js
const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);

let accu = 0;
for (let i in numbers) {
  accu += numbers[i];
}
console.log(accu);

// search

console.log(numbers.includes(2));
console.log(numbers.indexOf(2)); // get first index of number 2
console.log(numbers.some((x) => x > 10));
console.log(numbers.some((x) => x < 2));
```

use filter

```js
// use filter
const odds = numbers.filter((i) => i % 2);
console.log(odds);
console.log(numbers);

const fruits = [
  {
    name: "apple",
    color: "green",
  },
  {
    name: "pear",
    color: "yellow",
  },
];

const filteredFruits = fruits.filter((i) => i.color === "green");
console.log(filteredFruits);
console.log(fruits);
```

nodejs
frontend, backend, interface
CSR: client side rendering

backend: Router - Controllers - Models

// js 单线程语言
process 进程
thread 线程

blocking problem

等待: 同步 = 阻塞
不等待： 异步 = 非阻塞
事件触发

heap 和 stack, 用来存储数据
call stack： LIFO: function call, 当前正在执行的命令
queue： FIFO, event loop， callback queue

This is a very good video to explain callback queue, stack and event loop
event loop is used to check callback queue, if not empty and stack is empty, then put event to stack
event loop: https://www.youtube.com/watch?v=8aGhZQkoFbQ

setTimeout: in Web API

why single theaded: js in web somethings are slow

if slow, it will block, if not sync

ndoe.js

1 js run environment build on Chrome's V8 engine

2 async, event driven

3 non-blocking I/O

4 backend

5 fast and scalable

node start.js : for executing the start.js in node file

// framework, module, package, library

server.js for http server

### 3 6h node.js

listened 2 times

use v12 or v14 is ok
should not use the new version, may have bugs

we should use v14 now

RESTFUL API

HTTP REQUEST

protocal

OSI model
Application
Presentation
Session
TCP: Transmission control protocal, reliable
UDP: user datagram protocal, unreliable
IP: Internet protocal
HTTP
0.9
1.0
1.1 持久连接
2 基于 https (tls), 采用二进制传输， 服务端推送： 一次性返回 html, css, 多路复用 50%
3 draft

url: universal resource identifier

https:// protocol
auth:
user: pass

host: [path] + search + hash

hostname: port
http: 80
https: 443
no need to write port for web, it has default port

query = search
query param and & hash
#: anchor
get: res data is in body
get: req data in url

query is key: value pair

document.location.hash/query

GET: get data
POST: post data
PUT: change all data
DELETE: deldet data
PATCH: update part data

HEADER: case insensitive

Content-Type: text/html

Allow: GET, POST, PUT

Referer: marketing
User-Agent

Authorization：<type> <credentials>

Basic (username and password)
Bearer (bearer token to access Oauth 2.0 protected resources)

Access-Control-Allow-Origin:
cors 问题
从一个 localhost 到另一个 localhost 做 request
会出现 cors, 需要自己手动添加或加 package 解决

X-custom: 自定义 header

This is all common used http header

status code:

200 OK
201 created
204 no content
209 conflict

304 not modified

400 bad request
401 unauthorized 比如需要登录
404 Not Found

500 Internal Server Error

JSON: javascript object notation

json is a replacement of xml and ajax system

serialize deserialize 数据处理

json and xml

JSON (JavaScript Object Notation) is a lightweight data-interchange format and it completely language independent. It is based on the JavaScript programming language and easy to understand and generate.

XML (Extensible markup language) was designed to carry data, not to display data. It is a W3C recommendation. Extensible Markup Language (XML) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. The design goals of XML focus on simplicity, generality, and usability across the Internet. It is a textual data format with strong support via Unicode for different human languages. Although the design of XML focuses on documents, the language is widely used for the representation of arbitrary data structures such as those used in web services.

{"Geeks":[
{ "firstName":"Vivek", "lastName":"Kothari" },
{ "firstName":"Suraj", "lastName":"Kumar" },
{ "firstName":"John", "lastName":"Smith" },
{ "firstName":"Peter", "lastName":"Gregory" }
]}

<Geeks>
    <Geek>
        <firstName>Vivek</firstName> <lastName>Kothari</lastName>
    </Geek>
    <Geek>
        <firstName>Suraj</firstName> <lastName>Kumar</lastName>
    </Geek>
    <Geek>
        <firstName>John</firstName> <lastName>Smith</lastName>
    </Geek>
    <Geek>
        <firstName>Peter</firstName> <lastName>Gregory</lastName>
    </Geek>
</Geeks>

JSON.stringnify(person); person is an object, becomes json

this is deep copy of object
JSON.parse(JSON.stringnify(person)); // becomes object

What is SOAP
simple object access protocol

ACID:

API:
application programming interface

public web api - web service

Rest Service
Representation state transfer (REST) or RESTful

handle url operations

GET: read
POST: create
PUT: update
DELETE: deldet

CRUD

RESTful is stateless

REST API

REST IS api type: a protocol we design web url

design: RESTful api

1 versioning
example.com/api/books
/api/v1/books
/api/v2/books

2 url use noun not verb
GET /v1/books
GET /v1/getBooks X
use plural

3 GET method is for get
GET /v1/addBooks X

4 url 使用嵌套
GET /posts/:postId/comment/:commentId

5 注意结果大小
10000 个 book 数据
GET /v1/books -> 10 个数据， 当前第一页
GET/ v1/books?page=2&pageSize=10

6 使用 status code 表示请求结果

7 尽量返回错误信息的文本
{"error": "invalid password"}
{"error": 100001}
"errro"

paypal, twitter api
