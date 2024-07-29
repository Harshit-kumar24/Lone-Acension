import { Box, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import react from 'react';
import { ErrorOutline } from '@mui/icons-material';


export const Welcome: React.FC = () =>{
    return(
        <Box
        sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',   
        }}
    >
        <Container
            sx={{
                backgroundColor: '#2070C8',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                fontFamily: 'Poppins,sans-serif',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30vh',
                width: '30%'
            }}
        >
           <h1><ErrorOutlineIcon/> Alert</h1>
           <p>Welcome player</p>
        </Container>
    </Box>
    )
};