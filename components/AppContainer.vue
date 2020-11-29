<template>
  <div class="app-container" :class="{ 'is-small': small, 'is-wide': wide }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-left: $spacing;
  padding-right: $spacing;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;

  &.is-wide {
    max-width: 1600px;
  }

  &.is-small {
    max-width: 800px;
  }
}
</style>
