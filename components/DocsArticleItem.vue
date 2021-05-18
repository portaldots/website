<template>
  <nuxt-link
    :to="to"
    class="block text-gray-800 bg-gray-50 hover:bg-gray-100 border border-gray-100 p-5 md:p-8 rounded-md hover:no-underline hover:text-gray-800 transition duration-200"
  >
    <div class="text-xl font-bold mb-2">{{ title }}</div>
    <div class="text-gray-500">{{ description }}</div>
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
