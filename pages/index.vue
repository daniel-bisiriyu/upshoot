<template>
  <div class="">
    <app-header />
    <images :images="images" :page-no="pageNo" :expectedImagesCount="10" />
    <div class="flex justify-center my-6">
      <loading v-if="loading" />
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/Header.vue";
import Images from "../components/Images.vue";
import Loading from "../components/Loading.vue";
export default {
  components: {
    AppHeader,
    Images,
    Loading
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
