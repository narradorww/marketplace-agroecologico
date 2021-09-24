import React from 'react';
import fig from '../../assets/banana.svg'
import Header from '../../components/header'


const Cadastro =() => {
    return (
    <div className="container-fluid h-100 bg-primary">
        <Header versaobranca semCarrinho />
<div className="row">
<div className="col-6 text-right my-auto"> <img src={fig} alt="Banana" className="img-fluid"/></div> 
     
     <div className="col-6">
         <div className="box col-8">
             <h2 className="text-center">Falta pouco para finalizar sua cesta!</h2>
             <br/>
             <br/>
             <input type="text" className="form-control form-control-lg mb-3" placeholder="Seu nome" />
             <input type="text" className="form-control form-control-lg mb-3" placeholder="Seu telefone" />
             <input type="text" className="form-control form-control-lg mb-3" placeholder="Seu email" />
             <button className="btn btn-lg btn-block btn-secondary">Finalizar Pedido</button>
         </div>
</div>

</div>


    </div>
        )
}


export default Cadastro;