<script setup>

import { reactive } from 'vue';
import { useTodoesStore } from '../../stores/todoesStore';
import { preventKeyBoardInputTodoDeadline } from '../../util/commonTool.js'

const todoesStore = useTodoesStore();

const props = defineProps({
    todoData: {
        type: Object
    }
})

const updatedTodoData = reactive({
    todoName: props.todoData.todoName,
    todoDeadline: props.todoData.todoDeadline,
    todoSummary: props.todoData.todoSummary
})

const emit = defineEmits(["closePopup"]);

const closePopUp = () => {
    emit("closePopup");
}

const handleUpdateTodo = () => {
    todoesStore.updateTodo(props.todoData.id, updatedTodoData);
    closePopUp();
}
</script>

<template>
    <div id="uiBlock">
        <div id="todoModifyForm">
            <span id="popUpTitle">Modify</span>

            <label for="todoName" class="dataLabel">Todo Name：</label>
            <input id="todoName" type="text" class="todoContent" v-model="updatedTodoData.todoName" />

            <label for="todoDeadline" class="dataLabel">Todo Deadline：</label>
            <input id="todoDeadline" type="date" class="todoContent" v-model="updatedTodoData.todoDeadline" @keydown="preventKeyBoardInputTodoDeadline"/>

            <label for="todoSummary" class="dataLabel">Todo Summary：</label>
            <textarea id="todoSummary" class="todoContent" v-model="updatedTodoData.todoSummary"></textarea>

            <div id="todoModifyButtonGroup">
                <button @click="handleUpdateTodo">Confirm</button>
                <button @click="closePopUp">Cancel</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$content_font_size : 20px;
$content_margin : 10px;

#uiBlock {
    width: 100%;
    height: 100%;
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.3);
}

#todoModifyForm {
    width: 600px;
    height: 500px;
    position: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5%;
    box-shadow: 5px 5px rgb(0, 0, 0, 0.8);

    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
}

#popUpTitle {
    font-size: 60px;
    margin: $content_margin;
}

.dataLabel {
    font-size: $content_font_size;
    margin-top: $content_margin;
}

.todoContent {
    font-size: $content_font_size;
    width: 300px;
}

#todoSummary {
    resize: none;
    height: 30%;
}

#todoModifyButtonGroup {
    margin-top: $content_margin;

    button {
        margin: $content_margin;
        padding: 10px 20px;
        border: 0px;
        border-radius: 10px;

        font-size: $content_font_size;

        &:hover {
            background-color: rgba(128, 128, 128, 0.300);
        }

        &:active {
            background-color: gray;
        }
    }
}
</style>