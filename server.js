const express = require("express");
const path = require("path");
const app = express();

// if (process.env.NODE_ENV === "production") {
app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./build/index.html"));
});
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`sever started in ${PORT}`));
