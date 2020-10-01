import axios from "axios";

const clientConfig = {
  baseURL: "http://localhost:8000/",
  timeout: 1000,
};

/**
 * Axios request builder that returns an async function ready to use with redux's createAsyncThunk function.
 * @param {string} method The REST method to use
 * @param {string} url The url route
 * @param {object} params The url parameters
 * @param {object} data The request body
 * @param {object} extraConfig Any additional configuration needed for the request.
 *                             This must be an object with valid axios configuration keys.
 * @returns {async function} The resulting async function.
 */
const request = (method, url, extraConfig = {}) => async (data) => {
  try {
    const config = {
      ...clientConfig,
      method,
      url,
      data,
      ...extraConfig,
    };
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllPosts = request("get", "posts/");
export const authenticate = request("post", "api-token-auth/");
