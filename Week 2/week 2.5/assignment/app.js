const express = require("express");

const app = express();

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = users[0].kidneys.length;
  let numberOfHealthyKdneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKdneys = numberOfHealthyKdneys + 1;
    }
  }

  const numberOfUnhealtyKidneys = numberOfKidneys - numberOfHealthyKdneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKdneys,
    numberOfUnhealtyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({
    msg: "Done done!",
  });
});

app.delete("/", (req, res) => {
  let newKidneys = [];

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }

  users[0].kidneys = newKidneys;

  res.json({});
});

app.listen(3000);
