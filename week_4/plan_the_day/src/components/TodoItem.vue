<template>
  <div>
    <input type="text" v-bind:class="{' is-complete':todo}" v-model="todo" />
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
table td input {
  width: 100%;
}
input {
  display: block;
  padding: 0;
  margin: 0;
  border: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0);
}
td {
  margin: 0;
  padding: 0;
}
</style>