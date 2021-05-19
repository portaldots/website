<template>
  <div class="docs-article">
    <div class="docs-article__background" />
    <AppContainer class="relative z-10 p-0 pt-3 md:p-5 md:pt-3">
      <div class="pb-5">
        <AppBackButton
          :to="`/docs/${categoryInfo.slug}/`"
          :label="`${categoryInfo.emoji} ${categoryInfo.title}`"
        />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
        <article class="rounded-md bg-white shadow-md p-8 md:p-12 col-span-2">
          <header class="pb-8">
            <h1 class="text-3xl font-bold mb-3 leading-normal">
              {{ page.title }}
            </h1>
            <p class="text-lg md:text-xl text-gray-500 leading-relaxed">
              {{ page.description }}
            </p>
          </header>
          <div class="prose mx-auto prose-blue max-w-none tracking-wider">
            <nuxt-content :document="page" />
          </div>
        </article>
        <div class="col-span-1 hidden lg:block">
          <div
            class="sticky transition-all duration-300 h-screen pb-32"
            :class="isHeaderHide ? 'top-8' : 'top-24'"
          >
            <div
              class="rounded-md bg-white border border-gray-100 shadow-md p-8 max-h-full overflow-y-auto"
            >
              <ul class="list-disc text-gray-300 pl-5">
                <li
                  v-for="link of page.toc"
                  :key="link.id"
                  class="my-1"
                  :class="{ 'ml-5': link.depth === 3 }"
                >
                  <a
                    :href="`#${link.id}`"
                    class="text-gray-500 hover:text-blue-600 hover:underline"
                    @click="handleClickTocLink"
                  >
                    {{ link.text }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script>
import { head } from '~/utils/head'
import AppContainer from '~/components/AppContainer.vue'
import AppBackButton from '~/components/AppBackButton.vue'

export default {
  components: { AppContainer, AppBackButton },
  async asyncData({ $content, params }) {
    const categoryInfo = await $content(
      'docs',
      '_categories',
      params.category
    ).fetch()
    const page = await $content('docs', params.category, params.slug).fetch()

    return {
      categoryInfo,
      page,
    }
  },
  computed: {
    isHeaderHide() {
      return this.$store.state.header.isHide
    },
  },
  methods: {
    handleClickTocLink() {
      window.setTimeout(
        () => this.$store.commit('header/changeIsHide', true),
        0
      )
    },
  },
  head() {
    return head(`${this.page.title} — マニュアル`, this.page.description)
  },
}
</script>

<style lang="scss" scoped>
.docs-article {
  padding: $app-header-height-top 0 0;
  position: relative;

  @media screen and (max-width: 767.5px) {
    padding: $app-header-height 0 0;
  }

  &__background {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 15rem;
    background: linear-gradient(to bottom, rgba(#fff, 0.9), rgba(#fff, 0.9)),
      linear-gradient(120deg, #{$color-primary}, #{$color-primary-2});
  }
}
</style>
