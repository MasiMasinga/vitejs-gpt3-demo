import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [text, setText] = useState([]);

  const handleText = () => {
    axios
      .post("http://localhost:5000/api", { body: text })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImage = () => {
    axios
      .post("http://localhost:5000/image", { body: text })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Box>
        <TextField
          multiline
          rows={4}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Box>
      <Stack>
        <Stack justifyContent='center' direction="row" spacing={2} sx={{p: 5}}>
          <Button onClick={handleText} variant="contained" size="large">
            Generate Text
          </Button>
          <Button onClick={handleImage} variant="contained" size="large">
            Generate Image
          </Button>
        </Stack>
      </Stack>

      <div className="card">
        <Typography>
          Your response :{" "}
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
            {data}
          </Typography>
        </Typography>
      </div>
    </div>
  );
}

export default App;
