<template>
  <div class="docs">
    <AppSubHeader
      title="マニュアル"
      description="PortalDots のセットアップ方法や使い方をご説明します。"
    />

    <section class="docs-main">
      <AppContainer>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DocsCategoryItem
            v-for="category in categories"
            :key="category.slug"
            :to="`/docs/${category.slug}/`"
            :title="category.title"
            :emoji="category.emoji"
            :description="category.description"
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
    const categories = await $content('docs', '_categories')
      .only(['title', 'emoji', 'description', 'slug'])
      .fetch()

    return {
      categories,
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
