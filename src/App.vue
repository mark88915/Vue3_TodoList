<script setup>
import NavBar from './components/Layout/NavBar.vue';
import ContentContainer from './components/Layout/ContentContainer.vue';
</script>

<template>
  <NavBar />
  <ContentContainer />
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}
</style>
