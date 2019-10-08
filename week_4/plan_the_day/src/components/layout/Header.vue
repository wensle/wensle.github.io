<template>
  <header class="header">
    <h1>
      Plan the day:
      <span id="accent">Productivity</span>
    </h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  font-family: "Old Standard TT", serif;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}

.header h1 {
  font-size: 10em;
}

.header #accent {
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
}
</style>