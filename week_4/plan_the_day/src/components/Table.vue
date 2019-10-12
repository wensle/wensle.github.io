<template>
  <div>
    <!-- <AddTodo v-on:add-todo="addTodo" /> -->
    <b-table small fixed :items="todos" :fields="tableColumns">
      <template v-slot:cell(completed)="data">
        <!-- <input type="checkbox" v-model="data.item.completed" /> -->
        <TodoButtons v-bind="{id: data.item.id, completed: data.item.completed}" />
      </template>
      <template v-slot:cell(title)="data">
        <TodoItem v-bind:todo="data.item.title" />
      </template>
      <template v-slot:cell(start)="data">
        <TodoItem v-bind:todo="data.item.start" />
      </template>
      <template v-slot:cell(duration)="data">
        <TodoItem v-bind:todo="data.item.duration" />
      </template>
      <template v-slot:cell(category)="data">
        <TodoItem v-bind:todo="data.item.category" />
      </template>
      <template v-slot:cell(date)="data">
        <TodoItem v-bind:todo="data.item.date" />
      </template>
      <template v-slot:cell(date)="data">
        <TodoItem v-bind:todo="data.item.date" />
      </template>
    </b-table>
    <!-- <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> -->
  </div>
</template>

<script>
import TodoButtons from "@/components/TodoButtons";
import TodoItem from "@/components/TodoItem";
// import AddTodo from "@/components/AddTodo";
export default {
  name: "Table",
  components: {
    TodoButtons,
    TodoItem
    // AddTodo
  },
  data() {
    return {
      tableColumns: [
        { key: "title", label: "Title", sortable: false },
        { key: "category", label: "Category", sortable: true },
        { key: "date", label: "date", sortable: false },
        { key: "start", label: "start", sortable: false },
        { key: "duration", label: "duration", sortable: false },
        { key: "completed", label: " ", sortable: false }
      ]
    };
  },
  props: ["todos"],
  created() {}
};
</script>

<style>
</style>