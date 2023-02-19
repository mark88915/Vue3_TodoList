import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useTodoesStore = defineStore('todoes', () => {
    const todoes = reactive([]);

    const addTodo = (name, date, summary) => {
        todoes.push({
            id: todoes.length + 1,
            todoName: name,
            todoDate: date,
            todoSummary: summary
        });
    }

    const deleteTodo = (todoId) => {
        todoes.splice(todoId - 1, 1);
        todoes.forEach((todo) => {
            if(todo.id > todoId) {
                todo.id = todo.id - 1;
            }
        })
    }

    const updateTodo = (todoId, updateContent) => {
        todoes[todoId - 1].todoSummary = updateContent;
    }

    return {todoes, addTodo, deleteTodo};
});