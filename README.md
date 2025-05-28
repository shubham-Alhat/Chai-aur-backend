## Backend course by Hitesh choudhary.

### 1. Build an App and Deploy.

1. Start a empty node app

```bash
npm init
```

2. Install express

```bash
npm install express
```

3. Explanation of basic express code block.

```javascript
const express = require("express"); // create a express variable
const app = express(); // create a express app. this app holds all powers of express.
const port = 3000; // this our port

// here, express listen get method on `/` route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// here the main thing that express does. i.e start listening port:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

**To run server simultanously while writing code. change the script.**

```javascript
"scripts": {
    "start": "npx nodemon index.js"
  },
```

Now, here with these code, we are deploying the app.

1. Make sure .env file is in .gitignore

<hr>

### 2. How to connect Frontend and Backend in **different** **ways**.

1. Create two folders in root dir. **frontend**.
2. Create node app by running the command.
3. Install express.
4. Create index.js
5. change script.

**Note** - When i use module js way to import, there comes error. but by adding following **type**. error can be handle beautifully.

```json
 "main": "index.js",
  "type": "module",  // <<<<------->>>>
```

Now, in index.js, the content is.

```javascript
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hello world from Chai..</h2>");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "Why did the math book look sad?",
      content: "Because it had too many problems.",
    },
    {
      id: 3,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 4,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field.",
    },
    {
      id: 5,
      title: "How does a penguin build its house?",
      content: "Igloos it together.",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express app is running on server ${port}`);
});
```
