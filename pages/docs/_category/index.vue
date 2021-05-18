<template>
  <div class="docs-category">
    <div class="docs-category__bg" />
    <AppContainer class="relative z-10">
      <div class="rounded-md p-5 bg-white shadow-md">
        <DocsCategoryHeader
          :emoji="categoryInfo.emoji"
          :title="categoryInfo.title"
          :description="categoryInfo.description"
        />

        <div class="grid grid-cols-1 gap-6">
          <DocsArticleItem
            v-for="article in articles"
            :key="article.slug"
            :to="`${article.path}/`"
            :title="article.title"
            :description="article.description"
          />
          <DocsArticleItem
            v-for="article in articles"
            :key="article.slug"
            :to="`${article.path}/`"
            :title="article.title"
            :description="article.description"
          />
          <DocsArticleItem
            v-for="article in articles"
            :key="article.slug"
            :to="`${article.path}/`"
            :title="article.title"
            :description="article.description"
          />
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script>
import { head } from '~/utils/head'

export default {
  async asyncData({ $content, params }) {
    const categoryInfo = (
      await $content('docs').where('slug', params.category).fetch()
    )[0]

    const articles = await $content('docs', params.category).fetch()

    return {
      categoryInfo,
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
  padding-top: $app-header-height-top;
  position: relative;
  z-index: 1;

  &__bg {
    content: '';
    position: absolute;
    z-index: 2;
    background: linear-gradient(to bottom, rgba(#fff, 0.9), rgba(#fff, 0.9)),
      linear-gradient(120deg, #{$color-primary}, #{$color-primary-2});
    top: 0;
    left: 0;
    right: 0;
    height: 12rem;
  }
}
</style>
