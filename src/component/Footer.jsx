import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
export default function Footer() {
  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#ececec",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Container maxWidth="md">
            <Typography variant="body1" color="textPrimary" align="center">
              © {new Date().getFullYear()} Brand Name. All rights reserved.
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
