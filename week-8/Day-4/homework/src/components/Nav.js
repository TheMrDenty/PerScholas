import React from 'react'
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>STOCK PRICES</div>
      </Link>
      <Link to="/stocks">
        <div>ALL STOCKS</div>
      </Link>
      <Link to="/about">
        <div>ABOUT</div>
      </Link>
    </div>
  )
}

export default Nav