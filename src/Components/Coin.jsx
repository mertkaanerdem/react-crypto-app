import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CryptoContext } from "../Context/CryptoContext";

function Coin() {
  const { id } = useParams();
  console.log(id);
  const context = useContext(CryptoContext);
  const filter = context.cryptos.filter((item) => item.id === id);
  return (
    <div className="container text-center">
      <h1 className="text-center mt-4">Cryptos Mryptos</h1>

      <div className="row offset-4">
        <div className="col-6 mt-5">
          {filter.map((item) => (
            <div className="card" key={item.id}>
              <div
                className="mx-auto"
                style={{ width: "244px", height: "244px" }}
              >
                <img src={item.image} className="card-img-top" alt={item.id} />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Current Price : {item.current_price}
                </h5>
                <p className="card-text">Name : {item.name}</p>
                <p className="card-text">Rank : {item.market_cap_rank}</p>
                <p className="card-text">Total : {item.total_volume}</p>
                {/* <p className="card-text">Last Updated : {item.last_updated}</p>
                <p className="card-text">
                  Price Change Percentage - 24h :{" "}
                  {item.price_change_percentage_24h}
                </p> */}
              </div>
              <Link to="/" className="btn btn-warning">
                Home
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coin;
