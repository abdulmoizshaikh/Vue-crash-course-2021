<template>
  <div class="home">
    <div class="container">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <Header
        title="Task tracker"
        @toggle-add-task="toggleAddTask"
        :showAddTask="showAddTask"
      />
      <div v-if="showAddTask">
        <AddTask @add-task="AddTask" />
      </div>
      <Tasks
        :tasks="tasks"
        @delete-task="deleteTask"
        @toggle-reminder="toggleReminder"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "../components/Header.vue";
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Header,
    AddTask,
    Tasks,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    AddTask(task) {
      console.log("task", task);
      this.tasks = [...this.tasks, task];
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    deleteTask(id) {
      if (confirm("Are you sure you want to delete")) {
        this.tasks = this.tasks.filter((task) => task.id != id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at school",
        day: "March 2nd at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food shopping",
        day: "March 3rd at 11:00am",
        reminder: false,
      },
    ];
  },
};
</script>
