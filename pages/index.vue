<template>
  <div>
    <header class="app-header">
      <AppContainer class="app-header__container">
        <nuxt-link to="/" class="app-header__logo-link">
          <img
            src="@/assets/img/logotype.svg"
            class="app-header__logo"
            alt="PortalDots"
          />
        </nuxt-link>
        <nav class="app-header__nav">
          <nuxt-link to="/" class="app-header__nav__item">ホーム</nuxt-link>
          <nuxt-link to="/" class="app-header__nav__item">
            使い方ガイド
          </nuxt-link>
          <nuxt-link to="/" class="app-header__nav__item">
            お問い合わせ
          </nuxt-link>
          <nuxt-link to="/" class="app-header__nav__item"> GitHub </nuxt-link>
          <nuxt-link to="/" class="app-header__nav__item is-button">
            ダウンロード
          </nuxt-link>
        </nav>
      </AppContainer>
    </header>
    <main class="app-main">
      <div class="home-header">
        <AppContainer class="home-header__container">
          <div class="row home-header__row">
            <div class="col-md-6">
              <h1 class="home-header__copy">
                一人ひとりの「想い」をつなぎ、学園祭を最高に楽しくする
              </h1>
              <p class="home-header__description">
                PHPとMySQLで動作する、オープンソースの学園祭運営支援ウェブシステム。
              </p>
              <div class="home-header__actions">
                <AppButton to="/" primary>ダウンロード</AppButton>
                <AppButton to="/">使い方ガイド</AppButton>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/img/main_screenshot.png"
                alt="メインスクリーンショット"
                class="home-header__main-screenshot"
              />
            </div>
          </div>
        </AppContainer>
      </div>
      <section class="about">
        <AppContainer small>
          <h2 class="about__heading">
            学園祭実行委員会と参加企画の<br />コミュニケーションを支援するウェブシステム
          </h2>
          <p>
            PortalDots(ポータルドット)は、学園祭実行委員会と参加企画のコミュニケーションを支援するウェブシステムです。ログイン機能の構築、お知らせメールの一斉配信や各種申請の受付をオンラインで行うことができます。開発は東京理科大学の学園祭実行委員経験者が主導するボランティアの開発チームによって行っています。PortalDotsはオープンソースです。
          </p>
        </AppContainer>
      </section>
      <section class="screenshots-slide">
        <AppContainer>
          <img
            src="@/assets/img/screenshots/screenshot_form_editor.png"
            style="
              width: 100%;
              height: auto;
              display: block;
              border-radius: 0.5rem;
              box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
            "
          />
        </AppContainer>
      </section>
      <section class="features">
        <AppContainer>
          <h2 class="features__heading">こんな機能があります</h2>
          <div class="row">
            <div class="col-md-3 col-sm-6 features__item">
              <h3 class="features__subheading is-login">
                ログインシステムによる<br />ユーザー管理
              </h3>
              <p class="features__description">
                ログイン機能・ユーザー登録機能を標準搭載しています。学籍番号による本人確認や、記入間違いの発生しやすいメールアドレスの認証機能も備わっています。
              </p>
            </div>
            <div class="col-md-3 col-sm-6 features__item">
              <h3 class="features__subheading is-circles">
                オンラインで<br />企画参加登録を受付
              </h3>
              <p class="features__description">
                企画参加登録をPortalDots上で受付できます。企画・団体情報の入力、企画責任者の登録、参加登録の提出がオンラインで完結します。もちろん、受付期間の設定も可能です。
              </p>
            </div>
            <div class="col-md-3 col-sm-6 features__item">
              <h3 class="features__subheading is-pages">
                お知らせメールの<br />一斉配信
              </h3>
              <p class="features__description">
                企画担当者へメールを一斉配信できます。メールアドレスはユーザー登録時に事前入力してもらうため、メールアドレスを収集する手間も省けます。
              </p>
            </div>
            <div class="col-md-3 col-sm-6 features__item">
              <h3 class="features__subheading is-documents">
                配布資料PDFの<br />ダウンロード機能提供
              </h3>
              <p class="features__description">
                参加企画向け資料のPDFファイルをPortalDotsで配布することができます。PDFファイルの登録作業も簡単です。もちろん、Word・Excelファイルの配布も可能です。
              </p>
            </div>
            <div class="col-md-3 col-sm-6 features__item">
              <h3 class="features__subheading is-forms">
                プログラミング不要の<br />
                申請フォーム作成
              </h3>
              <p class="features__description">
                ブース希望調査、公式パンフ掲載情報、当日車両入構の申請を、オンラインフォームで受付できます。Googleフォーム等とは異なり、企画ごとの回答可能数を制限できます。
              </p>
            </div>
            <div class="col-md-3 col-sm-6 features__item">
              <h3 class="features__subheading is-database">
                企画・ブース情報の<br />
                データベース
              </h3>
              <p class="features__description">
                データが委員会内でバラバラになりがちなExcelからサヨナラしましょう。学園祭運営で必要な企画・ブース情報をPortalDots上で一元管理できます。
              </p>
            </div>
            <div class="col-md-3 col-sm-6 features__item">
              <h3 class="features__subheading is-export">
                収集した情報は<br />
                CSV形式でダウンロード
              </h3>
              <p class="features__description">
                PortalDotsに登録されたユーザー情報や申請フォームへの回答はCSV形式でダウンロードできます。
              </p>
            </div>
            <div class="col-md-3 col-sm-6 features__item">
              <h3 class="features__subheading is-smartphone">
                スマートフォンにも<br />対応
              </h3>
              <p class="features__description">
                PortalDotsの企画担当者向けページはスマートフォンに完全対応。スタッフ向けページも一部を除き対応しています。
              </p>
            </div>
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

export default {
  components: {
    AppContainer,
    AppButton,
  },
  head() {
    return head()
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  height: $app-header-height;
  z-index: $z-index-app-header;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  &__container {
    display: flex;
    align-items: center;
    height: 100%;
    padding-top: $spacing-md;
    padding-bottom: $spacing-md;
  }

  &__logo-link {
    display: block;
    height: 100%;
    padding: $spacing-sm;
  }

  &__logo {
    display: block;
    height: 100%;
    width: auto;
  }

  &__nav {
    display: flex;
    height: 100%;
    margin-left: auto;
    align-items: center;

    &__item {
      display: flex;
      height: 100%;
      padding: 0 $spacing-md;
      align-items: center;
      text-decoration: none;
      color: $color-text;

      &.is-button {
        border: 1.5px solid $color-primary;
        color: $color-primary;
        border-radius: 9999px;
        font-weight: bold;
        margin-left: $spacing-md;
      }

      &:hover {
        opacity: 0.75;
      }
    }
  }
}

.home-header {
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.9)
    ),
    linear-gradient(150deg, #{$color-primary}, #{$color-primary-2});
  padding: $app-header-height 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  &__row {
    align-items: center;
  }

  &__copy {
    font-size: 2.25rem;
    line-height: 1.4;
    margin: 0 0 0.75rem;
    color: transparent;
    background: linear-gradient(150deg, #{$color-primary}, #{$color-primary-2});
    background-clip: text;
    -webkit-background-clip: text;
  }

  &__description {
    margin: 0 0 0.75rem;
    font-weight: bold;
  }

  &__actions {
    margin-top: $spacing;
  }

  &__main-screenshot {
    display: block;
    width: 65vw;
    min-width: 200%;
    height: auto;
    margin-left: -1.5rem;

    @media screen and (max-width: 767.5px) {
      width: 150%;
      min-width: 1px;
      margin-left: -50%;
      margin-top: $spacing-lg;
    }
  }
}

.about {
  padding: 4vmax 0;
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.95)
    ),
    left top / 60vmax url(~assets/img/logotype.svg) no-repeat;

  &__heading {
    font-size: 1.75rem;
    line-height: 1.4;
    margin: 0 0 0.75rem;
  }
}

.features {
  padding: $spacing-xl 0;

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
</style>
