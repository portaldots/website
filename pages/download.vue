<template>
  <div class="download">
    <AppSubHeader title="ダウンロード" />

    <section class="download-main">
      <AppContainer small>
        <h2 class="download-main__heading">最新バージョン</h2>
        <p class="download-main__lead">
          {{ latestReleaseInfo.name }} •
          {{ bytesToSize(latestReleaseInfo.assets[0].size) }}
        </p>
        <div class="download-main__download-wrap">
          <AppButton
            :href="latestReleaseInfo.assets[0].browser_download_url"
            primary
            wide
          >
            <font-awesome-icon :icon="['fas', 'download']" fixed-width />
            ZIP形式でダウンロード
          </AppButton>
        </div>
        <div class="download-main__sub-links">
          <a :href="latestReleaseInfo.html_url" target="_blank">
            リリースノート
          </a>
          •
          <a
            href="https://github.com/portal-dots/PortalDots/releases"
            target="_blank"
          >
            過去のバージョン
          </a>
        </div>
      </AppContainer>
    </section>
    <div class="download-infos">
      <AppContainer small class="download-infos__content">
        <div class="download-infos__row">
          <section class="download-infos__col">
            <h2 class="download-infos__col__heading">動作環境</h2>
            <p class="download-infos__col__paragraph">
              PHP 7.3以上、MySQL 5.7以上が動作するサーバーが必要です。
            </p>
            <p class="download-infos__col__paragraph">
              <a href="https://www.sakura.ne.jp/" target="_blank"
                >さくらのレンタルサーバ</a
              >
              スタンダードプラン以上での動作を確認しています。
            </p>
          </section>
          <section class="download-infos__col">
            <h2 class="download-infos__col__heading">セットアップ方法</h2>
            <p class="download-infos__col__paragraph">
              まず、サーバー上でMySQLデータベースを作成してください。その後、ダウンロードしたZIPファイルの中身をサーバーへアップロードしてください。
            </p>
            <p class="download-infos__col__paragraph">
              アップロード先のURLへアクセスするとインストーラーが表示されます。指示に従ってインストールを完了させてください。
            </p>
          </section>
        </div>
        <div class="download-infos__row">
          <section class="download-infos__col">
            <h2 class="download-infos__col__heading">
              セットアップの方法がわからない！
            </h2>
            <p class="download-infos__col__paragraph">
              <a href="https://lin.ee/aeee9s9" target="_blank"
                >PortalDots 公式 LINE アカウント</a
              >
              では、PortalDots
              のセットアップ方法や利用方法に関する質問を受け付けております(無料)。ぜひご活用ください。
            </p>
            <p class="download-infos__col__paragraph">
              ※PortalDots開発チームはボランティアによる活動です。LINE
              でのサポートは解決を保証するものではありません。予めご了承ください。
            </p>
          </section>
          <section class="download-infos__col">
            <h2 class="download-infos__col__heading">お問い合わせ先</h2>
            <p class="download-infos__col__paragraph">
              メールアドレス :
              <a href="mailto:portal-dots@hrgrweb.com"
                >portal-dots@hrgrweb.com</a
              >
            </p>
            <p class="download-infos__col__paragraph">
              Twitter :
              <a href="https://twitter.com/PortalDots" target="_blank"
                >@PortalDots</a
              >
            </p>
          </section>
        </div>
      </AppContainer>
    </div>
  </div>
</template>

<script>
import AppContainer from '@/components/AppContainer.vue'
import AppSubHeader from '@/components/AppSubHeader.vue'
import AppButton from '~/components/AppButton.vue'
import { head } from '~/utils/head'

export default {
  components: { AppContainer, AppSubHeader, AppButton },
  async asyncData({ $axios }) {
    const latestReleaseInfo = await $axios.$get(
      'https://api.github.com/repos/portal-dots/PortalDots/releases/latest'
    )
    return {
      latestReleaseInfo,
    }
  },
  methods: {
    bytesToSize(bytes) {
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
    },
  },
  head() {
    return head(
      'ダウンロード',
      'PortalDots のプログラムをダウンロードできます。'
    )
  },
}
</script>

<style lang="scss" scoped>
.download {
  &-main {
    padding: $spacing-xl 0;
    text-align: center;

    &__heading {
      font-size: 1.25rem;
      margin: 0 0 0.5rem;
      line-height: 1;
    }

    &__lead {
      margin: 0 0 0.5rem;
      color: $color-muted;
    }

    &__download-wrap {
      margin: 0 0 $spacing-md;
    }

    &__sub-links {
      font-weight: bold;
      color: $color-muted;
    }
  }

  &-infos {
    &__content {
      border-top: 1px solid $color-border;
      padding-top: $spacing-xl;
      padding-bottom: $spacing-xl;
    }

    &__row {
      display: flex;
      margin: 0 #{-$spacing-md};
      flex-wrap: wrap;
    }

    &__col {
      padding: 0 $spacing-md;
      flex: 0 0 50%;
      min-width: 50%;
      margin: 0 0 $spacing-lg;

      @media screen and (max-width: 767.5px) {
        flex: 0 0 100%;
        min-width: 1;
      }

      &__heading {
        font-size: 1rem;
        margin: 0 0 0.5rem;
      }

      &__paragraph {
        margin: 0 0 0.5rem;
      }
    }
  }
}
</style>
