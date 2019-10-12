<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <div id="app">
          <Header />
          <router-view />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from "@/components/layout/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Old+Standard+TT|Roboto+Mono&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
