<template>
  <div id="app">
    <h1>{{ dataPanel.latitude }}</h1>
    <h1>{{ dataPanel.longitude }}</h1>
    <h1>{{ forecast }}</h1>
  </div>
</template>

<script>
import axios from 'axios' 

export default {
  name: 'App',
  data() {
    return {
      dataPanel: {
        latitude: null,
        longitude: null,
        err: null
      },
      forecast: null
    }
  },
  methods: {
    loadForecast() {
      const that = this
      const darkSkyURL = '/api/clima/forecast/c9aa0102b9ac8f11dbc032574e1e5d06/'
      axios
        .get(`${darkSkyURL}${that.dataPanel.latitude},${that.dataPanel.longitude}`)
        
        .then(
        //If fulfilled
          function(response) {
            console.log(response);
            that.forecast = response.data.currently;
          },
        //If rejected
          function(err) {
            console.log('Error', err);
          }
        )
    }
  },
  created() {
    if (navigator.geolocation) {
      const that = this;
      navigator.geolocation.getCurrentPosition(
        //If resolve
        function(position){
          that.dataPanel.latitude = position.coords.latitude;
          that.dataPanel.longitude = position.coords.longitude;
          that.loadForecast();
          // console.log(position);
        },
        //If reject
        function(err) {
          that.dataPanel.err = err;
          // console.log(err);
        },
        //Options
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      )
    } else {
        console.log("User's position can't be reached.");   
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
