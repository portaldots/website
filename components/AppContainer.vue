<template>
  <div class="app-container" :class="{ 'is-small': small }">
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
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 0 $spacing-md;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;

  &.is-small {
    max-width: 800px;
  }
}
</style>
