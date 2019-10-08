<template>
  <div>
    <input type="text" v-bind:class="{' is-complete':todo}" v-model="todo" />
    <button @click="$emit('del-todo', todo.id)" class="del">x</button>
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