import React from "react";
import {
  Button,
  TextField,
  List,
  ListItemText,
  ListItem,
  Box,
  Container,
} from "@mui/material";

export default function Messages({ messages }) {
  return (
    <List>
      {messages.map((message, index) => (
        <ListItem key={index}>
          <ListItemText primary={message} />
        </ListItem>
      ))}
    </List>
  );
}
