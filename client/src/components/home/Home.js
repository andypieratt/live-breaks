import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Live-Breakz</h1>
      <h4>
        All your needs for sports cards and live breaking of packs and boxes
      </h4>
      <Button variant="contained" size="large">
        Let's Go!
      </Button>
    </div>
  );
}
