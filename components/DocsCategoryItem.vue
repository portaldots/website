<template>
  <nuxt-link
    :to="to"
    class="flex flex-col items-stretch text-gray-800 bg-white p-5 rounded-md shadow-md hover:no-underline hover:text-gray-800 hover:shadow-lg transition duration-200 transform hover:-translate-y-1 border border-gray-100"
  >
    <div class="flex-none flex justify-center mb-4">
      <div
        class="bg-indigo-50 rounded w-20 h-20 flex items-center justify-center text-4xl"
      >
        {{ emoji }}
      </div>
    </div>
    <div class="flex-grow">
      <div class="text-xl font-bold mb-2 text-center">{{ title }}</div>
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
    emoji: {
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
