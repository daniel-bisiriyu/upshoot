<template>
  <div class="">
    <app-header />
    <images :images="images" :page-no="pageNo" />
    <div class="flex justify-center my-6">
      <loading v-if="loading" />
    </div>
    <!-- <loader /> -->
  </div>
</template>

<script>
import AppHeader from "../components/Header.vue";
import Images from "../components/Images.vue";
import Loading from "../components/Loading.vue";
import Loader from "../components/Loader";
export default {
  components: {
    AppHeader,
    Images,
    Loading,
    Loader
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
    this.getImages();
    if (process.client) {
      window.addEventListener("scroll", this.checkIfAtBottom);
    }
  },
  methods: {
    async getImages() {
      try {
        const response = await this.$api.images.getImages(
          this.pageNo,
          this.perPage
        );
        console.log(response);
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
