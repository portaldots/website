<template>
  <header class="app-sub-header">
    <div class="app-sub-header__wrap">
      <AppContainer>
        <h1 class="app-sub-header__title">{{ title }}</h1>
      </AppContainer>
    </div>
  </header>
</template>

<script>
import AppContainer from '@/components/AppContainer.vue'

export default {
  components: {
    AppContainer,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.app-sub-header {
  padding: $app-header-height-top 0 0;
  background: linear-gradient(to bottom, rgba(#fff, 0.9), rgba(#fff, 0.9)),
    linear-gradient(120deg, #{$color-primary}, #{$color-primary-2});
  text-align: center;

  @media screen and (max-width: 767.5px) {
    padding: $app-header-height 0 0;
  }

  &__wrap {
    padding: $spacing 0 #{$spacing-xl * 3};

    @media screen and (max-width: 767.5px) {
      padding: $spacing-s 0 #{$spacing-xl * 2.5};
    }
  }

  &__title {
    margin: 0;
    /* margin-left: -5px; */
    font-size: 2.5rem;
    color: transparent;
    background: linear-gradient(150deg, #{$color-primary}, #{$color-primary-2});
    background-clip: text;
    -webkit-background-clip: text;

    @media screen and (max-width: 767.5px) {
      font-size: 1.75rem;
    }
  }
}
</style>
