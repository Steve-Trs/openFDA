import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 100px)",
        }}
      >
        <Container
          maxWidth="md"
          sx={{ flex: 1, marginTop: 8, marginBottom: 8 }}
        >
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="body1" paragraph>
              Welcome to our website! We are dedicated to providing you with the
              best service and information about drugs and prior authorizations.
              Our mission is to make the process of searching for drugs and
              obtaining prior authorizations as seamless and straightforward as
              possible.
            </Typography>
            <Typography variant="body1" paragraph>
              Our team is made up of experienced professionals who are
              passionate about healthcare and technology. We believe in
              leveraging the power of modern technology to improve healthcare
              outcomes and enhance the patient experience.
            </Typography>
            <Typography variant="body1" paragraph>
              Stay tuned for more updates as we continue to develop and improve
              our platform. Thank you for visiting our site!
            </Typography>
          </Box>
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "200px" }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
