import { CssBaseline, Typography, Grid, Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import React, { useState } from "react";
import img from "../fortune_cookie.jpg";

import { Bar } from "../components/bar";

const bgStyles = {
  backgroundImage: `url(${img})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
};

export function Home() {
  const [fortune, setFortune] = useState([]);

  const getOneFortune = () => {
    axios.get(`http://localhost:3001/fortune/random`).then((response) => {
      setFortune(response.data);
    });
  };

  return (
    <>
      <Grid style={bgStyles}>
        <CssBaseline />
        <Routes>
          <Route index element={<Bar />} />
        </Routes>

        <Grid padding="5%">
          <Typography style={typography}>
            <motion.h5
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              CLICK
            </motion.h5>
            <motion.h5>to open your today's fortune :)</motion.h5>
            <Button style={button} onClick={getOneFortune}>
              get
            </Button>
            <Grid>
              {fortune.map((val, key) => {
                return (
                  <div style={{ color: "white" }}>
                    <motion.h2 drag>{val.content}</motion.h2>
                  </div>
                );
              })}
            </Grid>
          </Typography>
        </Grid>
        <Grid></Grid>
      </Grid>
    </>
  );
}

const button = {
  size: "small",
  color: "white",
  fontFamily: "Segoe UI",
  fontWeight: "bold",
};

const typography = {
  color: "white",
  textAlignVertical: "center",
  textAlign: "center",
  fontFamily: "Segoe UI",
};
