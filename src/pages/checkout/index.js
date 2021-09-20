import React from 'react';
import Header from '../../components/header';
import './style.css';
import Produto from '../../components/produto/lista';




const Checkout =() =>{
    return(

        <div className="h-100">
            <Header/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                    <span className="section-title">Dados de Entrega </span>
                    {/* Primeira Linha Ocupa toda a coluna*/}
                    <div className="row mb-3">
                    <div className="col-12">
                    <input
                     type="text" 
                     placeholder="CEP"
                     className="form-control form-control-lg"
                     />
                     </div>
                     </div>
                      {/* Segunda Linha divide a coluna em 2*/}


                    <div className="row mb-3">
                    <div className="col-6">
                    <input
                     type="text" 
                     placeholder="CIDADE"
                     className="form-control form-control-lg"
                     />
                    </div>
                     
                    <div className="col-6 pl-0">
                    <input
                     type="text" 
                     placeholder="UF"
                     className="form-control form-control-lg"
                     />
                     </div>
                     </div>
                     

                    {/* 3 Linha divide a coluna em 2*/}
                    <div className="row mb-3">
                    <div className="col-8">
                    <input
                     type="text" 
                     placeholder="LOGRADOURO"
                     className="form-control form-control-lg"
                     />
                    </div>
                    
                     
                    <div className="col-4 pl-0">
                    <input
                     type="text" 
                     placeholder="NUMERO"
                     className="form-control form-control-lg"
                     />
                     </div>
                     </div>

                    <span className="section-title">Dados de Pagamento </span>
                    {/* Primeira Linha Ocupa toda a coluna*/}
                    <div className="row mb-3">
                    <div className="col-12">
                    <input
                     type="text" 
                     placeholder="Número do Cartão"
                     className="form-control form-control-lg"
                     />
                     </div>
                     </div>
                      {/* Segunda Linha divide a coluna em 2*/}


                    <div className="row mb-3">
                    <div className="col-6">
                    <input
                     type="text" 
                     placeholder="Validade"
                     className="form-control form-control-lg"
                     />
                    </div>
                     
                    <div className="col-6 pl-0">
                    <input
                     type="text" 
                     placeholder="CVV"
                     className="form-control form-control-lg"
                     />
                     </div>
                     </div>

                     <div Classname="row mt-4">
                         <div className="col-12 d-flex justify-content-between align-items-center">
                             <b>Total</b>
                             <h3>R$30,00</h3>
                         </div>
                     
                     <div className="col-12">
                         <button className="btn btn-block btn-lg btn-primary">
                             Finalizar Compra
                         </button>
                     </div>
                     </div>
                                      
                  
                     
                   
                    </div>

                    <div className="col-6">
                        <div className="box col mb-4 box-sidebar">
                    
                            <h4>Minha Cesta (5)</h4>
                    <div className="row products">
                      {[1,2,3,4,5,6,7,8,9].map((p) =>(<Produto/>))}
                      </div>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
              
               
           

        
        
        
        )


};

export default Checkout;