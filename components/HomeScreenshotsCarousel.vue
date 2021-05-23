<template>
  <carousel
    autoplay
    autoplay-hover-pause
    :per-page="1"
    :pagination-size="6"
    :autoplay-timeout="5000"
    loop
    class="home-screenshots-carousel"
  >
    <slide
      v-for="imageSource in imageSources"
      :key="imageSource.alt"
      class="home-screenshots-carousel__slide"
    >
      <img
        class="home-screenshots-carousel__slide__image"
        :src="imageSource.src"
        :alt="imageSource.alt"
      />
    </slide>
  </carousel>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

const createImageSourceItem = (src, alt) => ({
  src,
  alt,
})

export default {
  components: {
    Carousel,
    Slide,
  },
  computed: {
    imageSources() {
      return [
        createImageSourceItem(
          require('@/assets/img/screenshots/screenshot_tile.png'),
          'PortalDotsの画面'
        ),
        createImageSourceItem(
          require('@/assets/img/screenshots/screenshot_home.png'),
          'トップページ'
        ),
        createImageSourceItem(
          require('@/assets/img/screenshots/screenshot_circle_register.png'),
          '企画参加登録'
        ),
        createImageSourceItem(
          require('@/assets/img/screenshots/screenshot_form_editor.png'),
          '申請フォームエディター'
        ),
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.home-screenshots-carousel {
  width: 100%;
  display: block;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  position: relative;

  &__slide {
    position: relative;

    &__image {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
    }
  }

  /deep/ .VueCarousel-dot-container {
    margin-top: 10px !important;
  }

  /deep/ .VueCarousel-pagination {
    position: absolute;
  }

  /deep/ .VueCarousel-dot {
    margin: 0 !important;
  }
}
</style>
