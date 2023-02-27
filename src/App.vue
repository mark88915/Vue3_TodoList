<script setup>
import NavBar from './components/Layout/NavBar.vue';
import ContentContainer from './components/Layout/ContentContainer.vue';
import { onMounted } from 'vue';
import { useTodoesStore } from './stores/todoesStore.js'

const todoesStore = useTodoesStore();

onMounted(() => {
  fetch('../src/assets/mockData/mockTodo.json')
  .then((response) => response.json())
  .then((jsonifyTodoesData) => {
    todoesStore.initTodoes(jsonifyTodoesData.todoes);
  })
})
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
