<template>
  <div :key="task.id" v-for="(task, index) in tasks">
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id, index)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>


<script>
import Task from "./Task.vue";

export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "toggle-reminder"],
};
</script>

<style scoped>
</style>