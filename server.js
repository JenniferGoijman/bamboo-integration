const express = require("express");
const { getEmployees } = require("./bamboo");

const app = express();
const port = 1234;

app.get("/employees", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
