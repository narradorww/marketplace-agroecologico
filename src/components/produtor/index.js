import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logoFazendaOuroFino.png'


const ListaEstilizada= styled.li`
display: inline-block;
list-style: none;
padding: 7px;
margin-right: 20px;
border-radius: 5px;
border-bottom: 3px;
`;

const ImgEstilizada= styled.img`
width: 160px;
border-radius:5px;
vertical-align: baseline;

`;

const LojaInfos=styled.div`
margin-left: 10px;
b{
    margin-bottom:0
}
span{
    vertical-align: middle;
    color: #626264;
    }
span.mdi-star{
    color: #facd5d;
}
text{
    font-size: 13px;
    margin-right: 10px;
    vertical-align: middle;
    color: #626264;
}
`;

const Produtor =()=>{
    return (
        <ListaEstilizada>
            <div className="d-inline-block">
            <ImgEstilizada src={logo} className ="img-fluid" alt="Logo da fazenda"/>
            </div>
            <div className="d-inline-block">
            <b>Fazenda Ouro Fino</b>
                    <LojaInfos>
                        <span className="mdi mdi-star"></span>
                        <text>
                            <b>2,8</b>
                        </text>
                        <span className="mdi mdi-cash"></span>
                        <text>$$$</text>
                        <span className="mdi mdi-crosshair-gps"></span>
                        <text>53km</text>
                    </LojaInfos>
                    <label className="badge badge-primary">Frete Grátis</label>

            </div>
                   

        </ListaEstilizada>
       
             )

}

export default Produtor;