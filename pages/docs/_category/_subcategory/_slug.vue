<template>
  <div class="docs-article">
    <div class="docs-article__background" />
    <AppContainer class="relative z-10 p-0 pt-3 md:p-5 md:pt-3">
      <div class="pb-5">
        <AppBackButton
          :to="`/docs/${categoryInfo.slug}/`"
          :label="`${categoryInfo.emoji} ${subCategoryInfo.title}`"
        />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
        <article
          class="rounded-md bg-white shadow-md p-4 md:p-12 col-span-2 mb-10"
        >
          <header class="pb-8">
            <p>
              <a
                :href="githubMarkdownUrl"
                class="text-gray-600 hover:underline text-sm"
              >
                <font-awesome-icon
                  :icon="['fas', 'edit']"
                  class="mr-1 text-gray-400"
                />修正を提案
              </a>
            </p>
            <h1 class="text-2xl lg:text-3xl font-bold mt-3 lg:leading-normal">
              {{ page.title }}
            </h1>
            <p class="text-lg lg:text-xl text-gray-500 leading-normal mt-3">
              {{ page.description }}
            </p>
          </header>
          <div class="prose mx-auto prose-blue max-w-none tracking-wider">
            <nuxt-content :document="page" />
          </div>
          <div
            class="lg:grid lg:grid-cols-2 lg:gap-6 mt-3 lg:mt-8 lg:pt-8 border-t border-gray-200"
          >
            <div class="my-5 lg:my-0 col-span-1">
              <NuxtLink
                v-if="prev"
                :to="`${prev.path}/`"
                class="p-3 h-full flex leading-normal rounded hover:shadow-md border border-gray-200 transform hover:-translate-y-0.5 transition"
              >
                <font-awesome-icon
                  :icon="['fas', 'arrow-left']"
                  class="mr-3 text-gray-500"
                />
                <div>
                  <div class="text-xs mb-1 font-bold text-gray-500">前へ</div>
                  <div class="text-blue-600">{{ prev.title }}</div>
                </div>
              </NuxtLink>
            </div>
            <div class="my-5 lg:my-0 col-span-1 lg:text-right">
              <NuxtLink
                v-if="next"
                :to="`${next.path}/`"
                class="p-3 h-full flex lg:flex-row-reverse leading-normal rounded hover:shadow-md border border-gray-200 transform hover:-translate-y-0.5 transition"
              >
                <font-awesome-icon
                  :icon="['fas', 'arrow-right']"
                  class="mr-3 lg:mr-0 lg:ml-3 text-gray-500"
                />
                <div>
                  <div class="text-xs mb-1 font-bold text-gray-500">次へ</div>
                  <div class="text-blue-600">{{ next.title }}</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </article>
        <div class="col-span-1 hidden lg:block">
          <div
            class="sticky -top-4 -mt-24 bottom-0 docs-article__sidebar-content"
          >
            <div class="h-20" />
            <div class="overflow-y-auto max-h-full pt-4 px-2 pb-32">
              <div
                v-if="
                  pagesInSameSubCategories &&
                  pagesInSameSubCategories.length > 0
                "
                class="rounded-md bg-white border border-gray-100 shadow-md py-4 px-8 mb-4"
              >
                <ul class="list-disc pl-5">
                  <li
                    v-for="link of pagesInSameSubCategories"
                    :key="link.path"
                    class="my-2 leading-snug text-sm"
                    :class="{
                      'font-bold text-gray-800': page.slug === link.slug,
                      'text-gray-500': page.slug !== link.slug,
                    }"
                  >
                    <nuxt-link :to="`${link.path}/`">
                      {{ link.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div
                v-if="page.toc && page.toc.length > 0"
                class="rounded-md bg-white border border-gray-100 shadow-md py-4 px-8 mb-4"
              >
                <scrollactive active-class="text-gray-800" :offset="80">
                  <ul class="list-disc pl-5">
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
                class="rounded-md bg-white border border-gray-100 shadow-md p-2"
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

    const subCategoryInfo = await $content(
      'docs',
      params.category,
      params.subcategory,
      '_meta'
    ).fetch()

    const pagesInSameSubCategories = await $content(
      'docs',
      params.category,
      params.subcategory
    )
      .sortBy('priority', 'asc')
      .where({ slug: { $ne: '_meta' } })
      .fetch()

    const page = await $content(
      'docs',
      params.category,
      params.subcategory,
      params.slug
    ).fetch()

    const [prev, next] = await $content(
      'docs',
      params.category,
      params.subcategory
    )
      .only(['title', 'path'])
      .sortBy('priority')
      .where({ slug: { $ne: '_meta' } })
      .surround(params.slug)
      .fetch()

    return {
      categoryInfo,
      subCategoryInfo,
      pagesInSameSubCategories,
      page,
      prev,
      next,
    }
  },
  computed: {
    githubMarkdownUrl() {
      return `https://github.com/portal-dots/website/blob/main/content/docs/${this.$route.params.category}/${this.$route.params.subcategory}/${this.$route.params.slug}.md`
    },
  },
  head() {
    return head(
      `${this.page.title} — ${this.subCategoryInfo.title} — マニュアル`,
      this.page.description
    )
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

  &__sidebar-content {
    height: calc(100vh - #{$app-header-height});
  }
}
</style>
