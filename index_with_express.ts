import express from "npm:express";

const PORT = 8080;

const app = express();

app.get("/", (_, res) => {
  res.send("👋🏼");
});

console.log(`running deno powered express server on ${PORT}`);

app.listen(PORT);
