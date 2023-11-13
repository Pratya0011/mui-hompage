import React from "react";
import { Box, Typography } from "@mui/material";

function ContentItems({ title, description, img, swap }) {
  return (
    <Box padding={10} justifyContent="spaceBetween" alignItems="center" display='flex' bgcolor={!swap && '#fff'}>
     {swap ? (
        <>
         <Box>
        <Typography color="#734950" padding={3} variant="h3">
          {title}
        </Typography>
        <Typography variant="h6" padding={3}>
          {description}
        </Typography>
      </Box>
      <img
        src={img}
        alt={title}
        loading="lazy"
        width="50%"
        style={{ boxShadow: "10px 10px 20px #ccc",marginLeft:'10%', borderRadius: 20 }}
        height='300px'
      />
        </>
     ): <>
     <img
        src={img}
        alt={title}
        loading="lazy"
        width="50%"
        style={{ boxShadow: "10px 10px 20px #ccc",marginRight:'10%', borderRadius: 20 }}
        height='300px'
        
      />
     <Box>
        <Typography color="#734950" padding={3} variant="h3">
          {title}
        </Typography>
        <Typography variant="h6" padding={3}>
          {description}
        </Typography>
      </Box>
     </>}
    </Box>
  );
}

export default ContentItems;
