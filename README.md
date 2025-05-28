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
