<template>
  <router-view />
</template>

<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}
html {
  font-size: calc(100vw / 7.5);
}
body {
  min-width: 320px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f1f1f1;
  color: #333;
  font-size: 0.25rem;
}
a {
  display: block;
}
.sprite {
  background: url(./assets/images/index.png) no-repeat;
  background-size: 7.5rem;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
