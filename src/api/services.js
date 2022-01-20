import axios from "axios";

export const fetchImages = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
    .then((res) => res)
    .catch((err) => {
      console.log("[fetchImages] error: ", err);
    });
};
