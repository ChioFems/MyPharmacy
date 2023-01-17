import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Switch, BrowserRouter, Navigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
//import Reports from "./scenes/reports";
import Suppliers from "./scenes/suppliers";
//import Products from "./scenes/products";
import LocationRacks from "./scenes/locationRacks";
//import Purchases from "./scenes/purchases";
//import Orders from "./scenes/orders";
//import Transactions from "./scenes/transactions";
import Team from "./scenes/team";
import AddTeamMemberForm from "./scenes/team/addTeam";
//import Settings from "./scenes/settings";
import Miscellaneous from "./scenes/miscellaneous";
import Calendar from "./scenes/miscellaneous/calendar";
import FAQ from "./scenes/miscellaneous/faq";
import Documentation from "./scenes/miscellaneous/documentation";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
      <main className="content">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/locationRacks" element={<LocationRacks />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/addTeam" element={<AddTeamMemberForm />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          {/* <redirect exact from="/miscellaneous" to="/miscellaneous/calendar" /> */}
          {/* <Route exact path="/miscellaneous/:page?" render={props => <Miscellaneous {...props} />} element={<Miscellaneous />} /> */}
          <Route path="/miscellaneous/calendar" element={<Calendar />} />
          <Route path="/miscellaneous/faq" element={<FAQ />} />
          <Route path="/miscellaneous/documentation" element={<Documentation />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
  </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
