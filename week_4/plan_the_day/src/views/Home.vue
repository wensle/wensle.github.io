<template>
  <div class="home">
    <Table v-bind:todos="todos" />
  </div>
</template>

<script>
import Table from "@/components/Table";
import axios from "axios";

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Table
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`http://my-json-server.typicode.com/wensle/wensle.github.io/todos${id}`)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("http://my-json-server.typicode.com/wensle/wensle.github.io/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("http://my-json-server.typicode.com/wensle/wensle.github.io/todos")
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>
