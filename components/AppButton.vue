<template>
  <component
    :is="componentIs"
    :href="href ? href : undefined"
    :to="to ? to : undefined"
    class="app-button"
    :class="{ 'is-flat': flat, 'is-primary': primary, 'is-wide': wide }"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    componentIs() {
      if (this.href) return 'a'
      if (this.to) return 'nuxt-link'
      return 'button'
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.app-button {
  appearance: none;
  border: none;
  cursor: pointer;
  background: $color-bg-white;
  display: inline-block;
  padding: $spacing-sm $spacing;
  text-decoration: none;
  color: $color-primary;
  font-weight: bold;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.8rem rgba($color-primary, 0.2);
  transition: 0.25s ease all;

  &.is-flat {
    background: transparent;
    box-shadow: none;

    &:hover {
      opacity: 0.75;
    }
  }

  &.is-primary {
    background: $color-primary;
    color: $color-bg-white;
  }

  &.is-wide {
    padding-left: $spacing-lg;
    padding-right: $spacing-lg;
  }

  &:not(.is-flat):hover {
    box-shadow: 0 0.4rem 1rem rgba($color-primary, 0.4);
  }
}
</style>
