<template>
  <div>
    <!-- <AddTodo v-on:add-todo="addTodo" /> -->
    <b-table striped hover :items="todos" :fields="tableColumns">
      <template v-slot:cell(completed)="data">
        <!-- <input type="checkbox" v-model="data.item.completed" /> -->
        <TodoCompleted v-bind:todo="data.item.completed" />
      </template>
      <template v-slot:cell(title)="data">
        <TodoItem v-bind:todo="data.item.title" />
      </template>
      <template slot="completed" slot-scope="row">
        <b-form-group>console.log({{ row }})</b-form-group>
      </template>
    </b-table>
    <!-- <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> -->
  </div>
</template>

<script>
import TodoCompleted from "@/components/TodoCompleted";
import TodoItem from "@/components/TodoItem";
// import AddTodo from "@/components/AddTodo";
export default {
  name: "Table",
  components: {
    TodoCompleted,
    TodoItem
    // AddTodo
  },
  data() {
    return {
      tableColumns: [
        { key: "completed", label: "Completed", sortable: false },
        { key: "userId", label: "id", sortable: false },
        { key: "title", label: "Title", sortable: false }
      ]
    };
  },
  props: ["todos"],
  created() {}
};
</script>

<style>
</style>