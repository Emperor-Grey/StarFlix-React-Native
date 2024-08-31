import Constants from 'expo-constants';

interface ExpoConfigExtra {
  TMDB_API_KEY: string | undefined;
  BASE_URL: string | undefined;
  IMAGE_BASE_URL: string | undefined;
}

const { TMDB_API_KEY, BASE_URL, IMAGE_BASE_URL } =
  (Constants.expoConfig?.extra as ExpoConfigExtra) || {};

console.log('BASE_URL:', BASE_URL);
console.log('API_KEY:', TMDB_API_KEY);

export async function getPopularMovies(page: number) {
  console.log('Fetching popular movies for page:', page);

  try {
    const data = await fetchData(`movie/popular?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error in getPopularMovies:', error);
    throw error;
  }
}

export async function getTopRatedMovies(page: number) {
  console.log('Fetching popular movies for page:', page);

  try {
    const data = await fetchData(`movie/top_rated?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error in getPopularMovies:', error);
    throw error;
  }
}

export async function getUpcomingMovies(page: number) {
  console.log('Fetching popular movies for page:', page);

  try {
    const data = await fetchData(`movie/upcoming?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error in getPopularMovies:', error);
    throw error;
  }
}

export async function getNowPlaying(page: number) {
  console.log('Fetching popular movies for page:', page);

  try {
    const data = await fetchData(`movie/now_playing?page=${page}`);
    return data;
  } catch (error) {
    console.error('Error in getPopularMovies:', error);
    throw error;
  }
}

// Helper function to handle API requests
async function fetchData(endpoint: string) {
  const url = `${BASE_URL}${endpoint}&api_key=${TMDB_API_KEY}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
