import axios from "axios";
import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import Banner from "../Banner";


export default function Add_conseilleur() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "conseilleur";
  let history = useHistory();

  const ChangeNom = (event) => {
    setNom(event.target.value);
  };
  const ChangePrenom = (event) => {
    setPrenom(event.target.value);
  };
  const ChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const ChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const HandleSubmit = () => {
    let data = {
      nom: nom,
      prenom: prenom,
      email: email,
      password: password,
      role: role,
      
    };
    console.log("here response", data);

    axios
      .post("http://localhost:3200/api/add_users", data)
      .then((response) => {
      
        console.log("here response", response.data.message);
        history.push("/Table_conseilleur")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="app-main__outer">
      <div className="app-main__inner">
        <Banner title="Ajouter conseilleur de vente" icon="pe-7s-add-user" />
        <div className="main-card mb-3 card">
          <div className="card-body">
            <h5 className="card-title">Grid Rows</h5>
            <form className>
              <div className="form-row">
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleNom" className>
                      nom
                    </label>
                    <input
                      name="Nom"
                      id="exampleNom"
                      placeholder="Nom"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangeNom(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="examplePrenom" className>
                      Prenom
                    </label>
                    <input
                      name="Prenom"
                      id="examplePrenom"
                      placeholder="prenom"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangePrenom(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleEmail11" className>
                      Email
                    </label>
                    <input
                      name="email"
                      id="exampleEmail11"
                      placeholder="Example@gmail.com"
                      type="email"
                      className="form-control"
                      onChange={(event) => ChangeEmail(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="examplePassword11" className>
                      Password
                    </label>
                    <input
                      name="password"
                      id="examplePassword11"
                      placeholder="******"
                      type="password"
                      className="form-control"
                      onChange={(event) => ChangePassword(event)}
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={HandleSubmit}
                className="mt-2 btn btn-primary"
              >
                Ajouter 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}