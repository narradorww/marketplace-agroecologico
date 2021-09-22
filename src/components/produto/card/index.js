import React from 'react';
import styled from 'styled-components';
import acai from '../../../assets/acaiOuroFino.png'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
    
`;

const StyledImg = styled.img`
display: flex;
max-width: 256px;
    width: 100vh;
`;

const StyledFab= styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-left: 70px;
    margin-top: -15px;
`;

const Produto = () => {
    return (
        <div className="product col-3">
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 256,
          marginBottom: 16,
        },
      }}
    >
            

            <Paper elevation={3} >


                <StyledImg src={acai}  alt="Açai todo dia,  traz mais alegria" />
                   
                <Container> 
                <div> 
                 <h4><label className="badge badge-primary">R$35,00</label></h4>
                 <small>
                <b>Açaí Polpa Pura</b>

                </small>
                </div>
                <StyledFab>
                <Fab  size="large" color="primary" aria-label="add">
                        <AddIcon />
                </Fab>
                </StyledFab>

                </Container>

            </Paper>

        </Box>        
        </div>
    )
}

export default Produto;