const app = require("express")();

const authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"],
  },
  {
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
  },
  {
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
];

app.get("/", (req, res) => {
  res.send("Authors API");
});

app.get("/authors/:id", (req, res) => {
  const id = parseInt(req.params.id) - 1;
  const author = authors[id];

  if (author) {
    res.send(`${author.name}, ${author.nationality}`);
  } else {
    res.status(404).send("There is no author with this id");
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server started on port:", port);
});
