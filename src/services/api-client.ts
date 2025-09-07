import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "023522e538b24fe9b7b9ef52a810dc16",
  },
});
