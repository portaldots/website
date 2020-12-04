<template>
  <footer class="app-footer">
    <AppContainer>
      <div class="app-footer__content">
        <div class="row app-footer__row">
          <div class="col-md-4">© PortalDots Dev Team</div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <ul class="app-footer__social" aria-label="ソーシャルメディア">
              <li class="app-footer__social__listitem">
                <a
                  href="mailto:portal-dots@hrgrweb.com"
                  class="app-footer__social__link"
                  aria-label="PortalDotsにメールで問い合わせる"
                >
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </a>
              </li>
              <li class="app-footer__social__listitem">
                <a
                  href="https://github.com/portal-dots/PortalDots"
                  class="app-footer__social__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PortalDotsのGitHub"
                >
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </li>
              <li class="app-footer__social__listitem">
                <a
                  href="https://twitter.com/PortalDots"
                  class="app-footer__social__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PortalDotsのTwitter"
                >
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AppContainer>
    <client-only>
      <VueCookieLaw button-text="OK" button-class="cookie-button">
        <template v-slot:message>
          当ウェブサイトは「Google
          アナリティクス」を利用し、匿名のトラフィックデータを収集しています。
          閲覧を続けることにより、トラフィックデータ収集のため Cookie
          が利用されることに同意したものとみなします。
          <a
            href="https://www.google.com/intl/ja/policies/privacy/partners/"
            target="_blank"
          >
            Google アナリティクスでデータが収集、処理される仕組みについて
          </a>
        </template>
      </VueCookieLaw>
    </client-only>
  </footer>
</template>

<script>
import AppContainer from '@/components/AppContainer.vue'

export default {
  components: {
    AppContainer,
  },
}
</script>

<style lang="scss">
.Cookie--base {
  background: $color-bg-light !important;
  box-shadow: 0 -2px 4px rgba(#000, 0.1);
}

.Cookie__content {
  margin: 0 !important;
}

.cookie-button {
  appearance: none;
  border: none;
  cursor: pointer;
  background: $color-primary;
  display: inline-block;
  padding: $spacing-sm $spacing-lg;
  text-decoration: none;
  color: $color-bg-white;
  font-weight: bold;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.8rem rgba($color-primary, 0.2);
  transition: 0.25s ease all;

  &:hover {
    box-shadow: 0 0.4rem 1rem rgba($color-primary, 0.4);
  }
}
</style>

<style lang="scss" scoped>
.app-footer {
  margin: 0;
  color: #fff;
  background: $color-muted;

  @media screen and (max-width: 767.5px) {
    text-align: center;
  }

  &__content {
    padding-top: $spacing-lg;
    padding-bottom: $spacing-lg;
  }

  &__row {
    align-items: center;
  }

  &__social {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 767.5px) {
      justify-content: center;
    }

    &__listitem {
    }

    &__link {
      display: block;
      padding: $spacing-md;
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
      transition: 0.3s ease all;

      &:hover {
        opacity: 0.75;
      }
    }
  }
}
</style>
