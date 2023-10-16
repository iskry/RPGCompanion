import React, { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import MessageDisplay from "./components/MessageSubmission";
import Messages from "./components/Messages";

const theme = createTheme();

function App() {
  const [messages, setMessages] = useState(["Sample Message"]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Messages messages={messages} />
      <MessageDisplay messages={messages} setMessages={setMessages} />
    </ThemeProvider>
  );
}

export default App;
