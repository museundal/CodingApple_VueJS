<template>
  <div class="menu">
    <a>Home</a>
    <a>Products</a>
    <a>About</a>
  </div>
  <div>
    <h4>{{ products[0] }}</h4>
    <p> 50 만원</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>60 만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>70 만원</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      products: ['마포구 원룸', '관악구 원룸', '송파구 원룸'],
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
  margin-top: 60px;
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
