<template>
  <nuxt-link
    :to="to"
    class="inline-block px-2 py-1 -mx-2 -my-1 rounded hover:bg-white hover:bg-opacity-60 hover:shadow transform hover:-translate-y-0.5 transition text-indigo-500 hover:text-indigo-600"
  >
    <font-awesome-icon :icon="['fas', 'arrow-left']" class="mr-1" />
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
