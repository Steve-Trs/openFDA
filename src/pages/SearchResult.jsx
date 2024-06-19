import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../component/NavBar";
import SearchBar from "../component/SearchBar";
import { NavLink } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const termSearched = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [drugs, setDrugs] = useState({});
  const [limitPerPage, setLimitPerPage] = useState(10);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDrugsBySearchTerm() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.fda.gov/drug/ndc.json?search=brand_name:*${termSearched}*+OR+generic_name:*${termSearched}*&limit=${limitPerPage}&skip=${start}`
        );
        const drugs = response.data;
        setResults(drugs.results);
        setDrugs(drugs);
      } catch (error) {
        console.error("Error fetching data results:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }
    getDrugsBySearchTerm();
  }, [termSearched, limitPerPage, start]);

  const handlePagination = (page) => {
    setStart(page * limitPerPage);
  };

  return (
    <>
      <NavBar />
      <Box mb={4} textAlign="center" marginTop={5}>
        <Typography variant="h4" gutterBottom>
          Drug Search Results
        </Typography>
      </Box>
      <div className="hidden">
        <SearchBar />
      </div>
      <Container
        maxWidth="md"
        sx={{
          padding: 4,
          marginBottom: 4,
        }}
      >
        {loading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : results.length > 0 ? (
          <>
            <Grid container spacing={3}>
              {results.map((result, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <NavLink
                    to={"/drug/" + result.spl_id}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      sx={{
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: 2,
                        backgroundColor: "#f8f8f8",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          {result.brand_name}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {result.generic_name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </NavLink>
                </Grid>
              ))}
            </Grid>
            <Box mt={4} textAlign="right">
              <Typography variant="h6" component="p">
                Total: {drugs.meta.results.total}
              </Typography>
              <Select
                value={start / limitPerPage}
                onChange={(e) => handlePagination(e.target.value)}
                sx={{ marginTop: 2 }}
              >
                {Array(Math.ceil(drugs.meta.results.total / limitPerPage))
                  .fill(0)
                  .map((_, i) => (
                    <MenuItem key={i} value={i}>
                      Page {i + 1}
                    </MenuItem>
                  ))}
              </Select>
            </Box>
          </>
        ) : (
          <Box mt={4} textAlign="center">
            <Typography variant="h6" component="p" color="error">
              Sorry, no results found...
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
}
