<template>
  <div class="layout">
    <AppHeader @toggleNav="onToggleNav" />
    <nuxt :aria-hidden="isHeaderNavOpen ? 'true' : 'false'" />
    <AppFooter :aria-hidden="isHeaderNavOpen ? 'true' : 'false'" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      isHeaderNavOpen: false,
    }
  },
  methods: {
    onToggleNav(isOpen) {
      this.isHeaderNavOpen = isOpen
    },
  },
}
</script>

<style scss>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.layout {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>
