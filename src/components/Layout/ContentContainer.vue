<script setup>
    import { RouterView } from 'vue-router';
</script>

<template>
    <div id="container">
        <RouterView />
    </div>
</template>

<style scoped>
    #container {
        height: 75%;
        background-color:silver;
        overflow-y: hidden;
    }
</style>