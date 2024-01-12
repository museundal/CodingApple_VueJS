<template>
  <Transition name="fade">
    <Modal @closeModal="모달창열렸니 = false;" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
  </Transition>


  <div class="menu">
    <a v-for="메뉴 in 메뉴들" :key="메뉴">{{ 메뉴 }}</a>
  </div>

  <Discount v-if="showDiscount == true" />

  <button @click="priceSort">가격순정렬</button>
  <button @click="expensivePrice">가격역순정렬</button>
  <button @click="expensivePrice">가격역순정렬</button>
  <button @click="abcSort">가나다정렬</button>
  <button @click="sortBack">되돌리기</button>
  <Card @openModal="모달창열렸니 = true; 누른거 = $event" :원룸="원룸들[i]" v-for="(원룸, i) in 원룸들" :key="원룸" />
</template>

<script>
import data from './assets/oneroom.js';
import Discount from './components/DiscountBanner.vue';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  data() {
    return {
      showDiscount: true,
      누른거: 0,
      원룸들오리지널: [...data],
      원룸들: data,
      신고수: [0, 0, 0],
      products: ['마포구 원룸', '관악구 원룸', '송파구 원룸'],
      메뉴들: ['Home', 'Shop', 'About'],
      모달창열렸니: false
    }
  },
  mounted() { // mount 되고나서
    setTimeout(() => {
      this.showDiscount = false;
    }, 2000);
  },
  components: {
    Discount, Modal, Card,
  },
  methods: {
    priceSort() {
      this.원룸들.sort(function (a, b) {
        return a.price - b.price
      })
    },
    abcSort() {
      this.원룸들.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      })
    },
    expensivePrice() {
      this.원룸들.sort(function (a, b) {
        return b.price - a.price
      })
    },
    notFifty() {
      this.원룸들.sort(function (a) {
        return a.price < 500000;
      })
    },
    sortBack() {
      this.원룸들 = [...this.원룸들오리지널];
    }
  }
}
</script>

<style>
.fade-enter-from {
  /* opacity: 0; */
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  /* opacity: 1; */
  transform: translateY(0px);
}

.body {
  margin: 0
}

div {
  box-sizing: border-box;
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