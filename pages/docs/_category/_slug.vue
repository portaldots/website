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
            <p>
              <a
                :href="githubMarkdownUrl"
                class="text-gray-600 hover:underline"
              >
                <font-awesome-icon
                  :icon="['fas', 'edit']"
                  class="mr-1 text-gray-400"
                />修正を提案
              </a>
            </p>
            <h1 class="text-3xl font-bold mt-3 leading-normal">
              {{ page.title }}
            </h1>
            <p class="text-lg md:text-xl text-gray-500 leading-relaxed mt-3">
              {{ page.description }}
            </p>
          </header>
          <div class="prose mx-auto prose-blue max-w-none tracking-wider">
            <nuxt-content :document="page" />
          </div>
        </article>
        <div class="col-span-1 hidden lg:block">
          <div class="sticky h-screen -top-4 -mt-24 bottom-0">
            <div class="h-20" />
            <div class="overflow-y-auto max-h-full pt-4 pb-32">
              <div
                class="rounded-md bg-white border border-gray-100 shadow-md py-4 px-8"
              >
                <scrollactive active-class="text-gray-800" :offset="80">
                  <ul class="list-disc pl-5 docs-article__toc-list">
                    <li
                      v-for="link of page.toc"
                      :key="link.id"
                      class="my-2 text-gray-500 leading-snug text-sm"
                      :class="{
                        'font-bold': link.depth === 2,
                        'ml-5': link.depth === 3,
                      }"
                    >
                      <a
                        :href="`#${link.id}`"
                        class="hover:underline scrollactive-item"
                      >
                        {{ link.text }}
                      </a>
                    </li>
                  </ul>
                </scrollactive>
              </div>
              <div
                class="rounded-md bg-white border border-gray-100 shadow-md p-2 mt-4"
              >
                <a
                  :href="githubMarkdownUrl"
                  class="block text-gray-600 px-6 py-2 rounded-md hover:bg-gray-100"
                >
                  <font-awesome-icon
                    :icon="['fas', 'edit']"
                    class="mr-1 text-gray-400"
                  />
                  内容の修正をGitHubで提案する
                </a>
              </div>
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
    githubMarkdownUrl() {
      return `https://github.com/portal-dots/website/blob/main/content/docs/${this.$route.params.category}/${this.$route.params.slug}.md`
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
