<script setup>
import { reactive } from 'vue';
import { useTodoesStore } from '../stores/todoesStore.js';
import { preventKeyBoardInputTodoDeadline} from '../util/commonTool.js'

const todoData = reactive({
    todoName: "",
    todoDeadline: new Date().toISOString().substring(0, 10),
    todoSummary: "",
});

const clearTodoInput = () => {
    todoData.todoName = "";
    todoData.todoDeadline = new Date().toISOString().substring(0, 10);
    todoData.todoSummary = "";
}

const todoesStore = useTodoesStore();

const handleAddTodo = () => {
    if (todoData.todoName === '' || todoData.todoSummary === '') {
        console.log("please input something");
        return;
    }

    todoesStore.addTodo(todoData.todoName, todoData.todoDeadline, todoData.todoSummary);
    clearTodoInput();
}

</script>

<template>
    <div id="todoInputContainer">
        <ul id="inputGroup">
            <ol>
                Todo Name：<br>
                <input id="todoName" type="text" v-model="todoData.todoName" />
            </ol>
            <ol>
                Todo Deadline：<br>
                <input id="todoDeadline" type="date" v-model="todoData.todoDeadline" @keydown="preventKeyBoardInputTodoDeadline"/>
            </ol>
            <ol>
                Todo Summary：<br>
                <textarea id="todoSummary" v-model="todoData.todoSummary"></textarea>
            </ol>
        </ul>
        <div id="buttonGroup">
            <button class="functionBtn" id="addTodoBtn" @click="handleAddTodo">Add</button>
            <button class="functionBtn" id="clearBtn" @click="clearTodoInput">Clear</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
$inputWidth : 300px;
$font_Size : 30px;

#todoInputContainer {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
}

#inputGroup {
    transform: translateX(-10%);
}

ol {
    font-size: $font_Size;
    margin: 10px;
}

#todoName, #todoDeadline, #todoSummary {
    font-size: $font_Size;
    width: $inputWidth;
}

#todoSummary {
    height: 200px;
    resize: none;
}

.functionBtn {
    font-size: $font_Size;
    margin: 10px;
    padding: 10px;
    border-radius: 20%;
    border: 0px;
}

#addTodoBtn {
    background-color: lightgreen;

    &:active {
        background-color: green;
    }
}

#clearBtn {
    background-color: lightcoral;

    &:active {
        background-color: red;
    }
}
</style>