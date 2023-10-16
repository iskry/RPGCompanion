import React from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  Box,
  Container,
} from "@mui/material";

export default function MessageSubmission() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Message"
          autoComplete="off"
          style={{ marginRight: "10px" }}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
}
