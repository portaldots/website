<template>
  <div class="p-5 my-3 lg:my-5 border-l-4 flex" :class="stylingClassName">
    <font-awesome-icon :icon="icon" class="opacity-50 mt-2" fixed-width />
    <div class="pl-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    stylingClassName() {
      const types = {
        info: 'border-blue-300 bg-blue-50 text-blue-800',
        warning: 'border-yellow-300 bg-yellow-50 text-yellow-800',
        infoInverse: 'border-blue-300 bg-white text-blue-800 shadow',
      }
      return types[this.type]
    },
    icon() {
      const types = {
        info: ['fas', 'info-circle'],
        warning: ['fas', 'exclamation-triangle'],
        infoInverse: ['fas', 'info-circle'],
      }
      return types[this.type]
    },
  },
}
</script>
