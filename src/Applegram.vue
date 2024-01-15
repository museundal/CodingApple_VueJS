<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li>Next</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :인스타게시글="인스타게시글" />

    <div class="footer">
        <ul class="footer-button-plus">
            <input type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</template>

<script>
import Container from './components/Container.vue'
import appleData from './assets/appleData.js'
export default {
    name: 'appleGram',
    components: {
        Container,
    },
    data() {
        return {
            인스타게시글: appleData,
        }
    },

}
</script>

<style>
@import 'style.css';
</style>