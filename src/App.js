import React from "react";
import Home from "./Components/Home";
import Coin from "./Components/Coin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CryptoProvider from "./Context/CryptoContext";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const getCryptoName = (e) => {
    setSearch(e.target.value);
  };

  return (
    <CryptoProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home search={search} getCryptoName={getCryptoName} />
            </Route>
            <Route path="/:id" component={Coin} />
          </Switch>
        </div>
      </BrowserRouter>
    </CryptoProvider>
  );
}

export default App;
