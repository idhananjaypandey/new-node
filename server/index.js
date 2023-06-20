const express = require("express");
const cors = require("cors");
var request = require("request");
const app = express();
const port = 3020;
app.use(cors());

app.get("/products", (req, res) => {
  var options = {
    method: "GET",
    url: "https://79882b3b48057afb8785b37a580ab8d9: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@phptestingteam.myshopify.com/admin/api/2023-01/products.json",
    headers: {
      Authorization:
        "Basic Nzk4ODJiM2I0ODA1N2FmYjg3ODViMzdhNTgwYWI4ZDk6c2hwYXRfNzc4ZWEyZjIyNTk5N2Q0OTEwMmVlODAxNWRjZjA5NTM=",
    },
  };
  request(options, function (error, response) {
    var products = JSON.parse(response.body).products;
    if (error) {
      console.error(error);

      return res.status(500).send("An error occurred");
    }

    res.send(products);
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
