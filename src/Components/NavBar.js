import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function NavBar(props) {
  const { setCategory } = props;
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    setCategory(searchText);
  };

  return (
    <nav className="z-2 position-sticky w-100 navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <h2>News Man</h2></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <button type="button" onClick={() => { setCategory("Rockets") }} className="btn btn-primary m-2">Rockets</button>
            <button type="button" onClick={() => { setCategory("India") }} className="btn btn-secondary m-2">India</button>
            <button type="button" onClick={() => { setCategory("usa") }} className="btn btn-success m-2">USA</button>
            <button type="button" onClick={() => { setCategory("cryptocurrency") }} className="btn btn-danger m-2">CryptoCurrency</button>
            <button type="button" onClick={() => { setCategory("moon") }} className="btn btn-warning m-2">Moon</button>
            <button type="button" onClick={() => { setCategory("moon") }} className="btn btn-danger m-2">NEET</button>
            <button type="button" onClick={() => { setCategory("chandrayaan") }} className="btn btn-success m-2">Chandrayaan</button>
            <button type="button" onClick={() => { setCategory("Technology") }} className="btn btn-secondary m-2">Technology</button>
            <button type="button" onClick={() => { setCategory("Stocks") }} className="btn btn-primary m-2">Stocks</button>
          </div>
          <div className="d-flex ms-auto m-2">
            <input
              type="text"
              className="form-control"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for news"
            />
            <button type="button" onClick={handleSearch} className="btn btn-info ms-2">Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
