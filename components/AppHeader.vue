<template>
  <header class="app-header">
    <AppContainer class="app-header__container">
      <nuxt-link to="/" class="app-header__logo-link">
        <img
          src="@/assets/img/logotype.svg"
          class="app-header__logo"
          alt="PortalDots"
        />
      </nuxt-link>
      <button
        class="app-header__toggle"
        :class="{ 'is-open': isOpen }"
        title="メニューを開閉"
        @click="toggle"
      >
        <span class="app-header__toggle__bar"></span>
        <span class="app-header__toggle__bar"></span>
        <span class="app-header__toggle__bar"></span>
      </button>
      <nav class="app-header__nav" :class="{ 'is-open': isOpen }">
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
</template>

<script>
import AppContainer from '@/components/AppContainer.vue'

export default {
  components: {
    AppContainer,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
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

  &__toggle {
    display: none;
  }

  @media screen and (max-width: 767.5px) {
    &__nav {
      visibility: hidden;
      transform: scale(1.05);
      opacity: 0;
      position: fixed;
      z-index: $z-index-app-header-drawer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      background: $color-bg-white;
      padding: $spacing;
      transition: 0.1s ease all;

      &.is-open {
        visibility: visible;
        transform: scale(1);
        opacity: 1;
      }

      &__item {
        display: block;
        height: auto;
        padding: $spacing-md 0;
        width: 100%;
        text-align: center;

        &.is-button {
          margin: $spacing-md 0 0;
        }
      }
    }

    &__toggle {
      appearance: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      background: none;
      border: none;
      position: absolute;
      right: 0;
      top: 0;
      height: $app-header-height;
      width: $app-header-height;
      padding: $spacing-s;
      z-index: $z-index-app-header-toggle;

      &__bar {
        position: relative;
        display: block;
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: $color-text;
        transition: 0.3s ease all;
      }

      &.is-open &__bar {
        &:nth-child(1) {
          top: calc(50% - 1px);
          transform: rotate(45deg);
          transform-origin: center top;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          top: -50%;
          transform: rotate(-45deg);
          transform-origin: center bottom;
        }
      }
    }
  }
}
</style>
