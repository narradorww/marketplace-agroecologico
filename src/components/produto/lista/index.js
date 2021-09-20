import React from 'react';
import styled from 'styled-components';
import acai from '../../../assets/acaiOuroFino.png'
import './style.css'


const Produto =() => {
    return(
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src={acai} className="img-fluid" alt="sementes de açaí" />
                </div>
                <div className="col-6">
                    <h6><label className="badge badge-primaryS">R$35,00</label></h6>
                <small>
                    <b>Nome do Produto</b>
                </small>
                </div>
                
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle">-</button>
                </div>
            </div>

        </div>



    )

}

export default Produto