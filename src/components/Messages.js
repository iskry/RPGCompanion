import React from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  Box,
  Container,
} from "@mui/material";

export default function Messages() {
  return (
    <Container>
      <Box component="div" marginBottom={2}>
        <List>
          {/* Messages will go here as ListItems */}
          <ListItem>Sample Message</ListItem>
        </List>
      </Box>
    </Container>
  );
}
