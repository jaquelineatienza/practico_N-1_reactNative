import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const db = [];

app.post("/post", (req, res) => {
  const { name } = req.body;

  db.push(name);
  res.status(200).json("name loaded correctly");
});

app.get("/get", (req, res) => {
  console.log(db);
  const result = db[db.length - 1];
  res.status(200).json({ msg: "bienvenido", result });
});

app.listen(3000, () => {
  console.log("the port is running in the port 3000");
});
