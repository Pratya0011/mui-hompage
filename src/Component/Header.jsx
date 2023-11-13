import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  Link,
  Typography,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import React from "react";

function Header() {
  const links = ["Products", "Sollution", "Prising", "Enterprise"];
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "none", position:'sticky' }}>
      <Toolbar>
        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <ApiIcon sx={{ color: "black" }} />
          <Box>
            <Tabs component={Link} sx={{ textDecoration: "none" }}>
              {links?.map((link, index) => (
                <Tab
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "5px",
                    },
                  }}
                  key={index}
                  label={link}
                />
              ))}
            </Tabs>
          </Box>
          <Box display="flex" marginLeft="auto">
            <Button sx={{ mr: 2 }} variant="outlined">
              Talk to us
            </Button>
            <Button sx={{ ml: 2 }} variant="contained">
              Try for Free
            </Button>
          </Box>
        </Box>
      </Toolbar>
      <Box width="100%" height="100vh">
        <video
          src="../../video.mp4"
          width="100%"
          height="70%"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <Box display="flex" width="100%">
          <Typography
            margin="auto"
            variant="h4"
            color="black"
            textAlign="center"
          >
            Build Your Software With Hassle Free And With Top Notch Quality
          </Typography>
        </Box>
        <Box width='100%' display='flex' justifyContent='center' margin='auto' marginTop={5}>
            <Button variant='outlined' sx={{mr:3}}>Signup with email</Button>
            <Button variant='contained' sx={{ml:3}}>Signup with google</Button>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;
