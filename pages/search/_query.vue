<template>
  <div class="">
    <app-header />
    <images :images="images" :page-no="pageNo" :expectedImagesCount="10" />
  </div>
</template>

<script>
import AppHeader from "../../components/Header.vue";
import Images from "../../components/Images.vue";
export default {
  components: {
    AppHeader,
    Images
  },
  data() {
    return {
      images: [],
      pageNo: 1,
      loading: true,
      perPage: 10
    };
  },
  watch: {
    pageNo() {
      this.getImages();
    }
  },
  mounted() {
    this.getQueriedImages();
  },
  methods: {
    async getQueriedImages() {
      try {
        const response = await this.$api.images.getQueriedImages(
          this.$route.params.query
        );
        this.images = [...this.images, ...response.data.photos];
      } catch (error) {
        console.log(error);
      }
    },
    checkIfAtBottom() {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        if (this.pageNo < 5) {
          this.pageNo += 1;
        } else {
          this.loading = false;
        }
      }
    }
  }
};
</script>

<style></style>
