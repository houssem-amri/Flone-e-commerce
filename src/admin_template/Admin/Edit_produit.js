
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner from '../Banner';
import { useHistory, useParams } from "react-router-dom";


export default function Edit_produit() {
    const [nomproduit, setnomproduit] = useState("");
    const [Categorie, setCategorie] = useState([]);
    const [Code, setCode] = useState("");
    const [quantite, setquantite] = useState("");
    const [Prix, setPrix] = useState("");
    const [Description, setDescription] = useState("");

    let param = useParams();
    let history=useHistory();
    
    useEffect(() => {
      getProduitById();
    }, []);

 const changenomproduit = (event) => { setnomproduit(event.target.value); };
  const changeCategorie = (event) => { setCategorie(event.target.value); };
  const changeCode = (event) => { setCode(event.target.value); };
  const changequantite = (event) => { setquantite(event.target.value); };
  const changePrix = (event) => { setPrix(event.target.value); };
  const changeDescription = (event) => { setDescription(event.target.value); };
  
      const getProduitById = () => {
        axios
          .get("http://localhost:3200/api/get_produit_byId/" + param.id)
          .then((result) => {
            let data = result.data.produit;
            setnomproduit(data.nomProduit);
            setCategorie(data. Categorie);
            setCode (data.code);
            setquantite (data.quantite);
            setPrix (data.prix);
            setDescription (data.description);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const Handlesubmit = () => {
        let data = {
            _id: param.id,
          nomProduit: nomproduit,
          categorie: Categorie,
          code: Code,
          quantite: quantite,
          prix: Prix,
          description: Description,
        };
    
        console.log("here response", data);
        axios
        .put("http://localhost:3200/api/Update_produit", data)
        .then((response) => {
          console.log("here response", response.data.message);
          setTimeout(() => {
            history.push("/Table_product")
           }, 100);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div className="app-main__outer">
    <div className="app-main__inner">
      <Banner title="Ajouter produits" icon="pe-7s-cart" />
      <div className="main-card mb-3 card">
        <div className="card-body">
          <h5 className="card-title">remplir formulaire</h5>
          <form>
            <div className="form-row">
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="examplenomproduit">
                    nom produit
                  </label>
                  <input
                    name=" nom produit"
                    id="examplenomproduit"
                    placeholder="nom produit"
                    type="text"
                    className="form-control"
                    onChange={(event) => changenomproduit(event)}
                    value={ nomproduit|| ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleSelect">

                    <select name="Select"
                      id="exampleSelect"
                      onChange={(event) => changeCategorie(event)}
                      className="form-control">
                      <option value="" > select categorie </option>

                      {Categorie?.map((value, i) => (
                        <option key={i}  value={value.Categorie}> {value.Categorie}</option>
                      ))}

                    </select>
                  </label >
                </div>
              </div>

              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="examplecode">
                    code
                  </label>
                  <input
                    name="code"
                    id="examplecode"
                    placeholder="****"
                    type="text"
                    className="form-control"
                    onChange={(event) => changeCode(event)}
                    value={Code|| ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleQuantite">
                    Quantite
                  </label>
                  <input
                    name="Quantite"
                    id="exampleQuantite"
                    placeholder="Quantite"
                    type="text"
                    className="form-control"
                    onChange={(event) => changequantite(event)}
                    value={quantite|| ""}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="examplePrix" >
                    Prix
                  </label>
                  <input
                    name="Prix"
                    id="examplePrix"
                    type="text"
                    className="form-control"
                    onChange={(event) => changePrix(event)}
                    value={Prix|| ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleDescription">
                    Description
                  </label>
                  <input
                    name="Description"
                    id="exampleDiscription"
                    type="text"
                    className="form-control"
                    onChange={(event) => changeDescription(event)}
                    value={Description|| ""}
                  />

                </div>
              </div>

            </div>
            <button type="button" onClick={Handlesubmit} className="mt-2 btn btn-primary">ajouter</button>

          </form>

        </div>
      </div>
    </div>
  </div>
);
}



