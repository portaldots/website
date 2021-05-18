<template>
  <header class="app-header" :class="{ 'is-not-top': !isTop }">
    <AppContainer class="app-header__container">
      <nuxt-link
        to="/"
        class="app-header__logo-link"
        :aria-hidden="isOpen ? 'true' : 'false'"
      >
        <img
          src="@/assets/img/logotype_with_symbol.svg"
          class="app-header__logo"
          alt="PortalDots"
        />
      </nuxt-link>
      <button
        class="app-header__toggle"
        :class="{ 'is-open': isOpen }"
        aria-label="グローバルメニューを開閉"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-controls="appHeaderNav"
        @click="toggle"
      >
        <span class="app-header__toggle__bar" aria-hidden="true"></span>
        <span class="app-header__toggle__bar" aria-hidden="true"></span>
        <span class="app-header__toggle__bar" aria-hidden="true"></span>
      </button>
      <nav
        id="appHeaderNav"
        class="app-header__nav"
        :class="{ 'is-open': isOpen }"
        aria-label="グローバルメニュー"
        @click="toggle"
      >
        <nuxt-link to="/" class="app-header__nav__item">ホーム</nuxt-link>
        <nuxt-link to="/docs/" class="app-header__nav__item">
          マニュアル
        </nuxt-link>
        <!-- <nuxt-link to="/" class="app-header__nav__item">
          お問い合わせ
        </nuxt-link> -->
        <a
          href="https://github.com/portal-dots/PortalDots"
          class="app-header__nav__item"
          target="_blank"
          rel="noopener noreferrer"
          lang="en"
        >
          GitHub<font-awesome-icon
            :icon="['fas', 'external-link-alt']"
            class="app-header__nav__item__icon"
          />
        </a>
        <nuxt-link to="/download/" class="app-header__nav__item is-button">
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
      isTop: true,
      isOpen: false,
    }
  },
  mounted() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      this.$emit('toggleNav', this.isOpen)
    },
    onScroll() {
      this.isTop = window.scrollY < 30
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  padding-top: #{($app-header-height-top - $app-header-height) / 2};
  padding-bottom: #{($app-header-height-top - $app-header-height) / 2};
  height: $app-header-height-top;
  z-index: $z-index-app-header;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.3s ease all;
  will-change: height, padding;

  &.is-not-top {
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: $app-header-height;
    padding: 0;
  }

  &__container {
    display: flex;
    align-items: center;
    height: 100%;
    padding-top: $spacing-sm;
    padding-bottom: $spacing-sm;
  }

  &__logo-link {
    display: block;
    height: 100%;
    padding: $spacing-sm 0;
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

    &__item {
      display: flex;
      padding: 0 $spacing-md;
      align-items: center;
      text-decoration: none;
      color: $color-text;
      align-self: stretch;

      &.is-button {
        border: 1.5px solid $color-primary;
        color: $color-primary;
        border-radius: 9999px;
        font-weight: bold;
        margin-left: $spacing-md;
        align-self: center;
      }

      &:hover {
        opacity: 0.75;
      }

      &__icon {
        margin-left: $spacing-sm;
        opacity: 0.6;
        font-size: 80%;
      }
    }
  }

  &__toggle {
    display: none;
  }

  @media screen and (max-width: 767.5px) {
    height: $app-header-height;
    padding-top: 0;
    padding-bottom: 0;

    &__nav {
      visibility: hidden;
      transform: scale(1.1);
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
      padding: $spacing;
      z-index: $z-index-app-header-toggle;
      overflow: hidden;
      $inner-width: ($app-header-height) - ($spacing * 2);
      $inner-height: $app-header-height - ($spacing * 2);

      &__bar {
        position: relative;
        display: block;
        width: 100%;
        height: 2px;
        border-radius: 1.5px;
        background: $color-text;
        transition: 0.3s ease all;
        top: 0;
      }

      &.is-open &__bar {
        &:nth-child(1) {
          transform: translateY(#{$inner-height / 2}) translateY(-1.5px)
            rotate(45deg);
        }
        &:nth-child(2) {
          transform: translateX(120%);
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-#{$inner-height / 2}) translateY(0.5px)
            rotate(-45deg);
        }
      }
    }
  }
}
</style>
