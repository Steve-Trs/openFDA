import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@mui/material";

export default function ContactUs() {
  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ marginTop: 8, marginBottom: 8 }}>
        <Box mb={4} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            We'd love to hear from you! Please fill out the form below and we'll
            get in touch with you shortly.
          </Typography>
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="First Name"
                variant="outlined"
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                variant="outlined"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="subject"
                label="Subject"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: "150px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
