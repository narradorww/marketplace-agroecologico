import React from 'react';
import styled from 'styled-components';


const Produto =() => {
    return(
        <div className="col-12">
            <div className="row">
                <div className="col-3">
                    <img src={} className="img-fluid" />
                </div>
                <div className="col-6">
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