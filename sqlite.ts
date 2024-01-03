import { Database } from "bun:sqlite";

const db = new Database("mydb.sqlite");

const query = db.query(`create table foo`);
query.run();

// const query = db.query("select 'Hello world' as message;");
// compile the prepared statement
const query1 = db.prepare("SELECT * FROM foo WHERE bar = ?");

// => { message: "Hello world" }
console.log(query1.get())
