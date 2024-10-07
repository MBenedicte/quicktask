require("dotenv").config({ path: __dirname + "/../../.env" });

if (!process.env.DATABASE_PASSWORD || !process.env.DATABASE_DBNAME) {
  throw new Error("Missing necessary environment variables: DATABASE_PASSWORD or DATABASE_DBNAME");
}

module.exports = {
  development: {
    username: "postgres",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME,
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
