import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Navbar />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
