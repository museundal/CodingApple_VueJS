<template>
    <div>
        <h4>상세페이지</h4>
        <h5>{{ 블로그글[$route.params.id].title }} </h5>
        <p>{{ 블로그글[$route.params.id].content }}</p>
        <div class="mt-4">
            <router-view></router-view> <!-- <List :블로그글="블로그글" /> , 라우터로 설정한 컴포넌트를 보여줄 자리 -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'detail',
    props: {
        블로그글: Array,
    }

}
</script>

<style></style>