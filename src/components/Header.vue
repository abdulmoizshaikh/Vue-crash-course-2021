<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>


<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  //   one way
  //   props: ["title"],

  // second way
  props: {
    title: String,
    showAddTask: Boolean,
  },

  // third way
  //   props: {
  //     title: {
  //       type: String,
  //       default: "Hello world", //if no prop of title passed in the default will show on DOM
  //     },
  //   },

  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
