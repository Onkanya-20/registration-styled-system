import axios from "axios";

const getRestaurants = async () => {
  const res = await axios.get("http://localhost:1337/restaurants");
  return res.data;
};

export { getRestaurants };
