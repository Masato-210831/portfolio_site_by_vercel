import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import "sanitize.css";
import Home from "./pages/Home";
import WorkDetail_1 from "./pages/WorkDetail_1";
import WorkDetail_2 from "./pages/WorkDetail_2";
import WorkDetail_3 from "./pages/WorkDetail_3";
import WorkDetail_4 from "./pages/WorkDetail_4";
import WorkAppDetail_1 from "./pages/WorkAppDetail_1";
import { NavItemsProvider } from "./context/NavContext";




const theme = createTheme({
  typography: {
    fontFamily: [
      '"Hiragino Kaku Gothic ProN"',
      '"Helvetica Neue"',
      "Arial",
      "Meiryo",
      "sans-serif",
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App = () => {


  return (
    <>
      <ThemeProvider theme={theme}>
        <NavItemsProvider>
          <BrowserRouter>
          {/* <BrowserRouter> */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              {/* <Route path="/details_1" element={<WorkDetail_1/>}></Route> */}
              <Route path="/details_2" element={<WorkDetail_2/>}></Route>
              <Route path="/details_3" element={<WorkDetail_3/>}></Route>
              <Route path="/details_4" element={<WorkDetail_4/>}></Route>
              <Route path="/appdetails_1" element={<WorkAppDetail_1/>}></Route>
              <Route path="*" element={<h1>Not Found</h1>}></Route>
            </Routes>
          </BrowserRouter>
        </NavItemsProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
