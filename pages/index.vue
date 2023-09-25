<template>
  <div>
    <main class="app-main">
      <div>
        <div class="bg-purple-50 pt-4 md:pt-24 pb-32 -mb-32 md:pb-80 md:-mb-80">
          <div class="home-header-padding" />
          <AppContainer>
            <div class="text-center">
              <h1
                class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
              >
                <span class="inline-block">最強の</span
                ><span class="inline-block">学園祭</span
                ><span class="inline-block">ウェブシステム</span>
              </h1>
              <div class="mt-6 sm:text-lg leading-relaxed md:leading-relaxed">
                <p>学園祭の運営業務に必要なツールを全てここに。</p>
                <p>セルフホスト型、オープンソース、元実行委員が開発。</p>
              </div>
            </div>
            <div
              class="flex flex-col max-w-xs sm:max-w-none mx-auto sm:flex-row justify-center mt-6 gap-3"
            >
              <AppButton
                href="https://demo.portaldots.com"
                target="_blank"
                rel="noopener noreferrer"
                primary
                wide
                class="text-center"
              >
                <!-- ページ読み込み時に文字が一瞬だけ黒く表示されてしまう問題に対処するため、インラインスタイルで文字色を指定 -->
                <span style="color: white"
                  >試しに使ってみる<font-awesome-icon
                    :icon="['fas', 'external-link-alt']"
                    class="ml-1 opacity-75"
                /></span>
              </AppButton>
              <AppButton to="/download/" class="text-center"
                >ダウンロード(無料)</AppButton
              >
            </div>
          </AppContainer>
        </div>
        <AppContainer>
          <img
            src="@/assets/img/eyecatch.png"
            class="block w-full h-auto mt-12"
            width="3614"
            height="2298"
            alt=""
          />
        </AppContainer>
      </div>
      <section class="about">
        <AppContainer small>
          <h2 class="about__heading font-bold">
            学園祭実行委員会と参加企画の<br />コミュニケーションを支援するウェブシステム
          </h2>
          <p class="mb-3">
            PortalDots(ポータルドット)は、学園祭実行委員会と参加企画のコミュニケーションを支援するウェブシステムです。ログイン機能の構築、お知らせメールの一斉配信や各種申請の受付をオンラインで行うことができます。開発は東京理科大学の学園祭実行委員経験者が主導するボランティアの開発チームによって行っています。PortalDotsはオープンソースです。
          </p>
          <p class="mb-2">
            <a
              href="https://github.com/portaldots/PortalDots/blob/5.x/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 hover:text-blue-600 hover:underline"
            >
              <font-awesome-icon :icon="['fas', 'arrow-right']" fixed-width />
              PortalDotsの開発に参加してみませんか? (GitHub)
            </a>
          </p>
          <p>
            <a
              href="https://soji.dev/blog/introducing-portaldots"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 hover:text-blue-600 hover:underline"
            >
              <font-awesome-icon :icon="['fas', 'arrow-right']" fixed-width />
              「大学祭の参加団体向けウェブシステムをOSS化してみた」
              (開発者ブログ)
            </a>
          </p>
        </AppContainer>
      </section>
      <section class="screenshots-slide">
        <AppContainer>
          <HomeScreenshotsCarousel />
        </AppContainer>
      </section>
      <section class="features">
        <AppContainer>
          <h2 class="features__heading font-bold text-2xl">
            こんな機能があります
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div class="features__item">
              <h3 class="features__subheading font-bold is-login">
                ログインシステムによる<br />ユーザー管理
              </h3>
              <p class="features__description">
                ログイン機能・ユーザー登録機能を標準搭載しています。学籍番号による本人確認や、記入間違いの発生しやすいメールアドレスの認証機能も備わっています。
              </p>
            </div>
            <div class="features__item">
              <h3 class="features__subheading font-bold is-circles">
                オンラインで<br />企画参加登録を受付
              </h3>
              <p class="features__description">
                企画参加登録をPortalDots上で受付できます。企画・団体情報の入力、企画責任者の登録、参加登録の提出がオンラインで完結します。もちろん、受付期間の設定も可能です。
              </p>
            </div>
            <div class="features__item">
              <h3 class="features__subheading font-bold is-pages">
                お知らせメールの<br />一斉配信
              </h3>
              <p class="features__description">
                企画担当者へメールを一斉配信できます。メールアドレスはユーザー登録時に事前入力してもらうため、メールアドレスを収集する手間も省けます。
              </p>
            </div>
            <div class="features__item">
              <h3 class="features__subheading font-bold is-documents">
                配布資料PDFの<br />ダウンロード機能提供
              </h3>
              <p class="features__description">
                参加企画向け資料のPDFファイルをPortalDotsで配布することができます。PDFファイルの登録作業も簡単です。もちろん、Word・Excelファイルの配布も可能です。
              </p>
            </div>
            <div class="features__item">
              <h3 class="features__subheading font-bold is-forms">
                プログラミング不要の<br />
                申請フォーム作成
              </h3>
              <p class="features__description">
                ブース希望調査、公式パンフ掲載情報、当日車両入構の申請を、オンラインフォームで受付できます。Googleフォーム等とは異なり、企画ごとの回答可能数を制限できます。
              </p>
            </div>
            <div class="features__item">
              <h3 class="features__subheading font-bold is-database">
                企画・ブース情報の<br />
                データベース
              </h3>
              <p class="features__description">
                Excelを使って参加企画情報などを管理し、共有しようとすると、データが委員会内でバラバラになりがち。学園祭運営で必要な企画・ブース情報をPortalDots上で一元管理できます。
              </p>
            </div>
            <div class="features__item">
              <h3 class="features__subheading font-bold is-export">
                収集した情報は<br />
                CSV形式でダウンロード
              </h3>
              <p class="features__description">
                PortalDotsに登録されたユーザー情報や申請フォームへの回答はCSV形式でダウンロードできます。
              </p>
            </div>
            <div class="features__item">
              <h3 class="features__subheading font-bold is-smartphone">
                スマートフォンにも<br />対応
              </h3>
              <p class="features__description">
                PortalDotsの企画担当者向けページはスマートフォンに完全対応。スタッフ向けページも一部を除き対応しています。
              </p>
            </div>
          </div>
        </AppContainer>
      </section>
      <section class="download">
        <AppContainer small>
          <h2 class="download__heading font-bold">
            インストールは簡単！<br />いますぐPortalDotsをはじめよう
          </h2>
          <img
            src="@/assets/img/installer_home_screenshot.png"
            alt="インストーラーホーム画面のスクリーンショット"
            class="download__screenshot"
          />
          <p class="download__lead">
            PHP(8.0以上)とMySQL(5.7以上)に対応しているレンタルサーバーにファイルを設置したら、インストーラーの指示に従うだけ。
          </p>
          <p class="download__lead mb-6">
            PortalDotsをダウンロードして、学園祭をさらに楽しくしよう。
          </p>
          <div
            class="flex flex-col max-w-xs sm:max-w-none mx-auto sm:flex-row justify-center mt-6 gap-3"
          >
            <AppButton
              href="https://demo.portaldots.com"
              target="_blank"
              rel="noopener noreferrer"
              primary
              wide
              class="text-center"
            >
              <!-- ページ読み込み時に文字が一瞬だけ黒く表示されてしまう問題に対処するため、インラインスタイルで文字色を指定 -->
              <span style="color: white"
                >試しに使ってみる<font-awesome-icon
                  :icon="['fas', 'external-link-alt']"
                  class="ml-1 opacity-75"
              /></span>
            </AppButton>
            <AppButton to="/download/" class="text-center"
              >ダウンロード(無料)</AppButton
            >
          </div>
        </AppContainer>
      </section>
    </main>
  </div>
</template>

<script>
import { head } from '@/utils/head'
import AppContainer from '@/components/AppContainer.vue'
import AppButton from '@/components/AppButton.vue'
import HomeScreenshotsCarousel from '@/components/HomeScreenshotsCarousel.vue'

export default {
  components: {
    AppContainer,
    AppButton,
    HomeScreenshotsCarousel,
  },
  head() {
    return head(
      null,
      null,
      'https://repository-images.githubusercontent.com/245637809/6a04c400-a6da-11ea-89d2-c7f6a00a64c0'
    )
  },
}
</script>

<style lang="scss" scoped>
.home-header-padding {
  padding: $app-header-height 0 0;

  @media screen and (max-width: 1024px) {
    padding: #{$app-header-height * 1.5} 0 0;
  }
}

.about {
  padding: 4vmax 0;
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.95)
    ),
    left top / 60vmax url(~assets/img/portaldots-logo-type.svg) no-repeat;

  &__heading {
    font-size: 2rem;
    line-height: 1.4;
    margin: 0 0 0.75rem;
    letter-spacing: -0.1px;

    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
}

.features {
  padding: #{$spacing-xl + $spacing} 0 $spacing-xl;

  &__heading {
    text-align: center;
  }

  &__item {
    margin: $spacing-lg 0;
  }

  &__subheading {
    text-align: center;
    margin: 0 0 $spacing-md;
    background: center top / auto no-repeat;
    padding-top: #{2.5rem + $spacing-md};
    line-height: 1.5;

    &.is-login {
      background-image: url(~assets/img/features/login.svg);
    }

    &.is-circles {
      background-image: url(~assets/img/features/circles.svg);
    }

    &.is-smartphone {
      background-image: url(~assets/img/features/smartphone.svg);
    }

    &.is-pages {
      background-image: url(~assets/img/features/pages.svg);
    }

    &.is-documents {
      background-image: url(~assets/img/features/documents.svg);
    }

    &.is-forms {
      background-image: url(~assets/img/features/forms.svg);
    }

    &.is-export {
      background-image: url(~assets/img/features/export.svg);
    }

    &.is-database {
      background-image: url(~assets/img/features/database.svg);
    }
  }

  &__description {
    text-align: justify;
  }
}

.download {
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    linear-gradient(120deg, #{$color-primary}, #{$color-primary-2});
  padding: $spacing-xl 0;

  &__screenshot {
    display: block;
    width: 100%;
    max-width: 640px;
    height: auto;
    margin: 0 auto $spacing;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &__heading {
    font-size: 2rem;
    line-height: 1.4;
    text-align: center;
    margin: 0 0 $spacing;
  }

  &__links {
    text-align: center;
  }
}
</style>
