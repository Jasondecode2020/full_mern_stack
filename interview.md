# full stack

### frontend

backend: https://www.youtube.com/watch?v=6WYEmUVhiwQ

1. diff between js and nodeJS

type: js is programming language, nodejs is interpreter and environment for js

utility: js used for client side activity fro a web app
nodejs used for accessing non-blocking operations of any os

running engine:

js: firefox, chrome, v8

nodejs: v8 chrome

2. what is node.js

powerful js framework

chrom's v8 js engine

compile js into native machine code

used for server-side web app

3. benefits of using node.js

3.1 open source

3.2 aync programming

3.3 fast and simple

3.4 single-threaded

3.5 cross platform

3.6 no buffering

4. diff between Angular and Node.js

angular is written in ts, spa, real-time

node.js written in c, c++ and js, fast, scalable, database queries

5. why node.js is single threaded

in order to support async processing

app can perform better

6. how does node.js works

vm that uses js as its scripting language and runs on a v8 environment

works on a single-threaded event loop and non-blocking I/O

can run any server

7. where node.js can be used

real-time web app, network app, distributed system, general purpose app

8. types of api functions in node.js

async, unblocking functions
sync, blocking functions

9. diff between async and sync
   async req to server, no wait for server to respond
   non-blocking immediately respond with whatever data is available

10. package.json

introduction of node.js
heart of all app
meta data of the project we define the properties of a package

11. event-driving programming?

node.js
publish-subscribe pattern

event handler, event loop, call back queue, call stack

12. how does event loop works?

event handler, event loop, : handles all sync functions, put it in

call back queue,

call stack for normal functions

13. REPL in node.js
    READ EVAL PRINT LOOP
    node shell

14. what should be done using sync

input, output, heavy computations

15. Controls flow controls the functions calls in node.js?

control the order of execution, collect data,
limit cucurrency

16. test in node.js pyramid?

end to end test
integration tests
unit tests

17. error-first callback in node.js

first callback of error
if no, there is data

18. module..exports?

encapsulate all the ralated codes into a single unit of code
then put all ralated functions into a single file

19. Reactor pattern in node.js

concept, non-blocking I/O op
event queue

20. diff frontend and backend
    language used
    method
    used for seo for frontend

21. LTS of node.js

long term support, at least 18 month

22. security implementation in node.js?

authentication and error handling

23. callback hell?

intensively nested callbacks which are unreadable

24. libuv?

multi-platform support lib for node.js

major used for aync I/O

file system events
child process

25. middleware in node.js?

middleware functions

commonly performed task
req, res, next
finish the req-res cycle

26. url module in node.js

for url resolution and parsing
build-in module of node.js

27. ESLint?

linting utility for checking bugs

28. why node.js using v8?

converts js code into native machine code
fast the app

29. explain the control flow function

sync and async controls

order of execution
the required data needs to be collected
the cucurrency avoided

30. 2 argument that async.queue takes as input?
    task function adn cucurrency value

31. spawn() and fork() method in node.js

spawn launch a new process

fork() executing a new instance of v8 engine

32. global object in node.js?

all modules can use

modules, functions and objext, ets

use directly

33. stub in node.js

programs or functions in testing

34. assert works in node.js?

for test, when test cases fails.

35. https apis of test?

low-level unit more test
small high level; test end to end, integration

36. expressJS package what?

framework, lightweight manage dataflow between server and routes

37. process.nextTick() and setImmediate()? diff
    setImmediate() predefined period

38. buffer class in node.js

for raw data
without importing
used not compatible with binary data

39. handle the child theads?

spawn()
ChildProcess

40. stream in ndoe.js

data to arrays and strings.

writing and reading
read, write, duplex, transform

41. NODE_ENV

for development env and production env

42. readFile VS createReadStream in node.js

43. list down timing in node.js

setTimeout/clearTimeout
setInterval/clearInterval
setImmediate/clearImmediate
process.nextTick

44. punnycode in node.js
    encoding syntax converting

45. node.js vs ajax

ajax client side, node.js server side

ajax updateing webpage without having to refresh it

46. debugger?

node debug build in

47. exit codes of node.js

finishing a process
fatal error

48. event emmitter

emitting events
include all events

49. crypto support?

yes

50. app and server seperate?

read and debug fast

### frontend

marketing of react

facebook in 2013
open source

maintained by facebook and instagram

1. General React

what is react?
frontend framework developed by facebook
allows to use reuseable components
strong community

2. Main features?

virtual dom, server-side rendering

uni-directional data flow

3. advantage of react?

increase app performace

easy to integrate

easy to write to ui test cases

4. limitations of react?

not a full scale framework
lib very large
diff for understand for new programmers
use jsx inline templating

5. jsx?

js xml
Robust
makes html easy to understand
only one outter most element

6. what is VD?

real dom will do things only when diff of it , use vm first to calculate.

7. real dom and virtual dom
   update faster, real: slower
   cannt directly update html, can
   updates if jsx elements render, create a dom
   no memory wastage, too much

8. why browers can't read jsx?

jsx is not js
brower can only read js
jsx convert to js used babel, before reaching brower.

9. how react syntax changed form es5 to es 6?
10. react vs angular?
    View MVC
    VD real Dom
    SSR CSR
    one way binding 2 way binding
    facebook google
    compile time running time debugging

11. Components

12. everything is components?
    components are building blocks of UI
    split into independent, reuseable pieces, renders independantly

13. purpose of render in React
    every components must have a render
    should be a pure function

14. pros in react
    parent to child passed down
    used to render dynamic data

15. state in react
    heart of react components

16. state and props

state can change inside components, props cannot
changes into child components state not, props yes 17. update state?

17. change state
    this.setState({name: 'java', id: '222'})

18. React router

arrow function how used?
es6 easy to use higher order functions

19. redux

stateful and stateless

20. lifecycle?

21. event
    actions, mouse click
    button

22. create event

23. synthetic events inReact

24. refs in resct?

references

25. code module?
    in diff files

26. forms created in react

27 controlled and uncontrolled components?

28. HOC
    higher order components

29. do with HOC

30. pure components?
    simplest and fastest

31. keys in react
    unique virtual dom components

32. MVC problem

slow and ineffient, memory wastage

33. flux

34. redux
    state container for js apps
    state management app
    easy to test

35. redux three principle?

single source of truth
state is read-only

36. store
    stored at one place
    easy to keep track and debug

37. Redux
    action
    reducer
    store
    view

38. data flow in redux

action should have a type in redux

39. Reducer, store

40. redux and flux

41. redux advantage
    ease of testing

42. React Router?

React 核心思想

Readable Maintainable and Reusable

1. Single Responsibility

2. Open / Close

3. Dependency Injection

Component + Declarative

1. 划分组件
2. 静态代码 JSX + Component + props
3. 放置 state， state
4. state lifting, state lifting + lifecycle
5. 反向数据流, callback function

6. 划分组件 -> 责任上自成一体 + 组件多次复用
7. props -> 一个组件在不同使用场景上的多样化处理
   2.1. 命名
   2.2 实现相应功能
   2.3 传值
8. state -> 当任何一个东西是动态的时候
   3.1 命名
   3.2 调用 handler
   3.3 根据 state 改变做相应的处理
9. lifecycle -> 获取数据 -> useEffect / componentDidMount
   ->动态东西和用户操作无关， useEffect / componentDidUpdate, useEffect () => {} / componentwillUnmount
10. 衍生状态/数据 -> 状态和用户操作相关 ？ 其他状态相关
11. 状态提升
    6.1 将状态写到最小公用组件里
    6.2 将组件的状态改为 props
    6.3 传递 props

```js
useEffect(() => {
  // 错误用法， 要么不跑， 要么一直跑
});

useEffect(() => {
  // componentDidMount()
}, []);

useEffect(() => {
  // componentDidUpdate()
}, [dependency]);

useEffect(() => {
  // componentWillUnmount()
  return () => {};
}, []);
```

Phone Interview:

check the person is ok, ask basic info, and introduce the company.
Code Test: take home code test
实现一个小页面
email to company

Tech Interview:
if code test is ok, check your ability
if it is the same as code test

Behavior:
Culture

HR Interview:
