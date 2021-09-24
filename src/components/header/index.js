import React from 'react';
import styled from 'styled-components';
import LogoPreta from '../../assets/CP-preto.png'
import LogoBranca from '../../assets/CP-branco.png'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const StyledHeader= styled.header`
display:flex;
align-items:center;
justify-content:space-between;
padding-top: 40px;
padding-bottom:40px;
margin: 0 128px;
`;

const Logo=styled.img`
width:100px; height:100px;
`;

const Void=styled.div`
width:100px; height:100px;
`;






const Header = ({versaobranca, semCarrinho}) => {
const abreSidebar=()=>{
const event = new CustomEvent('openCart');
window.dispatchEvent(event)
}

return( 

<div className ='col-12'>
<StyledHeader>
<Void></Void> 
<Link to="/"> 
<Logo src={versaobranca ? LogoBranca : LogoPreta} alt="Logo" ClassName="img-fluid" />
</Link> 
{!semCarrinho &&(
<Button 
     className="cartButton"
     onClick={()=>abreSidebar()}
      variant="contained"><ShoppingCartIcon/> 2 Itens </Button>

)}
</StyledHeader>
</div>
    )

}

export default Header;