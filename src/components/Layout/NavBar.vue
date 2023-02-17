<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav id="navBar">
        <div id="title">Pinia Todo List Practice</div>
        <div id="linkContainer">
            <RouterLink to="/">View Todo</RouterLink>
            <RouterLink to="/addTodo">Add Todo</RouterLink>
        </div>
    </nav>
</template>

<style scoped lang="scss">
$font_fam : 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

#navBar {
    height: 25%;
    background-color: antiquewhite;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#title {
    font-size: 50px;
    font-family: $font_fam;

    margin: 20px;
}

a {
    margin: 10px;

    text-decoration: none;
    font-family: $font_fam;
    font-size: 20px;
    color: gray;

    &:hover::after {
        content: "→";
        color: black;
    }
}
</style>