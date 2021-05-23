<template>
  <div>
    <DocsCategoryHeader
      :emoji="categoryInfo.emoji"
      :title="categoryInfo.title"
      :description="categoryInfo.description"
    />
    <div class="mb-10">
      <AppContainer class="relative z-10 docs-category__content">
        <div class="rounded-md bg-white shadow-md overflow-hidden px-10">
          <!-- <DocsArticleItem
            v-for="article in articles"
            :key="article.slug"
            :to="`${article.path}/`"
            :title="article.title"
            :description="article.description"
          /> -->

          <section
            v-for="subCategory in subCategories"
            :key="subCategory.path"
            class="py-10 border-b border-gray-200 last:border-none"
          >
            <h2 class="text-xl font-bold">{{ subCategory.title }}</h2>
            <ul class="list-disc pl-5">
              <li
                v-for="article in articles.filter((article) => {
                  return article.subCategory === subCategory.subCategory
                })"
                :key="article.path"
                class="mt-3"
              >
                <nuxt-link
                  :to="`${article.path}/`"
                  class="text-blue-600 hover:underline"
                >
                  {{ article.title }}
                </nuxt-link>
              </li>
            </ul>
          </section>
        </div>
      </AppContainer>
    </div>
  </div>
</template>

<script>
import { head } from '~/utils/head'

export default {
  async asyncData({ $content, params }) {
    const categoryInfo = await $content(
      'docs',
      '_categories',
      params.category
    ).fetch()

    const articles = await $content('docs', params.category, { deep: true })
      .sortBy('priority', 'asc')
      .where({ slug: { $ne: '_meta' } })
      .fetch()

    const subCategories = await $content('docs', params.category, {
      deep: true,
    })
      .sortBy('priority', 'asc')
      .where({ slug: '_meta' })
      .fetch()

    console.log(articles)

    return {
      categoryInfo,
      subCategories,
      articles,
    }
  },
  head() {
    return head(
      `${this.categoryInfo.title} — マニュアル`,
      this.categoryInfo.description
    )
  },
}
</script>

<style lang="scss" scoped>
.docs-category {
  &__content {
    margin-top: #{-$spacing-xl};
  }
}
</style>
