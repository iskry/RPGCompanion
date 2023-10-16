import React, { useState } from "react";
import { Button, TextField, Container } from "@mui/material";
import { useSocket, useEmitEvent } from "./useSocket";

export default function MessageSubmission({ messages, setMessages }) {
  const [messageText, setMessageText] = useState("");

  const handleTextChange = (e) => {
    setMessageText(e.target.value);
  };

  const emitMessage = useEmitEvent("chat message");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageText) {
      emitMessage(messageText); // Emits the message to the server
      setMessages([...messages, messageText]); // Immediately updates local state with the new message
      console.log("Message submitted: ", messageText);
      resetInput();
    }
  };

  const resetInput = () => {
    setMessageText("");
  };

  useSocket("chat message", (msg) => {
    setMessages((prevMessages) => [...prevMessages, msg]);
  });

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
