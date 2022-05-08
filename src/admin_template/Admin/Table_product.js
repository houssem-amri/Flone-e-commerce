import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Banner from '../Banner'
import Modal_delete from "../Super_admin/Modal_delete";
import { useHistory } from "react-router-dom";

export default function Table_product() {
    const [Produit, setProduit] = useState([]);
    const [open, setOpen] = useState(false);
    const [produitSelected, setproduitSelected] = useState({});
    let history = useHistory();

    useEffect(() => {
        getAllProduit();
    }, []);
    const handleClickOpen = (Produit) => {
        setproduitSelected(Produit)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        getAllProduit();
    };


    const getAllProduit = () => {
        axios
            .get("http://localhost:3200/api/get_produit")
            .then((result) => {
                setProduit(result.data.data);
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
                        <h5 className="card-title">tableau des produits</h5>
                        <div className="row">
                            <div className="col-12">
                                <table className="mb-0 table">
                                    <thead>
                                        <tr>
                                            <th>nomProduit</th>
                                            <th>categorie</th>
                                            <th>code</th>
                                            <th>quantite</th>
                                            <th>prix</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Produit.map((value, i) => (
                                            <tr key={i}>
                                                <td>{value.nomProduit}</td>
                                                <td>{value.categorie}</td>
                                                <td>{value.code}</td>
                                                <td>{value.quantite}</td>
                                                <td>{value.prix}</td>
                                                <td>
                                                    <button className="mb-2 mr-2 btn-transition btn btn-outline-info" onClick={() => history.push("/Edit_produit/" + value._id)}>

                                                        <i className="pe-7s-pen" style={{ fontSize: 18 }}></i>
                                                    </button>
                                                    <button
                                                        className="mb-2 mr-2 btn-transition btn btn-outline-danger"
                                                        onClick={() => handleClickOpen(value)}
                                                    >
                                                        <i
                                                            className="pe-7s-trash"
                                                            style={{ fontSize: 18 }}
                                                        ></i>
                                                    </button>


                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {open ? <Modal_delete data={produitSelected} open={open} type="produit" onClose={handleClose} /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

