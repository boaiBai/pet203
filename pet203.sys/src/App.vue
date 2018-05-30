<template>
  <div id="app">
     <Login></Login>
  </div>
</template>

<script>
import Login from "./components/Login.vue"; //注册登录模块

export default {
  name: "App",
  components: {
    Login: Login
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
}

input,
button {
  outline: 0px;
  border: none;
}
</style>

