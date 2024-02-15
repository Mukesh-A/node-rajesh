const mongoose = require("mongoose");

const url =
  "";
// mongoose.set("strictQuery", false);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
