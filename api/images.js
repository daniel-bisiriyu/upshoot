export default axios => ({
  getImages(pageNo, perPage = 10) {
    return axios.get(`/curated?page=${pageNo}&per_page=${perPage}`);
  },
  getQueriedImages(query) {
    return axios.get(`/search?query=${query}&per_page=10`);
  }
});
