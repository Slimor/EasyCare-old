const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(
      "mongodb+srv://gajownik:zaq12wsx@cluster0.3wkj9v4.mongodb.net/?retryWrites=true&w=majority"
    )
      .then((client) => {
        dbConnection - client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
  getDb: () => dbConnection,
};
