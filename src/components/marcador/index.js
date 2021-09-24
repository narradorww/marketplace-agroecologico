import React from 'react';
import styled from 'styled-components';
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png';
import logo from '../../assets/CP-preto.png'


const MarcadorEstilizado=styled.div`
width: 48px
`;
const IconeEstilizado= styled.img`
    width: 48px;
    position: absolute;
    top: 15px;
    left: 24px;
    border-radius: 100%;
    `;




const Marcador =()=>{
    return(

        <div>
            <img src={MarkerIcon} alt="Marcador Selecionado" />
            <IconeEstilizado src={logo} alt="logodoProdutor"/>

        </div>


    )
}


export default Marcador;    