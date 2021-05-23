<template>
  <nuxt-link
    :to="to"
    class="block text-gray-800 hover:bg-gray-50 px-7 hover:no-underline hover:text-gray-800 relative"
  >
    <div class="border-b border-gray-200 py-7">
      <div class="text-xl font-bold mb-1">{{ title }}</div>
      <div class="text-gray-500">{{ description }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
