import Images from "~/api/images";

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    images: Images(context.$axios)
  };

  // Inject $api
  inject("api", factories);
};
