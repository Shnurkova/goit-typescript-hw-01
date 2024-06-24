import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// type Options = {
//   headers: {
//     accept: string;
//     Authorization: string;
//   };
//   params: {
//     page: number;
//     include_adult: boolean;
//     language: string;
//   };
// };

// async function fetchData<T>(url: string, options: Options): Promise<T> {
//   try {
//     const response = await axios.get<T>(url, options);
//     return response.data;
//   } catch (error: any) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

// axios.defaults.baseURL = "https://api.themoviedb.org/";
// const url = "3/trending/movie/day";
// const options = {
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjA2N2JlZTRlZjVmYjkyNDU5YzI4N2I3ZWViMjk4NCIsInN1YiI6IjY2NGNjZjNhN2FjM2ZhYTU3ZDc5ZDVmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2V5SwOAzu0ocVDqlFYlY-woJNA-hZKH_n5hV7hDqw-s",
//   },
//   params: {
//     page: 1,
//     include_adult: false,
//     language: "en-US",
//   },
// };

// const data = await fetchData<{}>(url, options);
// console.log(data);