import React, { useContext } from "react";
import { CryptoContext } from "../Context/CryptoContext";
import { Link } from "react-router-dom";
function Home({ search, getCryptoName }) {
  const context = useContext(CryptoContext);
  return (
    <div className="container">
      <h1 className="text-center mt-4">Cryptos Mryptos</h1>
      <div className="row">
        <form>
          <div className="col-md-12 w-50 text-center mx-auto mt-5">
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={getCryptoName}
            />
          </div>
        </form>
      </div>
      <div className="row">
        {context.cryptos
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
            return false;
          })
          .map((val) => (
            <div className="col-6 col-md-4 mt-5" key={val.id}>
              <div className="card text-center">
                <div
                  className="mx-auto w-50 mt-5 mb-5"
                  style={{ width: "244px", height: "150px" }}
                >
                  <img src={val.image} className="card-img-top" alt={val.id} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Current Price : {val.current_price}
                  </h5>
                  <p className="card-text">Name : {val.name}</p>
                  <p className="card-text">Rank : {val.market_cap_rank}</p>
                  <p className="card-text">Total : {val.total_volume}</p>
                  {/* <p className="card-text">Last Updated : {val.last_updated}</p>
                  <p className="card-text">
                    Price Change Percentage - 24h :{" "}
                    {val.price_change_percentage_24h}
                  </p> */}
                  <Link to={val.id} className="btn btn-warning">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
