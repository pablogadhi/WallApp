import axios from "axios";

const clientConfig = {
  baseURL: "http://localhost:8000/",
  timeout: 10000,
};

/**
 * Axios request builder that returns an async function ready to use with redux's createAsyncThunk function.
 * @param {string} method The REST method to use
 * @param {string} url The url route
 * @param {object} data The request body
 * @param {object} extraConfig Any additional configuration needed for the request.
 *                             This must be an object with valid axios configuration keys.
 * @returns {async function} The resulting async function.
 */
const request = (method, url) => async (requestData = {}) => {
  try {
    const config = {
      ...clientConfig,
      method,
      url,
      ...requestData,
    };
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllPosts = request("get", "posts/");
export const makeNewPost = request("post", "posts/");
export const authenticate = request("post", "api-token-auth/");
export const signUp = request("post", "users/");
