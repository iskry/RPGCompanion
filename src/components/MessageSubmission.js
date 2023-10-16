import React from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  Box,
  Container,
} from "@mui/material";

export default function MessageSubmission({ messages, setMessages }) {
  const [messageText, setMessageText] = React.useState("");

  const handleTextChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, messageText]);
    console.log("Message submitted: ", messageText);
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
          value={messageText}
          onChange={handleTextChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
}
