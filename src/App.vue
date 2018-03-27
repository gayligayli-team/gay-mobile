<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
ul, ol, li{
  list-style-type: none;
}
img{
  border: none;
}
i{
  font-style: normal;
}
h1, h2, h3, h4, h5, h6{
  font-weight: normal;
}
input, button, textarea{
  border: 0;
  outline: 0;
}
html, body, #app{
  height: 100%;
}
body {
  background-color: #fbf9fe;
}
.clear:after{
  clear: both;
  content: '';
  display: table;
  height: 0;
}
</style>
