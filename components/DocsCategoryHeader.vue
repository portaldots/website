<template>
  <header class="docs-category-header">
    <div class="docs-category-header__wrap">
      <AppContainer>
        <nuxt-link
          to="/docs/"
          class="inline-block px-2 py-1 -mx-2 -my-1 mb-3 rounded hover:no-underline hover:bg-white transition"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="mr-1" />
          マニュアル
        </nuxt-link>
        <div class="pt-5 flex flex-col md:flex-row items-center justify-center">
          <div class="flex-none flex justify-center">
            <div
              class="w-24 h-24 flex items-center justify-center text-5xl md:border-r border-gray-300"
            >
              {{ emoji }}
            </div>
          </div>
          <div class="w-6 h-3" />
          <div class="flex-grow text-center md:text-left">
            <h1 class="text-3xl font-bold">{{ title }}</h1>
            <p v-if="description" class="md:text-xl mt-3 text-gray-600">
              {{ description }}
            </p>
          </div>
        </div>
      </AppContainer>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    emoji: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.docs-category-header {
  padding: $app-header-height-top 0 0;
  background: linear-gradient(to bottom, rgba(#fff, 0.9), rgba(#fff, 0.9)),
    linear-gradient(120deg, #{$color-primary}, #{$color-primary-2});

  @media screen and (max-width: 767.5px) {
    padding: $app-header-height 0 0;
  }

  &__wrap {
    padding: $spacing 0 #{$spacing-xl * 2};

    @media screen and (max-width: 767.5px) {
      padding: $spacing-s 0 #{$spacing-xl * 2.5};
    }
  }
}
</style>
