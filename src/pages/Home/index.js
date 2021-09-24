import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header'
import Produtor from '../../components/produtor';
import Map from '../../components/map';

const ListContainer= styled.div`
height:500px;
position:absolute;
margin-top: 20px;
z-index: 999;
left: 0;
right: 0;
margin-bottom: 0;
background: Linear-gradient(
    180deg,
    #ffffff 55.74%,
    rgba(255,255,255,0) 100%
);

`;

const UlEstilizada=styled.ul`
padding: 15px;
white-space: nowrap;
overflow-x: auto;
width: 100%;
margin-top:15px;
`;


const Home =()=>{
return(

    
    <div className="h-100">
        <Header/>
        <ListContainer>
           
            <div className="col-12 px-4 text-center">
            <h5>Mais próximos de você(5)</h5>
            </div>
            
            <UlEstilizada>
            
            {[1,2,3,4,5, 6,7,8,9].map((p) =><Produtor/>)}

            </UlEstilizada>
            <Map />
           


        </ListContainer>




    </div>
    )

}

export default Home;