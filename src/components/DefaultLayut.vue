<template>
    <div>
        <navBar/>
    </div>

    <div class="componentbg">
        <router-view/>
    </div>
</template>

<script setup>
import navBar from './navBar.vue';
</script>
