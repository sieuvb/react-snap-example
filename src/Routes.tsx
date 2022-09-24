import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Othergames from "./Othergames";
import Opening from "./content/Opening";

import Opa from "./content/Opa";

import Opb from "./content/Opb";
import Opba from "./content/Opba";
import Opbb from "./content/Opbb";

import Opc from "./content/Opc";
import Opca from "./content/Opca";
import Opcb from "./content/Opcb";

import Enda from "./content/Enda";
import Endb from "./content/Endb";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/othergames">
        <Othergames />
      </Route>
      <Route exact path="/opening">
        <Opening />
      </Route>

      <Route exact path="/opa">
        <Opa />
      </Route>
      <Route exact path="/opb">
        <Opb />
      </Route>
      <Route exact path="/opba">
        <Opba />
      </Route>
      <Route exact path="/opbb">
        <Opbb />
      </Route>

      <Route exact path="/opc">
        <Opc />
      </Route>
      <Route exact path="/opca">
        <Opca />
      </Route>
      <Route exact path="/opcb">
        <Opcb />
      </Route>

      <Route exact path="/enda">
        <Enda />
      </Route>
      <Route exact path="/endb">
        <Endb />
      </Route>
    </Switch>
  );
}
