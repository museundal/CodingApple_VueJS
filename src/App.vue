<template>
  <div class="menu">
    <a v-for="메뉴 in 메뉴들" :key="메뉴">{{ 메뉴 }}</a>
  </div>
  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4>{{ products[0] }}</h4>
    <p>50만원</p>
    <button @click=" 신고수[0]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[0] }} </span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{ products[1] }}</h4>
    <p>50만원</p>
    <button @click="신고수[1]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }} </span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{ products[2] }}</h4>
    <p>50만원</p>
    <button @click="신고수[2]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[2] }} </span>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      신고수: [0, 0, 0],
      products: ['마포구 원룸', '관악구 원룸', '송파구 원룸'],
      메뉴들: ['Home', 'Shop', 'About'],
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
