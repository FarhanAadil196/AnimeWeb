const apiKey = '142116bc';
const url = `http://www.omdbapi.com/?apikey=${apiKey}}`;

export const getPopularMovies = async () => {
    const response = await fetch(`${url}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
};

export const searchMovie = async (query) => {
    const response = await fetch(`$(url)/search/movie?api_key=$(apiKey)&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;

}