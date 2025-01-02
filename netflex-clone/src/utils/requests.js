
const API_KEY = Process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending:`/trending/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals:`/discover/tv?api_key =${API_KEY}&with_networks=213`
  
}

export default requests
