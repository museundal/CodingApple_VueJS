<template>
    <div class="black-bg" v-if="모달창열렸니 == true">
        <div class="white-bg">
            <img :src="원룸들[누른거].image" style="width: 50%;">
            <h4>{{ 원룸들[누른거].title }}</h4>
            <p>{{ 원룸들[누른거].content }}</p>
            <input v-model="month">
            <p>{{ month }}개월 선택함 : {{ 원룸들[누른거].price * month }}원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            month: 1,
        }
    },
    props: {
        원룸들: Array,
        누른거: Number,
        모달창열렸니: Boolean
    }
}
</script>

<style>
.black-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}

.white-bg {
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
}
</style>