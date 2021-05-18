<template>
  <div class="docs">
    <AppSubHeader
      title="マニュアル"
      description="PortalDots のセットアップ方法や使い方をご説明します。"
    />

    <section class="docs-main">
      <AppContainer>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DocsCategoryItem
            v-for="article in articles"
            :key="article.slug"
            :to="`/docs/${article.slug}/`"
            :title="article.title"
            :emoji="article.emoji"
            :description="article.description"
          />
        </div>
      </AppContainer>
    </section>
  </div>
</template>

<script>
import { head } from '~/utils/head'

export default {
  async asyncData({ $content }) {
    const articles = await $content('docs')
      .only(['title', 'emoji', 'description', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
  head() {
    return head(
      'マニュアル',
      'PortalDots のセットアップ方法や使い方をご説明します。'
    )
  },
}
</script>

<style lang="scss" scoped>
.docs {
  &-main {
    margin-top: #{-$spacing-xl * 2};
  }
}
</style>
