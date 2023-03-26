<template>
  <div class="download">
    <AppSubHeader title="ダウンロード" />

    <section class="download-main">
      <AppContainer small>
        <AppContentTopCard class="download-main__card">
          <h2 class="download-main__heading font-bold">
            最新バージョンはこちら
          </h2>
          <p class="download-main__lead">
            バージョン {{ latestReleaseInfo.version }} ({{
              iso8601ToDateString(latestReleaseInfo.published_at)
            }}リリース) •
            {{ bytesToSize(latestReleaseInfo.size) }}
          </p>
          <div class="download-main__download-wrap">
            <AppButton
              :href="latestReleaseInfo.browser_download_url"
              primary
              wide
              @click="onClickDownload"
            >
              <font-awesome-icon :icon="['fas', 'download']" fixed-width />
              ZIP形式でダウンロード
            </AppButton>
          </div>
          <div class="download-main__sub-links font-bold">
            <a
              :href="latestReleaseInfo.html_url"
              target="_blank"
              class="text-blue-500 hover:text-blue-600 hover:underline"
            >
              リリースノート
            </a>
            •
            <a
              href="https://github.com/portal-dots/PortalDots/releases"
              target="_blank"
              class="text-blue-500 hover:text-blue-600 hover:underline"
            >
              過去のバージョン
            </a>
            •

            <a
              href="https://docs.portaldots.com/faq"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 hover:text-blue-600 hover:underline"
            >
              よくある質問
            </a>
          </div>
          <div class="download-main__sub-links">
            <a
              href="https://github.com/portal-dots/PortalDots/blob/3.x/LICENSE"
              target="_blank"
              class="text-blue-500 hover:text-blue-600 hover:underline"
            >
              ライセンス (MIT License)
            </a>
          </div>
        </AppContentTopCard>
      </AppContainer>
    </section>
    <div class="download-infos">
      <AppContainer small class="download-infos__content">
        <docs-alert type="info">
          <a
            href="https://soji.dev/blog/portaldots-4"
            class="underline font-bold"
            target="_blank"
          >
            PortalDots 4 の新機能はこちら
          </a>
        </docs-alert>
        <div class="h-5" />
        <div class="download-infos__row">
          <section class="download-infos__col">
            <h2 class="download-infos__col__heading font-bold">動作環境</h2>
            <p class="download-infos__col__paragraph">
              PHP 7.3以上、MySQL 5.7以上が動作するウェブサーバーが必要です。
            </p>
          </section>
          <section class="download-infos__col">
            <h2 class="download-infos__col__heading font-bold">
              セットアップ方法
            </h2>
            <p class="download-infos__col__paragraph">
              まず、サーバー上でMySQLデータベースを作成してください。その後、ダウンロードしたZIPファイルの中身をサーバーへアップロードしてください。アップロード先のURLへアクセスするとインストーラーが表示されます。指示に従ってインストールを完了させてください。
            </p>
            <p class="download-infos__col__paragraph">
              詳しくは
              <a
                href="https://docs.portaldots.com"
                class="text-blue-500 hover:text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                マニュアル
              </a>
              や
              <a
                href="https://docs.portaldots.com/faq"
                class="text-blue-500 hover:text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                よくある質問
              </a>
              をご覧ください。
            </p>
          </section>
        </div>
        <div class="download-infos__row">
          <section class="download-infos__col">
            <h2 class="download-infos__col__heading font-bold">
              セットアップの方法がわからない！
            </h2>
            <p class="download-infos__col__paragraph">
              <a
                href="https://lin.ee/aeee9s9"
                target="_blank"
                class="text-blue-500 hover:text-blue-600 hover:underline"
                >PortalDots の LINE 公式アカウント</a
              >
              では、PortalDots
              のセットアップ方法や利用方法に関する質問を受け付けております(無料)。ぜひご活用ください。
            </p>
            <p class="download-infos__col__paragraph is-notice">
              ※PortalDots開発チームはボランティアによる活動です。LINE
              でのサポートは解決を保証するものではありません。予めご了承ください。
            </p>
          </section>
          <section class="download-infos__col">
            <h2 class="download-infos__col__heading font-bold">
              お問い合わせ先
            </h2>
            <p class="download-infos__col__paragraph">
              LINE :
              <a
                href="https://lin.ee/aeee9s9"
                target="_blank"
                class="text-blue-500 hover:text-blue-600 hover:underline"
                >@aeee9s9</a
              >
            </p>
            <p class="download-infos__col__paragraph">
              メールアドレス :
              <a
                href="mailto:support@portaldots.com"
                class="text-blue-500 hover:text-blue-600 hover:underline"
                >support@portaldots.com</a
              >
            </p>
            <p class="download-infos__col__paragraph">
              Twitter :
              <a
                href="https://twitter.com/PortalDots"
                target="_blank"
                class="text-blue-500 hover:text-blue-600 hover:underline"
                >@PortalDots</a
              >
            </p>
            <p class="download-infos__col__paragraph">
              開発チーム代表Twitter :
              <a
                href="https://twitter.com/sofpyon"
                target="_blank"
                class="text-blue-500 hover:text-blue-600 hover:underline"
                >@sofpyon</a
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
import AppContentTopCard from '@/components/AppContentTopCard.vue'
import AppButton from '~/components/AppButton.vue'
import { head } from '~/utils/head'

export default {
  components: { AppContainer, AppSubHeader, AppContentTopCard, AppButton },
  async asyncData({ $axios }) {
    const latestReleaseInfo = await $axios.$get(
      'https://releases.portaldots.com/releases/latest.json?major_version=4'
    )
    return {
      latestReleaseInfo,
    }
  },
  head() {
    return head(
      'ダウンロード',
      'PortalDots のプログラムをダウンロードできます。'
    )
  },
  methods: {
    bytesToSize(bytes) {
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
    },
    iso8601ToDateString(iso8601) {
      const date = new Date(iso8601)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    onClickDownload() {
      window._paq.push([
        'trackEvent',
        'Downloads',
        'Download Release Zip',
        `v${this.latestReleaseInfo.version}`,
      ])
    },
  },
}
</script>

<style lang="scss" scoped>
.download {
  &-main {
    text-align: center;
    margin-top: #{-$spacing-xl * 2};

    &__card {
      padding: $spacing-xl $spacing-md;
    }

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
      color: $color-muted;
    }
  }

  &-infos {
    &__content {
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

      @media screen and (max-width: 1024px) {
        flex: 0 0 100%;
        min-width: 1;
      }

      &__heading {
        font-size: 1rem;
        margin: 0 0 0.5rem;
      }

      &__paragraph {
        margin: 0 0 0.5rem;

        &.is-notice {
          color: $color-muted;
          font-size: 80%;
        }
      }
    }
  }
}
</style>
