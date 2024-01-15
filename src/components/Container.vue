<template>
    <div>
        <Post v-for="(post, index) in 인스타게시글" :key="index" :post-data="post" />
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
    name: 'container',
    components: {
        Post,
    },
    props: {
        인스타게시글: Array
    },

}
</script>

<style></style>