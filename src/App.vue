<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <p>{{ 원룸들[누른거].price }}</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="메뉴 in 메뉴들" :key="메뉴">{{ 메뉴 }}</a>
  </div>
  <div v-for="(oneroom, i) in 원룸들" :key="i">
    <img :src="oneroom.image" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{ oneroom.title }}</h4>
    <p>{{ oneroom.price }}원</p>
  </div>
</template>

<script>
import data from './assets/oneroom.js';


export default {
  name: 'App',
  data() {
    return {
      누른거: 0,
      원룸들: data,
      신고수: [0, 0, 0],
      products: ['마포구 원룸', '관악구 원룸', '송파구 원룸'],
      메뉴들: ['Home', 'Shop', 'About'],
      모달창열렸니: false
    }
  },
  components: {

  }
}
</script>

<style>
.body {
  margin: 0
}

div {
  box-sizing: border-box;
}

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

.room-img {
  width: 100%;
  margin-top: 40px;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>