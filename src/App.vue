<template>
  <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />

  <div class="menu">
    <a v-for="메뉴 in 메뉴들" :key="메뉴">{{ 메뉴 }}</a>
  </div>

  <Discount />

  <div v-for="(oneroom, i) in 원룸들" :key="i">
    <img :src="oneroom.image" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{ oneroom.title }}</h4>
    <p>{{ oneroom.price }}원</p>
  </div>
</template>

<script>
import data from './assets/oneroom.js';
import Discount from './components/DiscountBanner.vue';
import Modal from './components/Modal.vue';

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
    Discount, Modal,
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