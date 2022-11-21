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
const problem3_5Router = require("./routes/problem3_5Router");
const problem4Router = require("./routes/problem4Router");
const problem7Router = require("./routes/problem7Router");

app.use("/", indexRouter);
app.use("/problem1", problem1Router);
app.use("/problem3_5", problem3_5Router);
app.use("/problem4", problem4Router);
app.use("/problem7", problem7Router);


// ******Start server******
app.listen(port, () => console.log(`Server running on port ${port}`));