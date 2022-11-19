const express = require("express");
const path = require("path");


const app = express();
const port = process.env.PORT || 3000;

// ******Static files******
app.use(express.static(path.join(__dirname, "../", "public")));


// ******Settings******
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// *******Routes*******
const indexRouter = require("./routes/indexRouter");
const problem1Router = require("./routes/problem1Router");
const problem2Router = require("./routes/problem2Router");

app.use("/", indexRouter);
app.use("/problem1", problem1Router);
app.use("/problem2", problem2Router);


// ******Start server******
app.listen(port, () => console.log(`Server running on port ${port}`));