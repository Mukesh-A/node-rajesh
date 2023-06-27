const mongoose = require("mongoose");

const url =
  "mongodb+srv://mukeshproject06:7p5MgszvgOmqHg8d@cluster0.umkbthn.mongodb.net/Mukesh?retryWrites=true&w=majority";
// mongoose.set("strictQuery", false);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
