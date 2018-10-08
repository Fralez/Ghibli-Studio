<template>
  <div id="MovieDetails">
    <div class="header">
      <h1 class="title">{{ film.title }}</h1>
    </div>

    <div class="body">
      <p class="description">{{ film.description }}</p>
    </div>
  </div>
</template>

<script>
/**
 * Details:
 * Title
 * Description
 * Director's Name
 * Producer's Name
 * Year
 * Rating
 * 
 * _Back-to-MainBoard button
 */

//Libraries
import axios from 'axios';


export default {
  data() {
    return {
      ghibliFILMS: 'https://ghibliapi.herokuapp.com/films',      
      filmID: this.$route.params.movieID,
      film: null
    }
  },
  computed: {
    filmTitle() {
      return this.film.title;
    },
    filmDescription() {
      return this.film.description;
    },
    filmDirector() {
      return this.film.director;
    },
    filmProducer() {
      return this.film.producer
    },
    filmYear() {
      return this.film.release_date;
    },
    filmRating() {
      return this.film.rt_score
    }
  },
  created() {
    const self = this;

    axios.get(self.ghibliFILMS + '/' + self.filmID)
      .then(
        function(res) {
          const film = res.data;
          self.film = film;
        },
      )
  }
}
</script>

<style scoped>
  .title, .description {
    margin: 1rem;
  }
</style>
