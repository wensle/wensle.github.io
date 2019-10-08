<template>
  <div>
    <p class="todo-item" v-bind:class="{' is-complete':todo}">
      <input type="checkbox" v-on:change="markComplete" />
      <input type="text" v-model="todo" />
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
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
    }
  }
};
</script>

<style scoped>
</style>