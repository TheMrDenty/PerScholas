import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"



function Stock() {
  const apiKey = 'cb9cfe38cc851d29d91a8f0ca06f40e4';
  const params = useParams()
  const symbol = params.symbol;

  const url = `https://financialmodelingprep.com/api/v3/historical-chart/1min/${symbol}?apikey=${apiKey}`
  /* console.log(symbol); */

  const [stock, setStock] = useState('null');
  /* console.log(stock); */
  
  const getStock = async () => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setStock(data);
      /* console.log(data); */
    } catch(e){
      console.error(e)
    }
  };

  useEffect(() => {
    getStock();
    /* console.log(stock); */
  }, []);

  const loaded = () => {
    console.log(stock);
    return (
      <div>
        <h1>
          {symbol}
        </h1>
        <ul>
          <li>current: {stock[0].open}</li>
          <li>high: {stock[0].high}</li>
          <li>low: {stock[0].low}</li>
        </ul>
      </div>
    );
  };
  
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  

  return stock ? loaded() : loading();
}

export default Stock