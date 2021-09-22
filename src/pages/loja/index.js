import React from 'react';
import './style.css';
import Header from '../../components/header';
import Produto from '../../components/produto/card/index';
import logo from '../../assets/logoFazendaOuroFino.png'


const Loja =()=>{
return(
    <div className="h-100">
        <Header/>
        <div className="container">
            <div className="row">
                {/*Divide a tela em duas colunas 2/10=12*/}
                <div className="col-2">
                    <img src={logo} className ="img-fluid" alt="Logo da fazenda"/>
                    <b>Fazenda Ouro Fino</b>
                    <div className="loja-infos">
                        <span className="mdi mdi-star"></span>
                        <text>
                            <b>2,8</b>
                        </text>
                        <span className="mdi mdi-cash"></span>
                        <text>$$$</text>
                        <span className="mdi mdi-crosshair-gps"></span>
                        <text>53km</text>
                    </div>
                    <label className="badge badge-primary">Frete Grátis</label>
                </div>
                <div className="col-10">
                <h5>Produtos</h5>
                <div className="row">
                   
                {[1,2,3,4,5,6,7,8,9,].map((p)=><Produto/>)}
                
                
               

                </div>
                </div>
               
            </div>
        </div>
    </div>
)

}

export default Loja;