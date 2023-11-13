import React from 'react'
import { Box, Typography, Button } from "@mui/material";

function Footer() {
  return (
    <Box display='flex' flexDirection='column'>
        <Typography variant='h3' paddingTop={10} textAlign='center'>
            Ready For Any Team Size
        </Typography>
        <Typography variant='caption' textAlign='center' padding={4}>Optimized For Any Team Size</Typography>
        <Box display='flex' margin='auto' justifyContent='center' padding={5}>
            <Button variant='contained' sx={{mr:2}}>Try CodeEnv For Free</Button>
            <Button variant='outlined' sx={{ml:2}}>Talk To Sales</Button>
        </Box>
    </Box>
  )
}

export default Footer