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

    return {todoes, addTodo};
});