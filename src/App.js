import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import MessageDisplay from "./components/MessageSubmission";
import Messages from "./components/Messages";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Messages />
      <MessageDisplay />
    </ThemeProvider>
  );
}

export default App;
