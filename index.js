const express = require("express");

const app = express();
const PORT = 3000; 

app.get("/first", (req, res) => res.send("first"));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
