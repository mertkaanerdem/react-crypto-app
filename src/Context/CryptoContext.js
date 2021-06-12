import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CryptoContext = createContext();

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function CryptoProvider(props) {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCryptos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptos, setCryptos }}>
      {props.children}
    </CryptoContext.Provider>
  );
}

export default CryptoProvider;
