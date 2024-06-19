import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const faqs = [
    {
      question: "What is this website about?",
      answer:
        "This website helps you search for drugs and obtain prior authorizations seamlessly.",
    },
    {
      question: "How do I search for a drug?",
      answer:
        "You can use the search bar on the homepage to find the drug you're looking for.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact us through the 'Contact Us' page accessible from the navigation menu.",
    },
    // Add more FAQs if needed...
  ];

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
              Frequently Asked Questions
            </Typography>
          </Box>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
        <Footer />
      </Box>
    </>
  );
}
