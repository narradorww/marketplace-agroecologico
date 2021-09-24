import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Marcador from '../marcador/index'



const ContainerMap=styled.div`
    height: 100%

`;

const Map = () => { 

    return (
        <ContainerMap>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
                center={{
                    lat:-23.1161543,
                    lng: -46.5500592,
                }}
                defaultZoom={15}>

         <Marcador lat={-23.1161543} lng={-46.5500592} />
                        
            </GoogleMapReact>
      </ContainerMap>
       
      
    );
};

export default Map;