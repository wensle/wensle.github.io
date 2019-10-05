<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add todo" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
// Not needed with placeholder json
// ID wordt al meegegeven vanaf placeholder json
// import uuid from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        // Not needed with placeholder json.
        // ID wordt al meegegeven vanaf placeholder json
        // id: uuid.v4(),
        title: this.title,
        completed: false
      };
      // Send up to parent
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
</style>