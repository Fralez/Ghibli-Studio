<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather|Niramit|Roboto');

.router:link, .router:visited, .router:hover, .router:link {
  text-decoration: none;
  color: black;
}
.background--img {
    background: url('./assets/mainBackground.jpg');
    background-size: cover;
    min-height: 100%;
    min-width: 100%;
    position: fixed;
    filter: blur(4px);
    -webkit-filter: blur(4px);
    transform: scale(1.05);
  }
  .body {
    position: absolute;
  }
</style>