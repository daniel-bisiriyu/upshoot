export default axios => ({
  getImages(pageNo, perPage = 10) {
    return axios.get(`/curated?page=${pageNo}&per_page=${perPage}`);
  }
});
