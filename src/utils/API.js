import axios from "axios";
const BASEURL = "https://dog.ceo";
let queryBase = `/api/`;

export default {
  search: function(query) {
    return axios.get(BASEURL + queryBase + query);
  }
};