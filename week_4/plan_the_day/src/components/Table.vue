<template>
  <div>
    <!-- <AddTodo v-on:add-todo="addTodo" /> -->
    <b-table striped hover :items="todos" :fields="tableColumns">
      <template v-slot:cell(completed)="data">
        <input type="checkbox" v-model="data.item.completed" />
      </template>
      <template v-slot:cell(title)="data">
        <input type="text" v-model="data.item.title" />
      </template>
      <template slot="completed" slot-scope="row">
        <b-form-group>console.log({{ row }})</b-form-group>
      </template>
    </b-table>
    <!-- <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> -->
  </div>
</template>

<script>
import Todos from "@/components/Todos";
// import AddTodo from "@/components/AddTodo";
export default {
  name: "Table",
  components: {
    Todos
    // AddTodo
  },
  data() {
    return {
      tableColumns: [
        { key: "completed", label: "", sortable: false },
        { key: "userId", label: "Title", sortable: false },
        { key: "title", label: "Description", sortable: false }
      ]
    };
  },
  props: ["todos"],
  created() {}
};
</script>

<style>
</style>