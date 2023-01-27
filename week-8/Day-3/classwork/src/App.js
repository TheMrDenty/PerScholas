import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";


function App() {

  const apiKey = 'c5f640ff';

  //state to hold movie data
  const [movie, setMovie] = useState(null);

  //function to get movies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // parse JSON response into js object
      const data = await response.json();
      // sets Movie state to the selected movie
      setMovie(data);
    } catch(e){
      console.error(e);
    }
  }

  // This will run on the first render but not on subsequent renders
  useEffect(() => {
    getMovie('Pulp Fiction')
  }, []);

  return (
    <div className="App">
      {/* passing getMovie function as a prop called movieSearch */}
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
