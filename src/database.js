const mongoose = require("mongoose")

const { CDPDC_MONGODB_HOST, CDPDC_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${CDPDC_MONGODB_HOST}/${CDPDC_MONGODB_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));