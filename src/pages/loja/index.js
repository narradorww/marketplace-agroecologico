import React from 'react';
import Header from '../../components/header';
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

                </div>
                <div className="col-10"></div>
            </div>
        </div>
    </div>
)

}

export default Loja;