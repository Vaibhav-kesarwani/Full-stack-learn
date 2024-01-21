const express = require("express");

function calculation(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }

  return ans;
}

function sum(a, b) {
  return a + b;
}

const app = express();

app.get("/adventure", (req, res) => {
  const n = req.query.n;
  // const a = parseInt(req.query.a);
  // const b = parseInt(req.query.b);
  // const ans = sum(a, b);
  const ans = calculation(n);
  res.send(ans.toString());
  // res.send("Hello there!");
});

app.get("/home", (req, res) => {
  res.send("Hello there!");
});

app.get()


app.listen(3000);
