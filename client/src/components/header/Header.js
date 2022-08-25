import React, { useState } from "react";
import "./header.css";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <div className="header-container">
      <h3 className="logo">LIVE-BREAKZ</h3>
      <div className="auth-item-container">
        <Button variant="contained" size="medium">
          <div className="auth-item-wrap">
            <div className="auth-item">Login</div>
            <div className="auth-item">Signup</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
