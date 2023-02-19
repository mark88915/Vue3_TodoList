<script setup>
import { useTodoesStore } from '../../stores/todoesStore.js';

const props = defineProps({
    todoData: {
        type: Object
    },
});

const todoesStore = useTodoesStore();

const handleDeleteTodo = () => {
    todoesStore.deleteTodo(props.todoData.id);
}

const handleUpdateTodo = () => {
    
}

</script>

<template>
    <div class="todoItem">
        <div class="todoContent todoId">{{ props.todoData.id }}</div>
        <div class="todoContent todoName">{{ props.todoData.todoName }}</div>
        <div class="todoContent todoDate">{{ props.todoData.todoDate }}</div>
        <div class="todoContent todoSummary">{{ props.todoData.todoSummary }}</div>
        <div class="todoContent itemBtnGroup">
            <button class="modifyTodo">Modify</button>
            <button class="deleteTodo" @click="handleDeleteTodo">Delete</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.todoItem {
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #fff;
    width: 70%;
    height: 100px;
    margin: 10px;
    
    border: solid 2px black;
    border-radius: 30px;
}

.itemBtnGroup {
    display: flex;
    flex-direction: column;
}

.itemBtnGroup button {
    margin: 10px;
    border: 0px;
    border-radius: 5px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.8);
    font-size: 20px;

    &:active {
        transform: translateY(5px);
        box-shadow: 3px 3px rgba(0, 0, 0, 0.8);
    }
}

.todoContent {
    width: 120px;
}

.modifyTodo {
    background-color: rgb(255, 255, 148);

    &:active {
        background-color: yellow;
    }
}

.deleteTodo {
    background-color: lightcoral;

    &:active {
        background-color: red;
    }
}
</style>