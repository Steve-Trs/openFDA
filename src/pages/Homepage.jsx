import React from "react";
import NavBar from "../component/NavBar";
import SearchBar from "../component/SearchBar";
import Footer from "../component/Footer";
import "../styles/HomePage.css";
import pharmacist from "../assets/pharmacist.jpg";
import { Card, CardMedia } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <h1>Seamlessly search for drugs and get prior authorization</h1>
      <div className="hidden">
        <SearchBar />
      </div>
      <div className="card">
        <Card>
          <CardMedia
            component="img"
            image={pharmacist}
            alt="pharmacist"
            sx={{ maxHeight: 400, objectFit: "cover" }}
          />
        </Card>
      </div>
      <div className="option">
        <div className="opt-num">1</div>
        <div className="content">
          <h2>Drug Search</h2>
          <p>
            Perform quick and accurate searches for a wide range of medications
            using our advanced drug search feature. Whether you are looking for
            brand names or generic alternatives, our platform ensures you find
            the information you need seamlessly.
          </p>
          <button>Start searching</button>
        </div>
      </div>
      <div className="option">
        <div className="opt-num">2</div>
        <div className="content">
          <h2>Prior Authorization</h2>
          <p>
            Streamline the prior authorization process with our integrated
            platform. Submit requests efficiently, track approvals, and ensure
            timely patient care without the administrative hassles.
          </p>
          <button>Begin process</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
