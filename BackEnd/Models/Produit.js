const mongoose= require ("mongoose");
const ProduitSchema =mongoose.Schema({
    nomProduit :{type : String},
    categorie :{type : String},
    code:{type : String},
   quantite :{type : String},
   prix :{type : String},
   description :{type : String},
});
const Produit = mongoose.model("Produit",ProduitSchema);
module.exports = Produit;