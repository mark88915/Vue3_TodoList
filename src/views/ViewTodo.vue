<script setup>
    import { useTodoesStore } from '../stores/todoesStore.js';
    import { storeToRefs } from 'pinia';
    import TodoItem from '../components/ViewTodo/TodoItem.vue';

    const todoesStore = useTodoesStore();
    const { todoes } = storeToRefs(todoesStore);
</script>

<template>
    <div id="todoList">
        <TodoItem v-for="todo in todoes" :todo-data="todo" />
    </div>
</template>

<style scoped>
#todoList {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>