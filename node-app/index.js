import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[Server] running on port ${PORT}`);
});
