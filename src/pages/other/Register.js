import React, { Fragment, useState } from "react";

import axios from "axios";
const Register = ({}) => {
  //   const { pathname } = location;
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const onRegister = () => {
    let data = {
      nom: nom,
      prenom: prenom,
      email: email,
      password: password,
      tel: tel,
      role: "client",
    };
    axios
      .post("http://localhost:3200/api/add_users", data)
      .then((response) => {
        console.log("here response", response.data.message);

        // history.push("/Table_product");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <div>
        <div className="login-register-form">
          <form>
            <input
              type="text"
              name="user-name"
              placeholder="Nom"
              onChange={(e) => setNom(e.target.value)}
            />
            <input
              type="text"
              name="user-name"
              placeholder="Prenom"
              onChange={(e) => setPrenom(e.target.value)}
            />

            <input
              name="user-email"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="user-password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
              <input
              type="number"
              name="user-password"
              placeholder="Telephone "
              onChange={(e) => setTel(e.target.value)}
            />
            <div className="button-box">
              <button type="button" onClick={onRegister}>
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

// Register.propTypes = {
//   location: PropTypes.object,
// };

export default Register;
