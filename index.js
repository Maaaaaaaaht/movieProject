const movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };
  
  // An array of movie's title
  const movieTitleArray = Object.keys(movieData);
  
  // Display movies initially 
  const initMovies = () => {
    movieTitleArray.forEach((item, index) => {
      const container = document.createElement("div");
      container.setAttribute("id", "movie");
      document.getElementById("movies").appendChild(container);
  
      const title = document.createElement("h2");
      title.classList.add("title");
      title.innerHTML = movieTitleArray[index];
      container.appendChild(title);
  
      const rating = document.createElement("p");
      rating.classList.add("rating");
      rating.innerHTML = "Rating: " + movieData[item].rating;
      container.appendChild(rating);
  
      const runtime = document.createElement("p");
      runtime.classList.add("runtime");
      runtime.innerHTML = "Runtime: " + movieData[item].runtime + " mins";
      container.appendChild(runtime);
  
      const plot = document.createElement("p");
      plot.classList.add("plot");
      plot.innerHTML = "Plot: " + movieData[item].plot;
      container.appendChild(plot);
  
      const cast = document.createElement("p");
      cast.classList.add("cast");
      cast.innerHTML = "Cast: " + movieData[item].cast;
      container.appendChild(cast);
  
      const year = document.createElement("p");
      year.classList.add("year");
      year.innerHTML = "Year: " + movieData[item].year;
      container.appendChild(year);
    });
  };
  initMovies();
  
  // Display sorted movies
  const displayMovies = (movies) => {
    const movieTitleArray = Object.keys(movieData);
  
    movieTitleArray.forEach((movie, index) => {
      document.getElementsByClassName("title")[index].innerHTML = movies[index];
      const sortedMovieData = movies[index];
      document.getElementsByClassName("rating")[index].innerHTML =
        "Rating: " + movieData[sortedMovieData].rating;
      document.getElementsByClassName("runtime")[index].innerHTML =
        "Runtime: " + movieData[sortedMovieData].runtime;
      document.getElementsByClassName("plot")[index].innerHTML =
        "Plot: " + movieData[sortedMovieData].plot;
      document.getElementsByClassName("cast")[index].innerHTML =
        "Cast: " + movieData[sortedMovieData].cast;
      document.getElementsByClassName("year")[index].innerHTML =
        "Year: " + movieData[sortedMovieData].year;
    });
  };
  
  // Display a new movie
  const displayNewMovie = (movieData) => {
    const newMovieTitle = Object.keys(movieData).pop();
    const newMovieInfo =
      movieData[Object.keys(movieData)[Object.keys(movieData).length - 1]];
    const container = document.createElement("div");
    container.setAttribute("id", "movie");
    document.getElementById("movies").appendChild(container);
  
    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = newMovieTitle;
    container.appendChild(title);
  
    const rating = document.createElement("p");
    rating.classList.add("rating");
    rating.innerHTML = "Rating: " + newMovieInfo.rating;
    container.appendChild(rating);
  
    const runtime = document.createElement("p");
    runtime.classList.add("runtime");
    runtime.innerHTML = "Runtime: " + newMovieInfo.runtime + " mins";
    container.appendChild(runtime);
  
    const plot = document.createElement("p");
    plot.classList.add("plot");
    plot.innerHTML = "Plot: " + newMovieInfo.plot;
    container.appendChild(plot);
  
    const cast = document.createElement("p");
    cast.classList.add("cast");
    cast.innerHTML = "Cast: " + newMovieInfo.cast;
    container.appendChild(cast);
  
    const year = document.createElement("p");
    year.classList.add("year");
    year.innerHTML = "Year: " + newMovieInfo.year;
    container.appendChild(year);
  };
  
  // Shuffle the order of movies
  const shuffleMovies = () => {
    const movieTitleArray = Object.keys(movieData);
  
    const sortedMovies = movieTitleArray.map((movie) => movie);
    for (var i = sortedMovies.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = sortedMovies[i];
      sortedMovies[i] = sortedMovies[j];
      sortedMovies[j] = temp;
    }
    displayMovies(sortedMovies);
  };
  
  const newMovieData = {};
  // Add a new movie to movieData
  const addNewMovie = () => {
    let titleInput = document.getElementById("title").value;
  
    let ratingInput = document.getElementById("rating").value;
  
    let runtimeInput = document.getElementById("runtime").value;
    let plotInput = document.getElementById("plot").value;
    let castInput = document.getElementById("cast").value;
    let yearInput = document.getElementById("year").value;
  
    const childNewMovieData = {};
    childNewMovieData.rating = ratingInput;
    childNewMovieData.runtime = runtimeInput;
    childNewMovieData.plot = plotInput;
    childNewMovieData.cast = castInput;
    childNewMovieData.year = yearInput;
    newMovieData[titleInput] = childNewMovieData;
  
    movieData[titleInput] = childNewMovieData;
    displayNewMovie(movieData);
  };