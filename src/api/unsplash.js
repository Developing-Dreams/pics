import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID bcb322db7e1260b3241a52590abfd65f8e9d813fd200270ec5ecd352d1027708"
  }
});
