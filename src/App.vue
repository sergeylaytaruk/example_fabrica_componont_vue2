<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <bordered
        msg="some message"
        color="indigo"
        width="5px"
        @click="clicked"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import WithBorder from './components/WithBorder.js';
const bordered = WithBorder(HelloWorld);

export default {
  name: 'App',
  components: {
    bordered
  },
  methods: {
    clicked () {
      console.log("clicked");
    }
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
</style>
