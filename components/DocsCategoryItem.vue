<template>
  <component
    :is="!comingSoon ? 'nuxt-link' : 'div'"
    :to="!comingSoon ? to : undefined"
    class="flex flex-col items-stretch text-gray-800 bg-white p-5 rounded-md shadow-md transition duration-200 transform border border-gray-100"
    :class="
      !comingSoon
        ? 'hover:no-underline hover:text-gray-800 hover:shadow-lg hover:-translate-y-1'
        : 'opacity-50'
    "
  >
    <div class="flex-none flex justify-center mb-4">
      <div
        class="bg-indigo-50 rounded w-20 h-20 flex items-center justify-center text-4xl"
      >
        {{ emoji }}
      </div>
    </div>
    <div class="flex-grow">
      <div v-if="comingSoon" class="text-center mb-2">
        <div
          class="inline-block text-gray-500 bg-gray-100 border border-gray-200 px-2 rounded-full text-sm"
        >
          Coming Soon
        </div>
      </div>
      <div class="text-xl font-bold mb-2 text-center">{{ title }}</div>
      <div class="text-gray-500">{{ description }}</div>
    </div>
  </component>
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
    comingSoon: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
