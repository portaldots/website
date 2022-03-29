<template>
  <footer class="app-footer">
    <AppContainer>
      <div class="app-footer__content">
        <div class="grid grid-cols-1 md:grid-cols-3 items-center">
          <div>© PortalDots Dev Team</div>
          <div></div>
          <div>
            <ul class="app-footer__social" aria-label="ソーシャルメディア">
              <li class="app-footer__social__listitem">
                <a
                  href="mailto:support@portaldots.com"
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

<style lang="scss" scoped>
.app-footer {
  margin: 0;
  color: #fff;
  background: $color-muted;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  &__content {
    padding-top: $spacing-lg;
    padding-bottom: $spacing-lg;
  }

  &__social {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 1024px) {
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
