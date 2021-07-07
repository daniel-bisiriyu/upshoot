export default function({ $axios, redirect }) {
  $axios.setHeader(
    "Authorization",
    "563492ad6f917000010000014442e2d8da2d488fa0a33b2680b372ce"
  );
  // $axios.onRequest(config => {
  //   config.headers["Authorization"] =
  //     "563492ad6f917000010000014442e2d8da2d488fa0a33b2680b372ce";
  // });

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status);
  //   if (code === 400) {
  //     redirect("/400");
  //   }
  // });
}
// this.$axios.setHeader(
//   "Authorization",
//   "563492ad6f917000010000014442e2d8da2d488fa0a33b2680b372ce"
// );
