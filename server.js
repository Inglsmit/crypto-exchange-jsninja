const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const ITEMS = [
  { label: "ETH", balance: "2.08" },
  { label: "ETC", balance: "18.08" },
  { label: "BTC", balance: "3.2" }
];

app.post("/getitems", function(req, res) {
  let count = 0;
  inputValue = req.body.inputValue;
  // const items = this.props.items;

  const items = ITEMS.filter(item => {
    const keep =
      (!inputValue ||
        item.label.toLowerCase().includes(inputValue.toLowerCase())) &&
      count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });

  if (!items) {
    res.status(400).send({ isEmpty: true });
  }

  res.status(200).send(items);
});

const server = app.listen(5000, function() {
  console.log("app running on port.", server.address().port);
});
