<template>
  <header>
    <nuxt-link
      to="/docs/"
      class="inline-block px-2 py-1 -mx-2 -my-1 mb-3 rounded hover:no-underline hover:bg-blue-50 transition"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="mr-1" />
      マニュアル
    </nuxt-link>
    <div
      class="py-10 flex flex-col md:flex-row items-center justify-center border-t border-gray-100"
    >
      <div class="flex-none flex justify-center">
        <div
          class="bg-indigo-50 rounded w-24 h-24 flex items-center justify-center text-4xl"
        >
          {{ emoji }}
        </div>
      </div>
      <div class="w-5 h-5" />
      <div class="flex-grow text-center md:text-left">
        <h1 class="text-3xl font-bold">{{ title }}</h1>
        <p v-if="description" class="md:text-xl mt-3 text-gray-600">
          {{ description }}
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
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
      default: null,
    },
  },
}
</script>
