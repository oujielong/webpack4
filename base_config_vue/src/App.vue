<template>
  <div id="app">
    <ul class="nav">
      使用vue 框架的webpack 4
      <!-- <router-link :to="{path: '/'}" tag="li">主页</router-link>
      <router-link :to="{path: '/About'}" tag="li">空白页</router-link> -->
      <mockTest></mockTest>
    </ul>
  </div>
</template>

<script>
import mockTest from "./views/mock.vue";
export default {
  name: "App",
  components: {
    mockTest
  }
};
</script>
<style scoped>
.nav {
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

.nav li {
  display: inline-block;
  height: 35px;
  line-height: 35px;
  width: 100px;
  text-align: center;
  border: 1px solid #cccccc;
  box-shadow: 0 0 10px #eeeeee;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #ffffff;
}

.nav li:hover,
li.router-link-exact-active {
  background-color: #3eaf7c;
  border: 1px solid #3eaf7c;
  color: #ffffff;
  box-shadow: 0 0 20px #eeeeee;
}
</style>
