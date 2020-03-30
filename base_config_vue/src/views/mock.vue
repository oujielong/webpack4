<template>
  <div>
    test
    <button @click="clickMe">获取城市</button>
    <ul class="city_container">
      <li
        class="city_item"
        v-for="item in cityList"
        :key="item.id"
        @click="getCityInfo(item.city)"
      >
        <a href="javascript:void(0)" :style="{ color: item.color }">{{
          item.city
        }}</a>
      </li>
    </ul>
    <img :src="img" alt="" />
  </div>
</template>
<script>
export default {
  name: "test",
  components: {},
  data() {
    return {
      cityList: [],
      img: ""
    };
  },
  methods: {
    clickMe() {
      // 这里请求的地址要和mock中定义的请求地址一致
      this.$axios.get("http://localhost:8080/test/city").then(res => {
        console.log(77, res);
        if (res.data) {
          this.cityList = res.data.cityList;
        }
      });
    },

    getCityInfo(name) {
      this.$axios
        .post("http://localhost:8080/test/cityInfo", {
          name: name
        })
        .then(res => {
          console.log(88, res);
          if (res.data) {
            this.img = res.data.img;
          }
        });
    }
  }
};
</script>
<style scoped>
.city_item {
  list-style: none;
  float: left;
  border: 1px solid orange;
  width: auto;
  height: 50px;
  line-height: 50px;
  padding: 0 5px;
  border-right: none;
}
.city_container :last-of-type {
  border-right: 1px solid orange;
}
.city_container .city_item a {
  text-decoration: none;
  border: none;
}
</style>