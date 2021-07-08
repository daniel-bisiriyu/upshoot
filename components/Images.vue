<template>
  <div>
    <categories-menu />
    <div class="container">
      <div class="flex justify-between items-center mb-2">
        <p class="text-lg title">Free Stock Photos</p>
        <div class="relative bg-grey" @mouseleave="showDropdown = false">
          <div
            class="photo-categories text-sm font-semibold"
            @mouseenter="showDropdown = true"
          >
            <p class="flex items-center cursor-pointer">
              Trending
              <span class="pl-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z"></path></svg
              ></span>
            </p>
          </div>
          <div
            class="absolute z-20 bg-white dropdown cursor-pointer"
            id="dropdown"
            v-show="showDropdown"
          >
            <p class="py-2 px-3">Trending</p>
            <p class="py-2 px-3">New</p>
          </div>
        </div>
      </div>
      <div class="images-wrapper">
        <div class="image-card" v-for="image in images" :key="image.id">
          <div
            class="card-content"
            :style="{
              background: image.avg_color
            }"
            @mouseenter="hoveredImageId = image.id"
            @mouseleave="hoveredImageId = null"
          >
            <div class="overlay"></div>
            <img
              class="image"
              :src="image.src.large"
              alt="a random image"
              @load="imageCount++"
            />
          </div>
          <div class="photo-meta">
            <div
              class="flex justify-between items-center"
              v-show="hoveredImageId == image.id"
            >
              <div>
                <p class="text-white text-sm">{{ image.photographer }}</p>
              </div>
              <div class="flex items-center">
                <span><download-icon /></span>
                <span class="px-2"><add-icon /></span>
                <span><like-icon /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <loader v-if="imageCount < expectedImagesCount * pageNo" />
    </div>
  </div>
</template>

<script>
import DownloadIcon from "./icons/Download.vue";
import AddIcon from "./icons/Add.vue";
import LikeIcon from "./icons/Like.vue";
import Loader from "./Loader.vue";
import CategoriesMenu from "./CategoriesMenu.vue";
export default {
  components: {
    DownloadIcon,
    AddIcon,
    LikeIcon,
    Loader,
    CategoriesMenu
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    pageNo: {
      type: Number,
      required: false
    },
    expectedImagesCount: {
      required: true,
      default: 10,
      type: Number
    }
  },
  data() {
    return {
      imageCount: 0,
      selectedImage: {},
      showImageModal: false,
      loading: true,
      countImagesResized: 0,
      showDropdown: false,
      hoveredImageId: null
    };
  },
  watch: {
    imageCount() {
      if (this.imageCount == this.expectedImagesCount * this.pageNo) {
        console.log("Time to resize");
        this.resizeAllGridItems();
      }
    }
  },
  mounted() {
    if (process.client) {
      window.onload = this.resizeAllGridItems();
      window.addEventListener("load", this.resizeAllGridItems);
      window.addEventListener("resize", this.resizeAllGridItems);
    }
  },
  methods: {
    resizeAllGridItems() {
      let imageCards = document.getElementsByClassName("image-card");
      for (let i = 0; i < imageCards.length; i++) {
        this.resizeImageCard(imageCards[i]);
      }
      if (this.imageCount == 10) {
        this.loading = false;
      }
    },
    resizeImageCard(imageCard) {
      let grid = document.getElementsByClassName("images-wrapper")[0],
        rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        );
      let rowSpan = Math.ceil(
        (imageCard.querySelector(".card-content").getBoundingClientRect()
          .height +
          rowGap) /
          (rowHeight + rowGap)
      );
      imageCard.style.gridRowEnd = "span " + rowSpan;
    },
    shouldCloseDropdown(event) {
      console.log(event);
      if (process.client) {
        let dropdown = document.getElementById("dropdown");
        if (event.target != dropdown) {
          this.showDropdown = false;
        }
      }
    },
    showImage(image) {
      this.selectedImage = image;
      this.showImageModal = true;
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 1rem auto;
  padding: 0 0.5rem;
}

.title {
  color: #1a1a1a;
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
}
.photo-categories svg {
  fill: #1a1a1a;
}

.images-wrapper {
  display: grid;
  grid-gap: 0.5rem 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 10px;
}
.image {
  max-width: 100%;
  vertical-align: top;
  height: auto;
}
.card-content {
  position: relative;
}
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background: linear-gradient(180deg, transparent, transparent 30%, #000);
  z-index: 1;
}
.image-card {
  position: relative;
  grid-row-end: span 30;
}
.photo-meta {
  position: absolute;
  bottom: 1rem;
  z-index: 2;
  padding: 0 1rem 0.5rem;
  right: 0;
  left: 0;
}
.location {
  font-size: 0.75rem;
  margin-top: 0.25rem;
  text-align: left;
}

.dropdown {
  top: 0;
  right: 0.5rem;
  padding: 0.5rem 0;
  width: 10rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);
  border-radius: 2px;
}

.dropdown p:hover {
  background: #e8e8e8;
}

.photographer-img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

@media screen and (max-width: 1024px) {
  .images-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
