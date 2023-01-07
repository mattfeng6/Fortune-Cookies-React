import { useState } from "react";
import axios from "axios";
import img from "../fortune_cookie.jpg";
import {
  Grid,
  CssBaseline,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
} from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { Bar } from "../components/bar";

const bgStyles = {
  backgroundImage: `url(${img})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
};

export function Db() {
  const [fortune, setFortune] = useState([]);

  const getAllFortune = () => {
    axios.get("http://localhost:3001/fortunes").then((response) => {
      setFortune(response.data);
    });
  };

  const [content, setContent] = useState("");

  const addFortune = () => {
    if (content.trim().length === 0) {
      console.log("Input Invalid!");
      return;
    }

    axios
      .post("http://localhost:3001/addFortune", {
        content: content,
      })
      .then(() => {
        setFortune([...fortune, { content: content }]);
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
            <h3>DATABASE</h3>
            <Button style={button} onClick={getAllFortune}>
              get
            </Button>
            <Grid>
              <List
                style={{
                  color: "white",
                  height: 300,
                  overflow: "auto",
                }}
              >
                {fortune.map((val, key) => {
                  return <ListItem>{val.content}</ListItem>;
                })}
              </List>
            </Grid>
            <Button style={button} onClick={addFortune}>
              add
            </Button>
            <Typography></Typography>
            <TextField
              fullWidth
              focused
              label="Content"
              variant="standard"
              sx={{
                input: { color: "white" },
              }}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
          </Typography>
        </Grid>
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
