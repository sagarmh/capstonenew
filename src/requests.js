const API_KEY = "b8147d9a2b320232dcbd7689528ce05a";

const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=1&sort_by=created_at.asc` ,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1&sort_by=created_at.asc`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1&sort_by=created_at.asc` ,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1&sort_by=created_at.asc`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US&page=1&sort_by=created_at.asc` ,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US&page=1&sort_by=created_at.asc`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US&page=1&sort_by=created_at.asc` ,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US&page=1&sort_by=created_at.asc`,
}
export default requests;