import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

app.get("/greet", (req, res) => {
  res.json({ message: "Hello, developer!" });
});

app.post("/submit", (req, res) => {
  const body = req.body ?? {};
  const name = body.name;
  const age = body.age;

  if (typeof name !== "string" || typeof age !== "number") {
    return res.status(400).json({
      error: "Invalid body. Send JSON like: { \"name\": \"John\", \"age\": 25 }",
      received: req.body ?? null,
    });
  }

  return res.status(201).json({
    message: `Hello, ${name}! You are ${age} years old.`,
  });
});

app.post("/submit", (req, res) => {
  const { name, age } = req.body as { name?: string; age?: number };

  if (!name || typeof name !== "string" || age === undefined || typeof age !== "number") {
    return res.status(400).json({
      error: "Invalid body. Send JSON like: { \"name\": \"John\", \"age\": 25 }",
    });
  }

  res.status(201).json({
    message: `Hello, ${name}! You are ${age} years old.`,
    received: { name, age },
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});