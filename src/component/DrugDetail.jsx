import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

export default function DrugDetail() {
  const [drug, setDrug] = useState({});
  const [loading, setLoading] = useState(true);
  let { drug_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDrug() {
      try {
        const response = await axios.get(
          `https://api.fda.gov/drug/label.json?search=id:${drug_id}`
        );
        const drug = response.data.results[0];
        setDrug(drug);
      } catch (error) {
        console.error("Error fetching drug data:", error);
        setDrug({});
      } finally {
        setLoading(false);
      }
    }
    fetchDrug();
  }, [drug_id]);

  if (loading) {
    return (
      <Container
        maxWidth="md"
        style={{ textAlign: "center", paddingTop: "20px" }}
      >
        <CircularProgress />
        <Typography variant="h6" style={{ marginTop: "10px" }}>
          Loading...
        </Typography>
      </Container>
    );
  }

  if (!drug || !drug.openfda) {
    return (
      <Container
        maxWidth="md"
        style={{ textAlign: "center", paddingTop: "20px" }}
      >
        <Typography variant="h6" color="error">
          Drug data not available.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Return
        </Button>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <Box
        mb={4}
        textAlign="center"
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          padding: 3,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {drug.openfda.brand_name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <b>Generic Name:</b> {drug.openfda.generic_name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <b> Manufacturer:</b> {drug.openfda.manufacturer_name}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Indications:
          </Typography>
          <Typography variant="body1">
            {drug.indications_and_usage || "N/A"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Dosage and Administration:
          </Typography>
          <Typography variant="body1">
            {drug.dosage_and_administration || "N/A"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Contraindications:
          </Typography>
          <Typography variant="body1">
            {drug.contraindications || "N/A"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Warnings and Precautions:
          </Typography>
          <Typography variant="body1">
            {drug.warnings_and_precautions || "N/A"}
          </Typography>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Return
        </Button>
      </Box>
    </Container>
  );
}
