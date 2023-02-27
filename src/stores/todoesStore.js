import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useTodoesStore = defineStore('todoes', () => {
    const todoes = reactive([]);

    const initTodoes = (defaultTodoes) => {
        Object.assign(todoes, defaultTodoes);
    }

    const addTodo = (name, deadline, summary) => {
        todoes.push({
            id: todoes.length + 1,
            todoName: name,
            todoDeadline: deadline,
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

    const updateTodo = (todoId, updatedContent) => {
        todoes[todoId - 1].todoName = updatedContent.todoName;
        todoes[todoId - 1].todoDeadline = updatedContent.todoDeadline;
        todoes[todoId - 1].todoSummary = updatedContent.todoSummary;
    }

    return {todoes, addTodo, deleteTodo, updateTodo, initTodoes};
});