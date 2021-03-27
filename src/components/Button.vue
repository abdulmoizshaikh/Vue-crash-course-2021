<template>
  <button
    class="btn"
    :style="{ backgroundColor: color }"
    @click="$emit('btn-click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
};
</script>

<style scoped>
</style>