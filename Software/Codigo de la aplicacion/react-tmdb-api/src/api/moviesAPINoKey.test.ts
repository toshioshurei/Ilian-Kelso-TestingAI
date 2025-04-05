import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getTopMovies, getMovieDetails, getSimilarMovies } from "./moviesAPINoKey";

const mock = new MockAdapter(axios);
const BASE_URL = "https://api.themoviedb.org/3/movie"; // Suponiendo que este es el valor de BASE_MOVIES_SECTION_URL

describe("moviesAPI", () => {
  afterEach(() => {
    mock.reset();
  });

  test("getTopMovies should fetch top-rated movies", async () => {
    const mockData = {
      page: 1,
      results: [{ id: 1, title: "Inception" }]
    };

    mock.onGet().reply((config) => {
      expect(config.url).toContain("/top_rated");
      return [200, mockData];
    });

    const response = await getTopMovies({ pageParam: 1 });
    expect(response).toEqual(mockData);
  });

  test("getMovieDetails should fetch movie details", async () => {
    const mockMovie = { id: 42, title: "The Matrix" };

    mock.onGet().reply((config) => {
      expect(config.url).toContain("/42");
      return [200, mockMovie];
    });

    const response = await getMovieDetails({ id: 42 });
    expect(response).toEqual(mockMovie);
  });

  test("getSimilarMovies should fetch similar movies", async () => {
    const mockSimilar = { results: [{ id: 2, title: "Interstellar" }] };

    mock.onGet().reply((config) => {
      expect(config.url).toContain("/42/similar");
      return [200, mockSimilar];
    });

    const response = await getSimilarMovies({ id: 42 });
    expect(response).toEqual(mockSimilar.results);
  });
});

