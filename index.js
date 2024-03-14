const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("HEADERS:", req.headers);
  console.log("QUERY:", req.query);
  console.log("BODY:", req.body);

  res.json({
    success: true,
    message: "Get request successful!",
  });
});

app.post("/", (req, res) => {
  console.log("HEADERS:", req.headers);
  console.log("QUERY:", req.query);
  console.log("BODY:", req.body);

  res.json({
    success: true,
    message: "Post request successful!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
