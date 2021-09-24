import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Dock from 'react-dock'
import Button from '@mui/material/Button';
import Produto from '../produto/lista/'

const Rodape= styled.div`
align-items: end;
height: 160 px;

`;

const ValorTotal= styled.div`
display: flex;
justify-content:space-between;
align-items:center;
height:50%;
`;

const RowProdutos= styled.div`
height: calc(100%-190px);
overflow: auto;
align-content: flex-start;


`;






const Sidebar =()=>{
    //Hooks
    const [opened, setOpened] = useState(false)
    useEffect(() => {
        window.addEventListener('openCart', ()=>{
            setOpened(true)
        });
    },[]);


    return(


    <Dock
        isVisible={opened}
        onVisibleChange={(visible)=>{setOpened(visible)}}
        position="right"
        >
    <div className="container-fluid h-100 pt-4 sidebar">
        <h5> Minha Cesta (5)</h5>

      
        <RowProdutos>
                      {[1,2,3,4,5, 6,7,8,9].map((p) =>(<Produto/>))}
        </RowProdutos>
        <Rodape className="row footer"> 
            <ValorTotal className="col-12">
                <b>Total</b>
                <h3>R$90</h3>
            </ValorTotal>
            <Button  variant="contained">Finalizar Pedido</Button>
        </Rodape>
        
        
        
    </div>

        
    


    </Dock>

    )


}


export default Sidebar;