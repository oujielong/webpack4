<template>
  <div>
    <div>Hello {{name}}!</div>
    <hello-component :name="name" :initialEnthusiasm="5" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import HelloComponent from "../components/Hello.vue";
export default Vue.extend({
  name: "hell0",
  data() {
    return {
      name: "World"
    };
  },
  components: {
    HelloComponent
  }
});
</script>
<style>
</style>