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

<style scoped lang="scss">
#todoList {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 50px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.500);
        }
    }
}
</style>