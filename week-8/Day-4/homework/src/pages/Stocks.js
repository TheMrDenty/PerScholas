import React from 'react'
import { Link } from 'react-router-dom';
import stocks from '../data'
 
function Stocks(props) {
    
  return (
    <div>
        {stocks.map((stock, idx) => {
            props = {stock};
            /* console.log(stock); */
            return (
                <Link 
                    key={idx}
                    props={props}
                    to={`/stocks/${stock.symbol}`}
                >
                    <div>
                        <p>{stock.name}</p>
                        
                    </div>
                </Link>
            )
        })}
        
    </div>
  )
}

export default Stocks