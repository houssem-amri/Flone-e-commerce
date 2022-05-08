const express = require("express");

const Order = require("../Models/Order");

const router = express.Router();

router.get("/get_order", (req, res) => {
    Order.find()
    .populate({
      path: "userId",
    })
    .populate({
      path: "billingId",
    })
   
    .exec(function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          data: docs,
        });
      }
    });
});

router.post("/add_order", (req, res, next) => {
    const order = new Order({
        userId: req.body.userId,
        billingId: req.body.billingId,
        productsId: req.body.productsId,
        prix: req.body.prix,
        Order_notes: req.body.Order_notes,
        Order_date: req.body.Order_date,
  
      });
      order
        .save()
        .then(
          res.status(200).json({
            message: "order added succesful",
          })
        )
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
  });

module.exports = router;
