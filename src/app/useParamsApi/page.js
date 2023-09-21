import axios from "axios";

const Api = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await axios.get(url);
  return response.data;
};

export default Api;
