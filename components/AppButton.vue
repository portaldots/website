<template>
  <nuxt-link :to="to" class="app-button" :class="{ 'is-primary': primary }">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.app-button {
  background: $color-bg-white;
  display: inline-block;
  padding: $spacing-sm $spacing;
  text-decoration: none;
  color: $color-primary;
  font-weight: bold;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.8rem rgba($color-primary, 0.2);
  transition: 0.25s ease all;

  &.is-primary {
    background: $color-primary;
    color: $color-bg-white;
  }

  &:hover {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.4rem 1rem rgba($color-primary, 0.4);
  }
}
</style>
