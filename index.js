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
