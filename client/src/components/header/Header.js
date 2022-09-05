import React, { useState, useEffect } from "react";
import "./header.css";
import { Button } from "@mui/material";
import { PropTypes } from "prop-types";

const Header = ({ text }) => {
  const [fadeToggle, SetFadeToggle] = useState({
    fade: "fade-in",
  });
  const [textToggle, SetTextToggle] = useState({
    text: "Login",
  });

  useEffect(() => {
    setInterval(() => {
      if (fadeToggle.fade === "fade-in") {
        SetFadeToggle({
          fade: "fade-out",
        });
        // SetTextToggle({
        //   text: "Login",
        // });
      } else {
        SetFadeToggle({
          fade: "fade-in",
        });
        // SetTextToggle({
        //   text: "Login",
        // });
      }
    }, 2000);

    return () => clearInterval();
  }, [fadeToggle]);

  return (
    <div className="header-container">
      <h3 className="logo">LIVE-BREAKZ</h3>
      <div className="auth-item-container">
        <Button variant="contained" size="medium">
          <div className="auth-item-container">
            <div className={fadeToggle.fade}>{textToggle.text}</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

// Header.defaultProps = {
//   text: "Login",
// };

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
