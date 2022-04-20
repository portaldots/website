<template>
  <div
    class="container mx-auto px-4"
    :class="{ 'max-w-screen-md': small, 'max-w-screen-2xl': wide }"
  >
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
