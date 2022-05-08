import React, { Fragment, useState } from "react";
import axios from "axios";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Login = ({ location }) => {
  const { pathname } = location;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, seterrorMsg] = useState("");

  const onLoginSubmit = () => {
    let data = {
      email: email,
      password: password,
    };
    console.log("here data ", data);
    axios
      .post("http://localhost:3200/api/login", data)
      .then((response) => {
        const message = response.data.message;
        console.log("here response", response.data.message);
        if (message === "0") {
          seterrorMsg("Invalid Email");
        }
        if (message === "1") {
          seterrorMsg("Invalid Password");
        }
        if (message === "2") {
          localStorage.setItem("current_user", JSON.stringify(response.data));
        }
        // history.push("/Table_product");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <div className="login-form-container">
                      <div className="row">
                        <div className="col-lg-5 col-md-12 ml-auto mr-auto" style={{border:"1px solid black"}} >
                          <img src="assets/login.jpg" alt="login" style={{width:"100%" , height:"100%"}}/>
                        </div>
                        <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                        <div className="login-register-form">
                        <form>
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
                          <div className="button-box">
                            <div className="login-toggle-btn">
                              <input type="checkbox" />
                              <label className="ml-10">Remember me</label>
                              <Link to={process.env.PUBLIC_URL + "/"}>
                                Forgot Password?
                              </Link>
                            </div>
                            <button type="button" onClick={onLoginSubmit}>
                              <span>Login</span>
                            </button>
                          </div>
                        </form>
                      </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Login.propTypes = {
  location: PropTypes.object,
};

export default Login;
