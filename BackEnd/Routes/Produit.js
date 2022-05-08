const express = require("express");
const Produit = require("../Models/Produit");

const router = express.Router();
router.post("/ajouter_Produits", (req, res) => {
  console.log("hello req .body", req.body);
  const produit = new Produit({
    nomProduit: req.body.nomProduit,
    categorie: req.body.categorie,
    code: req.body.code,
    quantite: req.body.quantite,
    prix: req.body.prix,
    description: req.body.description,
  });
  produit.save();
  res.status(200).json({
    message: "Produit added succesful",
  });
});

router.get("/get_produit", (req, res) => {
  Produit.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        data: docs,
      });
    }
  });
});

router.delete("/delete_produit/:id", (req, res) => {
  console.log("herreeeeeee id ", req.params.id);
  Produit.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "produit deleted succesful",
    })
  );
});
router.get("/get_Produit_byId/:id", (req, res) => {
  Produit.findOne({ _id: req.params.id }).then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        produit: findedObject,
      });
    }
  });
});
router.put("/Update_Produit", (req, res) => {
  const produit = {
    _id: req.body._id,
    nomProduit: req.body.nomProduit,
    categorie: req.body.categorie,
    code: req.body.code,
    quantite: req.body.quantite,
    prix: req.body.prix,
    description: req.body.description,
  };
  Produit.updateOne({ _id: req.body._id }, produit).then(
    res.status(200).json({
      message: "produit updated successfuly",
    })
  );
});

router.post("/update_Product_quantity", (req, res) => {
  Produit.find().then((findedObject) => {
    if (findedObject) {
      for (let i = 0; i < findedObject.length; i++) {
        for (let j = 0; j < req.body.length; j++) {
          if (
            JSON.stringify(findedObject[i]._id) ===
            JSON.stringify(req.body[j]._id)
          ) {
            findedObject[i] === req.body[j];
          }
        }
        console.log(findedObject[i]);

        findedObject[i].save().then(
          res.status(200).json({
            message: "produit updated successfuly",
          })
        );
      }
    }
  });
});
module.exports = router;
