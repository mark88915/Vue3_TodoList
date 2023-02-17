<script setup>
    import { useTodoesStore } from '../stores/todoesStore.js';
    import { storeToRefs } from 'pinia';
    import TodoItem from '../components/ViewTodo/todoItem.vue';

    const store = useTodoesStore();
    const { todoes } = storeToRefs(store);
</script>

<template>
    <div id="todoList">
        <TodoItem v-for="todo in todoes" :todo-data="todo" />
    </div>
</template>