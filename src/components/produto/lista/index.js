import React from 'react';
import styled from 'styled-components';
import acai from '../../../assets/acaiOuroFino.png'
import './style.css'
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';


const ProdutoEstilizado= styled.div`
display: flex;
margin-top:20px;
`;

const DescricaoEstilizada= styled.div`
flex-direction: column;
margin-left:20px;
margin-right:40px;

`;


const Produto =() => {
    return(
        <div className="product-list col-12">
            <ProdutoEstilizado>
                <div className="col-3">
                    <img src={acai} className="img-fluid" alt="sementes de açaí" />
                </div>
                <DescricaoEstilizada>
                    <h6><label className="badge badge-primary">R$35,00</label></h6>
                <small>
                    <b>Nome do Produto</b> 
                </small>
                </DescricaoEstilizada>
                <Fab size="small" color="secondary"  aria-label="remove" ><RemoveIcon/></Fab>
                             
            </ProdutoEstilizado>

        </div>



    )

}

export default Produto