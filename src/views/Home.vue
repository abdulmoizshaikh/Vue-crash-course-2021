<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <AddTask v-if="showAddTask" @add-task="AddTask" />

    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    AddTask,
    Tasks,
  },
  props: {
    showAddTask: Boolean,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async AddTask(task) {
      let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      };
      const response = await fetch("api/tasks", config);
      let result = await response.json();
      this.tasks = [...this.tasks, result];
    },

    async deleteTask(id) {
      if (confirm("Are you sure you want to delete")) {
        // delete api
        let config = { method: "DELETE" };
        const res = await fetch(`api/tasks/${id}`, config);
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id != id))
          : alert("Error in delete task");
      }
    },

    async toggleReminder(id) {
      let taskToToggle = await this.fetchTasksById(id);
      const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      let config = {
        method: "PUT",
        body: JSON.stringify(updatedTask),
        headers: { "Content-Type": "application/json" },
      };
      const res = await fetch(`api/tasks/${id}`, config);
      const data = await res.json();

      this.tasks = this.tasks.map((_task) =>
        _task.id === id ? { ..._task, reminder: data.reminder } : _task
      );
    },

    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },

    async fetchTasksById(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },

  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
