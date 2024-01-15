<template>
    <div v-for="blog in 블로그글" :key="blog">
        <h5 @click="$router.push('/detail/' + blog.number)">{{ blog.title }}</h5>
        <p>{{ blog.date }}</p>
    </div>
</template>

<script>
export default {
    name: 'list', // 컴포넌트를 만들었으니 이름 쓰는 것도 좋은 방법 
    props: {
        블로그글: Array,
    }
}
</script>

<style></style> 