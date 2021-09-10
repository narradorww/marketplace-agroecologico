import React from 'react';
import styled from 'styled-components';
import LogoPreta from '../../assets/CP-preto.png'
import LogoBranca from '../../assets/CP-branco.png'

const StyledHeader= styled.header`
display:flex;
align-items:center;
justify-content:center;
padding-top: 40px;
padding-bottom:40px;
`;

const Logo=styled.img`
width:100px; height:100px;
`;

const Header = ({versaobranca}) => {
return( 

<div className ='col-12'>
<StyledHeader>
<Logo src={versaobranca ? LogoBranca : LogoPreta} alt="Logo" ClassName="img-fluid" />


</StyledHeader>
</div>
    )

}

export default Header;