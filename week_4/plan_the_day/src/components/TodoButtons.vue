<template>
  <div>
    <p class="todo-item" v-bind:class="{' is-complete':todo}">
      <!-- <input type="checkbox" v-on:change="markComplete" /> -->
      <button class="del material-icons" @click="$emit('del-todo', todo.id)">delete_outline</button>
      <button
        class="material-icons"
        v-on:change="markComplete"
        @click="markComplete"
      >check_circle_outline</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo = !this.todo;
      console.log(this);
    }
  }
};
</script>

<style scoped>
button {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

button:hover {
  color: #fb8c00;
}
</style>